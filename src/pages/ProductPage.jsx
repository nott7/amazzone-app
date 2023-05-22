import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "../components/Home/Cart";

const ProductPage = () => {
  const productId = useParams().id; // Prendiamo l'id del prodotto dalla url
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

    function handleCartClick() { // Con questa funzione, apriamo o chiudiamo il carrello
    setIsCartOpen(!isCartOpen); // Settiamo il valore opposto di "isCartOpen"
  }

  // La ricerca e l'aggiungi al carrello non funzionano in questa pagina (non riesco a finire tutto in tempo)

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setImage(data.images[0]);
      setProduct(data);
    }
    getProduct();
  }, [productId]);

  return (
    <div>
      <Navbar handleCartClick={handleCartClick} />
      <div id="product-container" className="p-12 max-w-6xl mx-auto">
        <div id="product-main" className="flex gap-10 ">
          <div id="product-image">
            <img
              src={image}
              alt={product.title}
              className="w-full object-cover"
            />
          </div>
          <div id="product-info">
            <ul>
              <li>
                <h1 className="font-bold">{product.brand}</h1>
              </li>
              <li>
                <h2 className="text-2xl">{product.title}</h2>
              </li>
              <li className="mt-2">
                <p>Rating: {product.rating}</p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <span className="text-3xl text-red-600 font-bold">
                    {product.price}${" "}
                  </span>
                  - free shipping
                </p>
              </li>
              <li>
                <p>There are only {product.stock} items in stock!</p>
              </li>
              <li className="mt-6">
                <p className="text-2xl">{product.description}</p>
              </li>
            </ul>
          </div>
        </div>
        <div id="product-buttons" className="flex justify-end gap-2">
          <button className="p-2 mt-4 bg-orange-400 text-white font-bold rounded-md hover:bg-orange-500">
            <AddShoppingCartIcon /> Add to cart
          </button>
          <button className="p-2 mt-4 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-800">
            Buy Now
          </button>
        </div>
      </div>
      {isCartOpen && <Cart handleCartClick={handleCartClick}/>}

    </div>
  );
};

export default ProductPage;
