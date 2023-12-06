<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileHobbySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('profile_hobby')->insert([
            'profile_id' => 1,
            'hobby_id' => 1,
        ]);
        DB::table('profile_hobby')->insert([
            'profile_id' => 1,
            'hobby_id' => 2,
        ]);
    }
}
