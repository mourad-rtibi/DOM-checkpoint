// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onQuantityChange, onDelete, onLike }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem
        
          key={item.id}
          item={item}
          onQuantityChange={onQuantityChange}
          onDelete={onDelete}
          onLike={onLike}
        />
      ))}
    </div>
  );
};

export default Cart;
