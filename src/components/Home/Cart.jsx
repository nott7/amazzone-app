import React, { useState, useEffect } from "react";
import CartItem from "./Cart/CartItem";
import CloseIcon from "@mui/icons-material/Close";

const Cart = ({ cartItems=[], handleCartClick, removeFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function totalPrice() { //Con questa funzione calcoliamo il totale del carrello
      let total = 0;
      cartItems.forEach((item) => { // Per ogni item nel carrello, aggiungiamo il prezzo al totale
        total += item.price;
      });
      setTotal(total); // Settiamo il totale
    }
    totalPrice();
  }, [cartItems]); // Ogni volta che cambia il carrello, ricalcoliamo il totale

  return (
    <div
      className="fixed top-0 right-0 h-full w-96 bg-gray-100 p-4 overflow-y-auto shadow-md"
      id="cart"
    >
      <button className="absolute right-0" onClick={handleCartClick}>
        <CloseIcon sx={{ fontSize: "2rem" }} />
      </button>

      <div id="cart-items" className="mt-12">
        <p>
          <span className="font-bold">Total:</span> {total}$
        </p>
        <div id="cart-items">
          {cartItems.map((product, index) => (
            <CartItem product={product} key={index} removeFromCart={removeFromCart}/>
          ))}
        </div>
      </div>
      {cartItems.length > 0 && (
        <div id="cart-checkout" className="flex flex-col items-end mt-4">
          <p>
            <span className="font-bold">Total:</span> {total}$
          </p>
          <button className="bg-orange-400 hover:bg-orange-600 text-white w-full font-bold h-12 rounded-md mt-4">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
