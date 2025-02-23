<?php

use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/books', [BookController::class, 'index']); // Lấy tất cả sách
Route::post('/books', [BookController::class, 'store']); // Thêm sách mới
Route::get('/books/{id}', [BookController::class, 'show']); // Lấy chi tiết sách
Route::put('/books/{id}', [BookController::class, 'update']); // Cập nhật sách
Route::delete('/books/{id}', [BookController::class, 'destroy']); // Xóa sách
