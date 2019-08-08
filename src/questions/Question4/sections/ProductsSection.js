import React from "react";
import boxIcon from "./images/box.png";
import "./ProductsSection.scss";

const ProductsSection = props => {
  const renderProductCard = (name, description, price) => {
    return (
      <div className="product-card">
        <div className="name">{name}</div>
        <img src={boxIcon} alt="product-icon" />
        <div className="description">{description}</div>
        <div className="price">${price}</div>
      </div>
    );
  };

  return (
    <div className="product-section">
      {renderProductCard(
        "Oversized Bin",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a laoreet augue. Suspendisse eget tempus neque. Maecenas elit tellus, vulputate.",
        20
      )}
      {renderProductCard(
        "Bulky-Item",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum a metus quis consequat. Quisque rutrum gravida urna quis placerat. Aliquam sapien dolor, porttitor a augue et, finibus malesuada orci.",
        16
      )}
      {renderProductCard(
        "Bubble Wrap",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a laoreet augue. Suspendisse eget tempus neque. Maecenas elit tellus, vulputate.",
        3
      )}
    </div>
  );
};

export default ProductsSection;
