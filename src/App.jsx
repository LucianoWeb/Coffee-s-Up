import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import Error404 from './components/Error404';



const App = () => {
  return (
    <div className="container-fluid g-0 overflow-hidden">
      <Header />
      <div>
        <Routes>
          <Route path='*' element={<Error404/>} />
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;