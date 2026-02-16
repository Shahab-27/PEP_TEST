import React from 'react'
import useSearch from "./Search";
import ProductList from "./ProductList";
function Product() {
  
     const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 },
    { id: 4, name: "Headphones", price: 3000 },
    { id: 5, name: "Charger", price: 1000 }
  ];

  const { search, setSearch, filteredItems } = useSearch(products);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>
        Showing {filteredItems.length} of {products.length} products
      </p>

      <ProductList products={filteredItems} />
    </div>
  );
  
}

export default Product