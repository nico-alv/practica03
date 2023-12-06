<?php

namespace App\Http\Controllers;

use App\Models\profile;
use Illuminate\Http\Request;
class ProfileController extends Controller
{
    /**
     * Display the first available profile and its contents.
     */
    public function showProfile()
    {
        $profile = profile::first();
        if ($profile) {
            $data = [
                'name'       => $profile->name,
                'lastname'   => $profile->lastname,
                'email'      => $profile->email,
                'city'       => $profile->city,
                'country'    => $profile->country,
                'summary'    => $profile->summary,
                'frameworks' => $profile->frameworks,
                'hobbies'    => $profile->hobbies
            ];
            return response()->json($data);
        } else {
            return response()->json(['error' => 'Perfil no encontrado'], 404);
        }
    }
}
