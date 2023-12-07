<?php

namespace App\Http\Controllers;

use App\Models\hobby;
use App\Models\profile;
use App\Models\framework;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
    public function editProfile(Request $request)
    {
    Log::info($request);
    $profile = profile::first();
    $profile->update($request->only(['name', 'lastname', 'email', 'city', 'country', 'summary']));
    if ($request->has('frameworks')) {
        $frameworkIds = framework::whereIn('name', $request->frameworks)
                                ->pluck('id')
                                ->toArray();
        $profile->frameworks()->sync($frameworkIds);
    }
    if ($request->has('hobbies')) {
        $hobbyIds = hobby::whereIn('name', $request->hobbies)
                         ->pluck('id')
                         ->toArray();
        $profile->hobbies()->sync($hobbyIds);
    }
    return response()->json($profile);
    }
}
