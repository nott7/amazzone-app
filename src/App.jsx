import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
