import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = ({ product, removeFromCart }) => {

    function handleRemoveFromCart() { // Quando clicchiamo sul bottone, rimuoviamo il prodotto dal carrello
        removeFromCart(product); 
    }

  return (
    <div
      className="flex items-center gap-4 p-2 bg-slate-200 w-full h-20 my-4 rounded-md justify-between"
      id="cart-item"
    >
      <div id="cart-item-left" className="flex gap-2">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-16 h-16 object-cover"
        />
        <div className="" id="cart-item-info">
          <h2 className="font-bold">{product.title}</h2>
          <p>Price: {product.price}$</p>
        </div>
      </div>
      <button className=" text-red-600" onClick={handleRemoveFromCart}><RemoveIcon /></button>
    </div>
  );
};

export default CartItem;
