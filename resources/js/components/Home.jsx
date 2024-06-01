import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?search=${searchTerm}&page=${page}`);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchLatestProducts = async () => {
    try {
      const response = await axios.get('/latest-products');
      setLatestProducts(response.data);
    } catch (error) {
      console.error('Error fetching latest products:', error);
    }
  };

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Search Products</h2>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 mb-4">Search</button>
      <div>
        <h3 className="text-xl mb-4">Search Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className="border p-4 cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <h4 className="text-lg">{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {page > 1 && (
            <button onClick={() => setPage(page - 1)} className="bg-gray-500 text-white p-2">
              Previous
            </button>
          )}
          {products.length === 10 && (
            <button onClick={() => setPage(page + 1)} className="bg-gray-500 text-white p-2">
              Next
            </button>
          )}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl mb-4">Latest Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestProducts.map(product => (
            <div
              key={product.id}
              className="border p-4 cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <h4 className="text-lg">{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
