import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../../components/products-list/products-list-component';
import ProductDetails from '../product-details/product-details';
import NavBar from '../../components/nav-bar/nav-bar-component';

function App() {
  return (
    <Router basename="/DigitalNestAssessment/">
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
