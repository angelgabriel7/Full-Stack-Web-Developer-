import React from 'react';

function CartItem({ item, onRemoveFromCart, onUpdateQuantity }) {
  return (
    <li className="cart-item">
      <div className="item-details">
        <span>{item.nama.charAt(0).toUpperCase() + item.nama.slice(1)}</span>
        <span> - @ Rp{item.harga.toLocaleString('id-ID')}</span>
      </div>
      <div className="quantity-controls">
        <button
          className="btn-neutral"
          onClick={() => onUpdateQuantity(item.id, item.kuantitas - 1)}
        >
          -
        </button>
        <span>{item.kuantitas}</span>
        <button
          className="btn-neutral"
          onClick={() => onUpdateQuantity(item.id, item.kuantitas + 1)}
        >
          +
        </button>
      </div>
      <span>Total: Rp{(item.harga * item.kuantitas).toLocaleString('id-ID')}</span>
      <button className="btn-danger" onClick={() => onRemoveFromCart(item.id)}>Hapus</button>
    </li>
  );
}

export default CartItem;