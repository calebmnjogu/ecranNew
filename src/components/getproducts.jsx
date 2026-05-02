// Getproducts.jsx
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./carousel";

import ChatToggleButton from "./ChatToggleButton";
import Chatbot from "./chatbot";

const Getproducts = () => {
  // Hooks
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();

  // Filter states
  const [filters, setFilters] = useState({
    searchQuery: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "name",
  });

  // Image URL
  const image_url = "https://calebnjogu.pythonanywhere.com/static/images/";

  const getProducts = async () => {
    setLoading("Please wait, we are retrieving the products...");
    try {
      const response = await axios.get(
        "https://calebnjogu.pythonanywhere.com/api/getproducts"
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("Failed to fetch products. Please try again.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Apply filters whenever filters or products change
  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const applyFilters = () => {
    let filtered = [...products];

    // Search filter
    if (filters.searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.product_name
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase()) ||
          product.product_description
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(
        (product) =>
          product.category?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Price range filter
    if (filters.minPrice) {
      filtered = filtered.filter(
        (product) =>
          parseFloat(product.product_cost) >= parseFloat(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(
        (product) =>
          parseFloat(product.product_cost) <= parseFloat(filters.maxPrice)
      );
    }

    // Sorting
    switch (filters.sortBy) {
      case "price-low-high":
        filtered.sort(
          (a, b) => parseFloat(a.product_cost) - parseFloat(b.product_cost)
        );
        break;
      case "price-high-low":
        filtered.sort(
          (a, b) => parseFloat(b.product_cost) - parseFloat(a.product_cost)
        );
        break;
      case "name":
        filtered.sort((a, b) =>
          a.product_name.localeCompare(b.product_name)
        );
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      searchQuery: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "name",
    });
  };

  // Get unique categories
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].filter(Boolean);

  return (
    <>
      <div className="row">
        <Carousel />
        <h3 className="mt-5">Available Products</h3>

        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              name="searchQuery"
              value={filters.searchQuery}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Min Price"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Max Price"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              name="sortBy"
              value={filters.sortBy}
              onChange={handleFilterChange}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-outline-secondary w-100"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>
        </div>

        {loading && <p className="text-center text-primary">{loading}</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        {/* Products Grid */}
        {filteredProducts.map((product) => (
          <div
            className="col-md-3 justify-content-center mb-4"
            key={product.product_id}
          >
            <div className="card shadow">
              <img
                src={image_url + product.product_photo}
                alt={product.product_name}
                className="mt-4 product_img"
              />
              <div className="card-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <p className="text-muted">{product.product_description}</p>
                <br />
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <button
                  onClick={() =>
                    navigate("/makepayment", { state: { product } })
                  }
                  className="btn btn-dark mt-2 w-100"
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chatbot */}
      <ChatToggleButton onClick={() => setShowChat((s) => !s)} />
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
    </>
  );
};

export default Getproducts;