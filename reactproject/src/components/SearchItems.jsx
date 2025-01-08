import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaShoppingCart, FaUser } from 'react-icons/fa';

const SearchItems = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setAllProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query === '') {
      setResults([]);
    } else {
      const filteredResults = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query, allProducts]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container-fluid px-4">
      {/* Navbar with integrated search bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MARKET NEST</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/men">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/girls">Girls</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/boys">Boys</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/holiday">Holiday Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/inspiration">Inspiration</a>
              </li>
            </ul>
            {/* Search bar in navbar */}
            <form className="d-flex me-3" style={{ flex: '1', maxWidth: '300px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search for products..."
                value={query}
                onChange={handleSearchChange}
              />
            </form>
            <div className="d-flex align-items-center">
              <a href="/cart" className="text-dark me-3">
                <FaShoppingCart />
              </a>
              <a href="/login" className="text-dark">
                <FaUser />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Display Search Results */}
      <div className="search-results">
        {results.length > 0 ? (
          <div className="row g-4">
            {results.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="card h-100">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Fr. {product.price}</p>
                    <button className="btn btn-dark mt-auto">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default SearchItems;
