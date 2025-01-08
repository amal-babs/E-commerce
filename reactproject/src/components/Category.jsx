import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/style.css';

const Category = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Map URL category names to API category names
  const categoryMap = {
    girls: ["women's clothing", "jewelery"], // Girls includes both categories
    boys: ["men's clothing"] // Example; adjust if needed to match actual categories
  };

  // Filter products based on mapped category
  useEffect(() => {
    const mappedCategories = categoryMap[category.toLowerCase()] || [category];
    const filtered = products.filter((product) =>
      mappedCategories.includes(product.category.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [category, products]);

  return (
    <div className="container">
      <h2 className="my-4">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{product.title}</h5>
                  <p className="card-text text-muted">
                    {product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}
                  </p>
                  <p className="fw-bold">Fr. {product.price.toFixed(2)}</p>
                  <button className="btn btn-warning">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
