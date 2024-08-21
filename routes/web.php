<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EcoleController;


Route::controller(EventController::class)->group(function(){
    
    Route::get('/event', 'index')->name('event');

    
});

Route::controller(EcoleController::class)->group(function(){
    
    Route::get('/ecole', 'school')->name('ecole');

    
});