<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function upload(Request $request): string
    {
        $request->validate([
            'images' => 'required',
            'images.*' => 'required|mimes:jpg,jpeg,png,gif',
        ]);

        $images = [];

        if ($request->file('images')){
            foreach($request->file('images') as $key => $file)
            {
                $fileName = time() . rand(1,99) . '.' . $file->extension();
                $file->move(public_path('images'), $fileName);
                $images[] = $fileName;
            }
        }

        return response()->json(['images' => join(',', $images)]);
    }
}
