import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity, onCheckout }) {
  const totalBelanja = cartItems.reduce((total, item) => total + (item.harga * item.kuantitas), 0);

  return (
    <div className="cart-section">
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </ul>
          <h3>Total Belanja: Rp{totalBelanja.toLocaleString('id-ID')}</h3>
          <button
            className="btn-success"
            onClick={onCheckout}
            disabled={cartItems.length === 0}
          >
            Cetak Struk / Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;