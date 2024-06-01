<?php

// app/Http/Controllers/LanguageController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function switchLang($locale)
    {
        Session::put('locale', $locale);
        return redirect()->back();
    }


    public function getTranslations($locale)
    {
        app()->setLocale($locale);

        return response()->json([
            'messages' => Lang::get('messages'),
            // Add other translation files if needed
        ]);
    }
}

