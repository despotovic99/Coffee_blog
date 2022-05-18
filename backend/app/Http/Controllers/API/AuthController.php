<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Rules\UserRoleExsist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email'=>'required|string|max:255|email|unique:users',
            'password'=>'required|string|min:5',
            'user_role_id'=>['required','integer', new UserRoleExsist()],
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name'=>$request->name,
            'lastname'=>$request->lastname,
            'email'=>$request->email,
            'user_role_id'=>$request->user_role_id,
            'password'=>Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['data'=>$user,'access_token'=>$token,'token_type'=>'Bearer']);
    }

    public function login(Request $request){

        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message'=>'Unauthorized'],401);
        }

        $user = User::where('email',$request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message'=>'Successfully logged in '.$user->name." ".$user->lastname,
            'access_token'=>$token,'token_type'=>'Bearer']);

    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Successfully logged out'
        ];
    }
}
