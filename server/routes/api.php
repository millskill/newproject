<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('signup', 'AuthController@signup');
});