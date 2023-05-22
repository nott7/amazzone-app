import React from "react";
import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import Searchbar from "./Navbar/Searchbar";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ onSearch, handleCartClick }) => {  // Navbar riceve due props: onSearch e handleCartClick (che sono due funzioni)
  const [categories, setCategories] = useState([]); // Inizializziamo lo state delle categorie

  useEffect(() => {
    async function getCategories() { // Con questa funzione, otteniamo le categorie
      const response = await fetch("https://dummyjson.com/products/categories");  // Facciamo una richiesta al server per ottenere le categorie
      const data = await response.json();
      const categoriesSliced = data.slice(0, 8); // Prendiamo solo le prime 8 categorie
      setCategories(categoriesSliced); // Settiamo le categorie
    }

    getCategories(); 
  }, []);

  return (
    <nav className="shadow-lg">
      <div
        id="navbar-top"
        className="flex items-center justify-between p-6 bg-gray-950 text-white"
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-24" />
        </Link>
        <Searchbar onSearch={onSearch} />
        <button className="flex items-center gap-2 font-bold text-orange-400 border-2 border-orange-400 p-2 rounded-md hover:bg-orange-400 hover:text-white" onClick={handleCartClick}><ShoppingCartIcon/> CART</button>
      </div>
      <div
        id="navbar-bottom"
        className="flex items-center justify-between py-2 px-6 bg-gray-800 text-white"
      >
        <ul className="w-full flex justify-between">
          {categories.map((category, index) => (
            <li key={index} className="mr-4 hover:underline cursor-pointer">
              {category.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
