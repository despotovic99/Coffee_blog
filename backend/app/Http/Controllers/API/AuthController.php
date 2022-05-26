<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserRole;
use App\Rules\UserRoleExsist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller {
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:5'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user_role_id = UserRole::where('role_slug', 'viewer')->firstOrFail()->id;
        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'user_role_id' => $user_role_id,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer', 'success' => true, 'user_type' => 'viewer']);
    }

    public function login(Request $request) {

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $userRole = DB::table('users')
            ->join('user_roles', 'users.user_role_id', '=', 'user_roles.id')
            ->select('user_roles.role_slug')
            ->where('users.id', '=', $user->id)
        ->get();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Successfully logged in ' . $user->name . " " . $user->lastname,
            'access_token' => $token, 'token_type' => 'Bearer', 'success' => true, 'user_type' => $userRole]);

    }

    public function logout(Request $request) {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Successfully logged out'
        ];
    }
}
