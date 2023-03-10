import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import About from './pages/About';
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">

      <h1> React Router </h1>
      <BrowserRouter>
        <NavBar/>
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/product/:id/info" element={<Info/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/contact" element={<Navigate to='/about'/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
