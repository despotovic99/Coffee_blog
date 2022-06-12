<?php

namespace App\Http\Controllers;

use App\Models\CoffeePost;
use App\Models\CoffeePostComment;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class CoffeePostStatisticsController extends Controller {


    public function getStatisticsForAdminPage() {

        $number_of_posts = count(CoffeePost::all());
        $number_of_comments = count(CoffeePostComment::all());
        $number_of_users = count(User::all());
        $svi = DB::table('personal_access_tokens')->count();

        $postovi_data_statistika = [];
        $brojPostovaDanas = count(CoffeePost::whereDate('created_at', date('Y-m-d'))->get());

        $postovi_data_statistika[] = ['name' => 'Danas', 'uv' => $brojPostovaDanas];


        for ($i = 1; $i < 6; $i++) {
            $yesterday = date("Y-m-d", strtotime("-$i days"));
            $brojPostova = count(CoffeePost::whereDate('created_at', $yesterday)->get());
            $postovi_data_statistika[] = ['name' => $yesterday, 'uv' => $brojPostova];
        }


        return response()->json(['success' => true, 'statistics' => ['posts' => $number_of_posts,
                'comments' => $number_of_comments,
                'users' => $number_of_users,
                'active_users' => $svi],
                'chart_data' => [$postovi_data_statistika]]
        );

    }

}
