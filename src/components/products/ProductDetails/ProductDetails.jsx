import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { Button } from "@mui/material";
import { useFavorites } from "../../../contexts/FavoritesContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

const ProductDetails = ({ item }) => {
  const { id } = useParams();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToFavorites, checkProductInFavorites } = useFavorites();
  const handleDelete = () => {
    deleteProduct(id);
    navigate("/");
  };

  return (
    <>
      {productDetails ? (
        <div
          style={{
            marginTop: "35px",
            marginRight: "50px",
            marginLeft: "50px",
            color: "white",
          }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}>
            {productDetails.name}
          </h1>
          <pre>{productDetails.description}</pre>
          <h3>{productDetails.price}</h3>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}

      <div style={{ textAlign: "center" }}>
        {productDetails && (
          <IconButton>
            <GradeIcon
              size="small"
              onClick={() => {
                addProductToFavorites(productDetails);
                console.log(checkProductInFavorites(productDetails.id));
              }}
              color={
                checkProductInFavorites(productDetails.id) ? "warning" : ""
              }>
              {/* <ShoppingCartIcon /> */}
            </GradeIcon>
          </IconButton>
        )}
        <Button
          style={{
            marginBottom: "10px",
            backgroundColor: "#003153",
            border: "2px solid white",
            color: "white",
            borderRadius: "15px",
            padding: "5px",
            margin: "30px",
          }}
          onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </Button>
        <Button
          style={{
            marginBottom: "10px",
            backgroundColor: "#003153",
            border: "2px solid white",
            color: "white",
            borderRadius: "15px",
            padding: "5px",
            marginTop: "30px",
            marginBottom: "30px",
            marginRight: "30px",
          }}
          onClick={handleDelete}>
          delete
        </Button>
      </div>
    </>
  );
};

export default ProductDetails;
