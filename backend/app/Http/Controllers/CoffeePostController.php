<?php

namespace App\Http\Controllers;

use App\Http\Resources\CoffeePostCollection;
use App\Http\Resources\CoffeePostCommentCollection;
use App\Http\Resources\CoffeePostResource;
use App\Models\CoffeePost;
use App\Models\CoffeePostComment;
use App\Models\UserRole;
use App\Rules\CategoryExsists;
use App\Rules\CoffeeExsists;
use App\Rules\CoffeePostExsists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoffeePostController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $coffee_posts = CoffeePost::all();
        return new CoffeePostCollection($coffee_posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'post_content' => 'required|string',
            'category_id' => ['required', 'integer', new CategoryExsists()],
            'coffee_id' => ['integer','nullable', new CoffeeExsists()]
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>'ERROR: Post not saved!','message'=>$validator->errors()]);
        }

        $userID = auth()->user()->id;

        $coffeePost = CoffeePost::create([
            'title' => $request->title,
            'post_content' => $request->post_content,
            'category_id' => $request->category_id,
            'coffee_id' => $request->coffee_id,
            'user_id' => $userID
        ]);

        return response()->json(['success' => true, 'message' => 'Coffee post saved.', new CoffeePostResource($coffeePost)]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\CoffeePost $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function show(CoffeePost $coffeePost) {
        $comments = CoffeePostComment::all()->where('post_id', '=', $coffeePost->id);
        return ['post' => new CoffeePostResource($coffeePost), 'comments' => new CoffeePostCommentCollection($comments)];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\CoffeePost $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function edit(CoffeePost $coffeePost) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\CoffeePost $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CoffeePost $coffeePost) {
        $user = auth()->user();
        $user_role = UserRole::find($user->user_role_id);

        if ($coffeePost->user_id != $user->id && !$user_role->role_capability && $user_role->role_slug !== 'admin') {
            return response()->json(['You have not any permissions to do that!']);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'post_content' => 'required|string',
            'category_id' => ['required', 'integer', new CategoryExsists()],
            'coffee_id' => ['integer','nullable', new CoffeeExsists()]
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>'ERROR: Post not updated!','message'=>$validator->errors()]);
        }

        $coffeePost->title = $request->title;
        $coffeePost->post_content = $request->post_content;
        $coffeePost->category_id = $request->category_id;
        $coffeePost->coffee_id = $request->coffee_id;
        $coffeePost->save();

        return response()->json(['success' => true, 'message' => 'Coffee post updated.', new CoffeePostResource($coffeePost)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\CoffeePost $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoffeePost $coffeePost) {
        $user = auth()->user();
        $user_role = UserRole::find($user->user_role_id);

        if ($coffeePost->user_id != $user->id && !$user_role->role_capability && $user_role->role_slug !== 'admin') {
            return response()->json(['You have not any permissions to do that!']);
        }

        $coffeePost->delete();
        return response()->json(['Coffee post deleted.']);

    }

    public function show_newest() {

        $posts = CoffeePost::all()->take(5);
        return new CoffeePostCollection($posts);
    }
}
