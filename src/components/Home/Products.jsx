import React from "react";
import { useState, useEffect } from "react";
import Product from "./Products/Product";
import { Link } from "react-router-dom";

const Products = ({ searchedProducts, addToCart }) => {
  // Qui abbiamo aggiunto la prop "addToCart" che abbiamo passato al componente "Product"
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      // Con questa funzione, otteniamo i prodotti che corrispondono alla ricerca o tutti i prodotti
      if (searchedProducts.length > 0) {
        // Se la lunghezza dell'array "searchedProducts" é maggiore di 0, allora abbiamo dei prodotti che corrispondono alla ricerca
        setProducts(searchedProducts); // Settiamo i prodotti che corrispondono alla ricerca
      } else {
        // Altrimenti, non abbiamo dei prodotti che corrispondono alla ricerca
        const response = await fetch("https://dummyjson.com/products"); // Facciamo una richiesta al server per ottenere tutti i prodotti
        const data = await response.json();
        const products = data.products;
        setProducts(products); // Settiamo tutti i prodotti
      }
    }
    getProducts();
  }, [searchedProducts]); // Questo useEffect si attiva ogni volta che cambia il valore della prop "searchedProducts"

  return (
    <div className="p-6">
      <h1>
        {searchedProducts.length > 0 ? "Searched Products" : "All products"}
      </h1>
      <ul
        className={
          searchedProducts.length > 0 ? "searched products" : "products"
        }
      >
        {products.map((product, index) => (
          <li key={index}>
            <Product product={product} addToCart={addToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
