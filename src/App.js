import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Info from './pages/Info';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">

      <h1> React Router </h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/product/:id/info" element={<Info/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
