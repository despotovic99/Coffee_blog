<?php

namespace App\Http\Controllers;

use App\Http\Resources\CoffeeCollection;
use App\Http\Resources\CoffeeResource;
use App\Models\Coffee;
use App\Rules\UserExsist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoffeeController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return new CoffeeCollection(Coffee::all());
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
        $user = auth()->user();

        if($user->role_slug!=='admin' || !$user->role_capability) {
            return response()->json(['You have not any permissions to do that!']);
        }

            $validator = Validator::make($request->all(), [
                'coffee_name' => 'required|string|max:255',
                'coffee_sort' => 'required|string|max:255',
                'country_origin' => 'required|string|max:255',
                'description' => 'string|max:255',
                'user_id' => ['required', 'integer', new UserExsist()],
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors());
            }

            $coffee = Coffee::create([
                'coffee_name' => $request->coffee_name,
                'coffee_sort' => $request->coffee_sort,
                'country_origin' => $request->country_origin,
                'description' => $request->description,
                'user_id' => $request->user_id,
            ]);

            return response()->json(['Coffee saved.', new CoffeeResource($coffee)]);

    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Coffee $coffee
     * @return \Illuminate\Http\Response
     */
    public function show(Coffee $coffee) {
        return new CoffeeResource($coffee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Coffee $coffee
     * @return \Illuminate\Http\Response
     */
    public function edit(Coffee $coffee) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Coffee $coffee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Coffee $coffee) {

        $user = auth()->user();

        if($user->role_slug!=='admin' || !$user->role_capability) {
            return response()->json(['You have not any permissions to do that!']);
        }

        $validator = Validator::make($request->all(), [
            'coffee_name' => 'required|string|max:255',
            'coffee_sort' => 'required|string|max:255',
            'country_origin' => 'required|string|max:255',
            'description' => 'string|max:255',
            'user_id' => ['required', 'integer', new UserExsist()],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $coffee->coffee_name = $request->coffee_name;
        $coffee->coffee_sort = $request->coffee_sort;
        $coffee->country_origin = $request->country_origin;
        $coffee->description = $request->description;
        $coffee->user_id = $request->user_id;
        $coffee->save();
        return response()->json(['Coffee updated.', new CoffeeResource($coffee)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Coffee $coffee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coffee $coffee) {

        $user = auth()->user();

        if($user->role_slug!=='admin' || !$user->role_capability) {
            return response()->json(['You have not any permissions to do that!']);
        }

        $coffee->delete();
        return response()->json(['Coffee deleted.']);
    }
}
