<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NowController extends Controller
{
    public function getNow(Request $request){
        
        return response()->json([
            'data' => now()->format('d/m/Y H:i:s')
        ]);
    }
}
