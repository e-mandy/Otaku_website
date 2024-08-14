<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;

Route::controller(EventController::class)->group(function(){
    
    Route::get('/event', 'index');

    
});