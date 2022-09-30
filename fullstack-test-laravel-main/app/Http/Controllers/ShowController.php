<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function show(Request $request){ 

        $words = strip_tags(trim($request['words']));

        return json_encode(["words" => $words]);

    }
}
