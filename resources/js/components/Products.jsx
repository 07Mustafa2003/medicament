import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [letter, setLetter] = useState('');
  const [page, setPage] = useState(1);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/products?letter=${letter}&page=${page}`);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/products', newProduct);
      fetchProducts(); // Refresh the product list after adding a new product
      setNewProduct({ name: '', description: '', price: '' }); // Clear the form
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [letter, page]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by starting letter:</label>
        <select value={letter} onChange={(e) => setLetter(e.target.value)} className="border p-2 rounded-md">
          <option value="">All</option>
          {Array.from(Array(26)).map((_, i) => (
            <option key={i} value={String.fromCharCode(65 + i)}>
              {String.fromCharCode(65 + i)}
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Product</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Product Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={newProduct.name}
            onChange={handleInputChange}
            required
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
            className="border p-2 w-full rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={newProduct.price}
            onChange={handleInputChange}
            required
            className="border p-2 w-full rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Add Product</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="border p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-medium">${product.price}</p>
          </Link>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)} className="bg-gray-500 text-white p-2 rounded-md">
            Previous
          </button>
        )}
        {products.length === 10 && (
          <button onClick={() => setPage(page + 1)} className="bg-gray-500 text-white p-2 rounded-md">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
