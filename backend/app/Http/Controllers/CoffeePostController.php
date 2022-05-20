<?php

namespace App\Http\Controllers;

use App\Http\Resources\CoffeePostCollection;
use App\Http\Resources\CoffeePostResource;
use App\Models\CoffeePost;
use App\Rules\CategoryExsists;
use App\Rules\CoffeeExsists;
use App\Rules\CoffeePostExsists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoffeePostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $coffee_posts = CoffeePost::all();
        return new CoffeePostCollection($coffee_posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'post_content' => 'required|string',
            'img_path' => 'string',
            'category_id'=>['required', 'integer', new CategoryExsists()],
            'coffee_id'=>['integer', new CoffeeExsists()]
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $userID=auth()->user()->id;

        $coffeePost =  CoffeePost::create([
            'title' => $request->title,
            'post_content' => $request->post_content,
            'img_path' => $request->img_path,
            'category_id'=>$request->category_id,
            'coffee_id'=>$request->coffee_id,
            'user_id'=>$userID
        ]);

        return response()->json(['Coffee post saved.',new CoffeePostResource($coffeePost)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CoffeePost  $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function show(CoffeePost $coffeePost)
    {
        return new CoffeePostResource($coffeePost);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CoffeePost  $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function edit(CoffeePost $coffeePost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CoffeePost  $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CoffeePost $coffeePost)
    {
        $user = auth()->user();

        if($coffeePost->user_id!=$user->id || !$user->role_capability){
            return response()->json(['You have not any permissions to do that!']);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'post_content' => 'required|string',
            'img_path' => 'string',
            'category_id'=>['required', 'integer', new CategoryExsists()],
            'coffee_id'=>['integer', new CoffeeExsists()]
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $coffeePost->title = $request->title;
        $coffeePost->post_content = $request->post_content;
        $coffeePost->img_path = $request->img_path;
        $coffeePost->category_id = $request->category_id;
        $coffeePost->coffee_id = $request->coffee_id;
        $coffeePost->save();

        return response()->json(['Coffee post updated.',new CoffeePostResource($coffeePost)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CoffeePost  $coffeePost
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoffeePost $coffeePost)
    {
        $user = auth()->user();

        if($coffeePost->user_id!=$user->id || !$user->role_capability){
            return response()->json(['You have not any permissions to do that!']);
        }

        $coffeePost->delete();
        return response()->json(['Coffee post deleted.']);

    }
}
