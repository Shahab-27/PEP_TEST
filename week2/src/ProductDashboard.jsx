import React, { useState } from "react";

function ProductDashboard() {
  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Fridge", price: 10000 },
    { id: 3, name: "AC", price: 30000 },
    { id: 4, name: "Geyser", price: 10000 },
    { id: 5, name: "RO", price: 12000 },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const toggleCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
      setTotal(total - product.price);
    } else {
      setCart([...cart, product]);
      setTotal(total + product.price);
    }
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const inCart = cart.find((item) => item.id === product.id);

            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => toggleCart(product)}>
                    {inCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Total: {total}</h3>
    </div>
  );
}

export default ProductDashboard;
