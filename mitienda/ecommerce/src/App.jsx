// App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ItemListContainer message={"Bienvenido a la tienda"} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
