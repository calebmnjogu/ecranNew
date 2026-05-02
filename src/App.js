import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import Signin from './components/signin';
import Addproduct from './components/addproduct';
import Getproducts from './components/getproducts';
import Makepayments from './components/makepayments';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Carousel from './components/carousel';
import Chatbot from './components/chatbot';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
        
        <Routes>
        <Route path="/chat" element={<Chatbot />} />   
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/" element={<Getproducts />} />
        <Route path="/makepayment" element={<Makepayments />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
        <Route path="/" element={<Carousel />} />

        
        </Routes>
        <Footer />
      </div>

    </Router>
      
    
    
  );
}

export default App;
