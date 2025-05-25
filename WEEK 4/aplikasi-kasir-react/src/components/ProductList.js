import React from 'react';
import ProductItem from './ProductItem';

const BARANG_TERSEDIA = [
  { id: "apel", nama: "apel", harga: 5000 },
  { id: "pisang", nama: "pisang", harga: 3000 },
  { id: "jeruk", nama: "jeruk", harga: 7000 },
  { id: "roti", nama: "roti", harga: 10000 },
  { id: "susu", nama: "susu", harga: 15000 },
  { id: "mie instan", nama: "mie instan", harga: 3500 },
  { id: "telur (kg)", nama: "telur (kg)", harga: 25000 },
  { id: "minyak goreng (L)", nama: "minyak goreng (L)", harga: 18000 }
];

function ProductList({ onAddToCart }) {
  return (
    <div className="products-section">
      <h2>Daftar Produk</h2>
      {BARANG_TERSEDIA.length === 0 ? (
        <p>Tidak ada produk tersedia.</p>
      ) : (
        <ul>
          {BARANG_TERSEDIA.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;