<?php

namespace App\Http\Controllers;

use App\Models\CoffeePost;
use App\Models\CoffeePostComment;
use App\Models\User;
use Illuminate\Http\Request;

class CoffeePostStatisticsController extends Controller {
    public function getStatisticsForAdminPage(Request $request) {

        $number_of_posts = count(CoffeePost::all());
        $number_of_comments = count(CoffeePostComment::all());
        $number_of_users = count(User::all());

        return response()->json(['success'=>true,'statistics'=>['posts' => $number_of_posts,
            'comments' => $number_of_comments,
            'users' => $number_of_users]]);

    }
}
