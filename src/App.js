import "./App.css";
import logo from "./logo.svg";
import menu from "./images/menu.png";

function App() {
  return (
    <div className="container mx-auto w-full bg-black h-screen text-white">
      <header className="bg-transparent text-white w-full">
        <div className="flex items-center justify-between  h-20 p-6">
          <img src={logo} className="h-16" alt="logo" />
          <img src={menu} className="w-6 h-4 lg:hidden" alt="logo" />
          <div className="hidden lg:block lg:flex lg:gap-x-6">
            <p className="">Products</p>
            <p className="">Company</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
