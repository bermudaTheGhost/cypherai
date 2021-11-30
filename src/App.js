import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us";
import ScreenLayout from "./layouts";
import Products from "./pages/product";
import Home from "./pages/home";

function App() {
  return (
    <ScreenLayout>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </ScreenLayout>
  );
}

export default App;
