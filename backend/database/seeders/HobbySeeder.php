<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HobbySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hobbies')->insert([
            'name' => "Modding",
            'description' => "Modificar juegos para agregar contenido nuevo",
        ]);
        DB::table('hobbies')->insert([
            'name' => "Robotica",
            'description' => "Crear robots",
        ]);
    }
}
