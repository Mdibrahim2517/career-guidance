import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import Feature from './components/Feature';
import About from './components/About';
import Price from './components/Price';
import Services from './components/Services';
import Home from './components/Home';
import Footer from './components/Footer';
import Sign from './components/Sign';
import SignUp from './components/SignUp';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Feature />
              <About />
              <Price />
              <Services />
              <Footer />
            </>}></Route>
          <Route path="/Sign" element={<Sign />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
