import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [receipt, setReceipt] = useState(null);

  const handleAddToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === productToAdd.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, kuantitas: item.kuantitas + 1 }
            : item
        );
      }
      return [...prevItems, { ...productToAdd, kuantitas: 1 }];
    });
    setReceipt(null);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, kuantitas: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Keranjang kosong, tidak bisa checkout.");
      return;
    }
    const totalBelanja = cartItems.reduce((total, item) => total + (item.harga * item.kuantitas), 0);
    const strukData = {
      items: [...cartItems],
      total: totalBelanja,
      tanggal: Date.now(),
    };
    setReceipt(strukData);
    setCartItems([]);
  };

  const handleClearReceipt = () => {
    setReceipt(null);
  };

  useEffect(() => {
  }, [cartItems]);

  return (
    <div className="app-container">
      <ProductList onAddToCart={handleAddToCart} />
      <div className="sidebar">
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />
        {receipt && <Receipt receiptData={receipt} onClearReceipt={handleClearReceipt} />}
      </div>
    </div>
  );
}

export default App;