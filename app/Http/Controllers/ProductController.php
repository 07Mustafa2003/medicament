<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $letter = $request->input('letter');
        $page = $request->input('page', 1);

        // Query to fetch products starting with the given letter
        $query = Product::query();
        if ($letter) {
            $query->where('name', 'like', $letter . '%');
        }

        // Paginate the results (assuming 10 products per page)
        $products = $query->paginate(10, ['*'], 'page', $page);

        return response()->json($products);
    }
    
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }

    public function latest()
    {
        $oneMonthAgo = now()->subMonth();
        $latestProducts = Product::where('created_at', '>=', $oneMonthAgo)
                                  ->latest()
                                  ->take(10)
                                  ->get();

        return response()->json($latestProducts);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        Product::create($request->only('name', 'description', 'price'));

        return response()->json(['message' => 'Product added successfully'], 201);
    }


    public function search(Request $request)
    {
        $searchTerm = $request->input('search');
        $page = $request->input('page', 1);

        // Assuming you have pagination set up and using 10 items per page
        $products = Product::where('name', 'LIKE', "%{$searchTerm}%")
                            ->orWhere('description', 'LIKE', "%{$searchTerm}%")
                            ->paginate(10, ['*'], 'page', $page);

        return response()->json($products);
    }
}
