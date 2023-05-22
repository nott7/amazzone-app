import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searchbar = ({onSearch}) => {
  const [search, setSearch] = useState("");

  async function searchProducts(searchContent) { // Con questa funzione, facciamo una richiesta al server per ottenere i prodotti che corrispondono alla ricerca
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchContent}` // La richiesta viene fatta a questo indirizzo, dove "searchContent" è il contenuto della ricerca
    );
    const data = await response.json(); // Il risultato della richiesta viene convertito in JSON
    return data.products; // Ritorniamo i prodotti che corrispondono alla ricerca
  }
  

  async function handleSearch() {   // Con questa funzione, otteniamo i prodotti che corrispondono alla ricerca e li passiamo alla funzione "onSearch" che abbiamo ricevuto come prop
    const products = await searchProducts(search); // Otteniamo i prodotti che corrispondono alla ricerca
    onSearch(products); // Passiamo i prodotti alla funzione "onSearch" che abbiamo ricevuto come prop
  }

  return (
    <div className="flex w-96 h-10 rounded-lg">
      <input
        type="text"
        placeholder="Search on Amazzone.com"
        className="p-2 text-gray-900 w-full focus:outline-none border-orange-400 focus:border-4 rounded-l-md"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-orange-400 px-2 rounded-r-md hover:bg-orange-600" onClick={search ? handleSearch : ""}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;
