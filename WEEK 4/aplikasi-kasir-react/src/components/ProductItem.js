import React from 'react';

function ProductItem({ product, onAddToCart }) {
  return (
    <li className="product-item">
      <div className="item-details">
        <span>{product.nama.charAt(0).toUpperCase() + product.nama.slice(1)}</span>
        <span> - Rp{product.harga.toLocaleString('id-ID')}</span>
      </div>
      <button className="btn-primary" onClick={() => onAddToCart(product)}>Tambah ke Keranjang</button>
    </li>
  );
}

export default ProductItem;