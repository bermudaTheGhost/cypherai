import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us";
import ScreenLayout from "./layouts";

function App() {
  return (
    <ScreenLayout>
      <Router>
        <Routes>
          {/* <Route exact path="/" component={Home} />*/}
          {/* <Route path="/contact" component={Contact} />  */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </ScreenLayout>
  );
}

export default App;
