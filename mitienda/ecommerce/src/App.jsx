// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CartWidget from './components/CartWidget';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <CartWidget />
      </div>
    </Router>
  );
}

export default App;
