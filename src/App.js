import './App.css';
import { Header } from './component/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from './Fetures/Features';
import Pricing from './Pricing/Pricing';
import Home from './Home/Home';


function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>
    </Router>

  );
}

export default App;
