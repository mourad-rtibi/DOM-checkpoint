
import React, { useState } from 'react';
import Cart from './components/Cart';
import './App.css'; 


const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', quantity: 1, isLiked: false },
    { id: 2, name: 'Item 2', quantity: 2, isLiked: true },
    { id: 3, name: 'Item 3', quantity: 1, isLiked: false },
    { id: 4, name: 'Item 4', quantity: 2, isLiked: true },
    { id: 5, name: 'Item 5', quantity: 1, isLiked: false },
    { id: 6, name: 'Item 6', quantity: 2, isLiked: true },
    { id: 7, name: 'Item 7', quantity: 1, isLiked: false },
    { id: 8, name: 'Item 8', quantity: 2, isLiked: true },
    
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleLike = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, isLiked: !item.isLiked } : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity *  10,
      0
    );
  };

  return (
    <div className="App">
      <Cart
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
        onDelete={handleDelete}
        onLike={handleLike}
      />
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default App;
