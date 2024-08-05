import React from 'react';
import './styles.product/ProductDetail.css';
const ProductDetail = ({ onClose, title }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetail;
