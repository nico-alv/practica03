<?php

namespace App\Http\Controllers;

use App\Models\framework;
use App\Models\profile;
use Illuminate\Http\Request;
class FrameworkController extends Controller
{
    public function store(Request $request){
        framework::create($request->validated());
        return response()->json("framework creado");
    }

    public function update(Request $request, framework $framework)
    {
        $framework->update($request->validated());
        return $framework;
    }

    public function destroy(framework $framework){
        $framework->delete();
        return response()->json("framework eliminado");
    }
}
