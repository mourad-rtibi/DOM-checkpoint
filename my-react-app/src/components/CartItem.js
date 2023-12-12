// src/components/CartItem.js
import React, { useState } from 'react';

const CartItem = ({ item, onQuantityChange, onDelete, onLike }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(0, quantity + change);
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <button onClick={() => handleQuantityChange(-1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantityChange(1)}>+</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button
        onClick={() => onLike(item.id)}
        style={{ color: item.isLiked ? 'red' : 'black' }}
      >
        ❤
      </button>
    </div>
  );
};

export default CartItem;
