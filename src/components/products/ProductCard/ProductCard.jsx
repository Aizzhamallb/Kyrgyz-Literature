import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  

  return (
    <div
      id="div-card"
      style={{
        backgroundColor: "#003153",
        color: "white",
        border: "3px solid white",
        borderRadius: "8px",
      }}>
      <h4 id="div-card-h4">{item.name}</h4>
    
      <img
        id="div-card-img"
        src={item.picture}
        alt="img"
        style={{ marginBottom: "10px", width: "50%", height: "50" }}
      />
      <button
        style={{
          marginBottom: "10px",
          backgroundColor: "#003153",
          border: "2px solid white",
          color: "white",
          borderRadius: "15px",
          padding: "5px",
        }}
        onClick={() => navigate(`/details/${item.id}`)}>
        Read more
      </button>
      
    </div>
  );
};

export default ProductCard;
