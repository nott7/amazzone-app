import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Home/Products";
import Cart from "../components/Home/Cart";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function updateSearchResults(products) { // Con questa funzione aggiorniamo i risultati della ricerca
    setSearchResults(products); // Aggiorniamo i risultati della ricerca
  }

  function handleCartClick() { // Con questa funzione, apriamo o chiudiamo il carrello
    setIsCartOpen(!isCartOpen); // Settiamo il valore opposto di "isCartOpen"
  }

  function addToCart(product) { // Con questa funzione aggiungiamo un prodotto al carrello
    setCartItems([...cartItems, product]); // Aggiungiamo il prodotto al carrello
  }

           


  function removeFromCart(product) { // Con questa funzione rimuoviamo un prodotto dal carrello
    setCartItems(cartItems.filter((item) => item.id !== product.id)); // Rimuoviamo il prodotto dal carrello
  } // L'unico problema di questa funzione é che rimuove tutti i prodotti con lo stesso id, non posso eliminarne uno solo




  return (
    <div>
      <Navbar
        onSearch={updateSearchResults} 
        handleCartClick={handleCartClick} 
      />
      <Products searchedProducts={searchResults} addToCart={addToCart} /> 
      {isCartOpen && <Cart cartItems={cartItems} handleCartClick={handleCartClick} removeFromCart={removeFromCart}/>}

    </div>
  );
};

export default Home;
