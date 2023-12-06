<?php

namespace App\Http\Controllers;

use App\Models\hobby;
use App\Models\profile;
use Illuminate\Http\Request;
class HobbyController extends Controller
{
    public function store(Request $request){
        hobby::create($request->validated());
        return response()->json("hobby creado");
    }

    public function update(Request $request, hobby $hobby)
    {
        $hobby->update($request->validated());
        return $hobby;
    }

    public function destroy(hobby $hobby){
        $hobby->delete();
        return response()->json("hobby eliminado");
    }
}
