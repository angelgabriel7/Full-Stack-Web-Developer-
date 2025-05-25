import React from 'react';

function Receipt({ receiptData, onClearReceipt }) {
  if (!receiptData) {
    return null;
  }

  const { items, total, tanggal } = receiptData;

  let receiptText = "=====Bismillah, STRUK BELANJA =====\n";
  receiptText += `Tanggal: ${new Date(tanggal).toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'medium'})}\n`;
  receiptText += "=========================\n\n";

  items.forEach(item => {
    const subtotal = item.kuantitas * item.harga;
    const namaBarangFormatted = item.nama.charAt(0).toUpperCase() + item.nama.slice(1);
    const line1 = `${namaBarangFormatted} (${item.kuantitas} x Rp${item.harga.toLocaleString('id-ID')})`;
    const line2 = `  Subtotal: Rp${subtotal.toLocaleString('id-ID')}`;
    receiptText += `${line1.padEnd(40)}\n${line2.padStart(40)}\n`;
    receiptText += "---\n";
  });

  receiptText += "\n=========================\n";
  receiptText += `TOTAL BELANJA: Rp${total.toLocaleString('id-ID')}\n`;
  receiptText += "=========================\n";
  receiptText += "Alhamdulillah & Terima kasih telah berbelanja, Jangan kapok ya, Kami merindukan mu\n";
  receiptText += "=========================\n";

  return (
    <div className="receipt-section">
      <h2>Struk Belanja</h2>
      <pre className="receipt-content">{receiptText}</pre>
      <button className="btn-primary" onClick={() => window.print()} style={{marginRight: '10px'}}>Cetak ke Printer</button>
      <button className="btn-danger" onClick={onClearReceipt}>Tutup Struk</button>
    </div>
  );
}

export default Receipt;