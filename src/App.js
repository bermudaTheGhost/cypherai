import "./App.css";
import AboutUs from "./pages/about-us";
import ScreenLayout from "./layouts";
import Products from "./pages/product";
import Home from "./pages/home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <ScreenLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </ScreenLayout>
  );
}

export default App;
