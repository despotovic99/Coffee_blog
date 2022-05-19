<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('coffees', function (Blueprint $table) {
            $table->renameColumn('coffe_name', 'coffee_name');
            $table->renameColumn('coffe_sort', 'coffee_sort');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('coffee_name', function (Blueprint $table) {
            $table->renameColumn('coffee_name', 'coffe_name');
            $table->renameColumn('coffee_sort', 'coffe_sort');
        });
    }
};
