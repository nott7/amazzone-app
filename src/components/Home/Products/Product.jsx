import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
const Product = ({ product, addToCart }) => {

  function handleAddToCart() { // Quando clicchiamo sul bottone, aggiungiamo il prodotto al carrello
    addToCart(product); // Aggiungiamo il prodotto al carrello
  } 


  return (
    <div className=" flex flex-col justify-between px-4 py-2 bg-slate-200 w-44 h-[360px] rounded-lg shadow-lg mb-10 hover:scale-105 hover:bg-slate-300 cursor-pointer" id="product">
      <Link to={`/product/${product.id}`}>
      <img src={product.images[0]} alt="product image" className="w-full h-40 object-cover rounded-lg"/>
      <h2 className="font-bold px-4 mt-4">{product.title}</h2>

      <div id="product-description" className="px-4">
        <p className="text-xs">Rating: {product.rating}</p>
        <p className="font-bold">{product.price}$</p>
      </div>
      </Link>
      <button className="p-2 mt-4 bg-orange-400 text-white font-bold rounded-md hover:bg-orange-500" onClick={handleAddToCart}><AddShoppingCartIcon/> Add to cart</button>
    </div>
  );
};

export default Product;
