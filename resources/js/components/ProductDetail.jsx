import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/product/${id}`);
      setProduct(response.data);
      setFormData({
        name: response.data.name,
        description: response.data.description,
        price: response.data.price,
      });
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = async () => {
    try {
      await axios.put(`/product/${id}`, formData);
      setProduct({ ...product, ...formData });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/product/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <h2>Edit Product</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <button onClick={handleEdit} className="bg-blue-500 text-white p-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white p-2 ml-2">Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2">Edit</button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-2 ml-2">Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
