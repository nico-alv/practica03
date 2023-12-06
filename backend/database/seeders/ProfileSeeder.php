<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('profiles')->insert([
            'name' => "Nicolas",
            'lastname' => "Alvarez",
            'email' => 'nicolas.alvarez02@alumnos.ucn.cl',
            'city' => 'Antofagasta',
            'country' => 'Chile',
            'summary' => 'Estudio ingeniería civil informática en la Universidad católica del Norte.',
        ]);
    }
}
