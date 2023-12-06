<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileFrameworkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('profile_framework')->insert([
            'profile_id' => 1,
            'framework_id' => 1,
        ]);
        DB::table('profile_framework')->insert([
            'profile_id' => 1,
            'framework_id' => 2,
        ]);
    }
}
