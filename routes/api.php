<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Users\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'users', 'as' => 'users.'], function () {
	Route::post('/login', [UserController::class, 'login'])->name('login');
});
