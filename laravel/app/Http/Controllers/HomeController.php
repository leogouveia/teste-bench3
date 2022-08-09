<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class HomeController extends Controller
{
    function index()
    {
        $clients = Client::limit(10)->get();

        return $clients;
    }

    function info()
    {
        return "oi";
    }
}
