<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class FrameworkSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        DB::table('frameworks')->insert([
            'name' => "Laravel",
            'level' => "Medio",
            'year' => 2022,
        ]);
        DB::table('frameworks')->insert([
            'name' => "React",
            'level' => "Principiante",
            'year' => 2023,
        ]);
    }
}
