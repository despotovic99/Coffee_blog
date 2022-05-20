<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\UserRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        UserRole::truncate();
        Category::truncate();

        Category::factory()->create([
            'name'=>'General',
            'slug'=>'general'
        ]);

        UserRole::factory()->create([
            'role_name' => 'Administrator',
            'role_slug' => 'admin',
            'role_capability' => true,
        ]);
        UserRole::factory()->create([
            'role_name' => 'Viewer',
            'role_slug' => 'viewer',
            'role_capability' => false,
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
