import React from 'react'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
// import NotFound from './components/not-found';
import Home from './components/home'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
