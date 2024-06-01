<?php


use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\AuthController;




Route::middleware([CorsMiddleware::class])->group(function () {
    Route::get('/', function () {
        return view('welcome');
    });
    
    
    
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/latest-products', [ProductController::class, 'latest']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
   Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
Route::get('/search', [ProductController::class, 'search']);






Route::get('translations/{locale}', [TranslationController::class, 'getTranslations']);





Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');



});

