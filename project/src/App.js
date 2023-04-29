import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Outlet, Route,Routes } from 'react-router-dom';
import Home from './component/routes/home/Home';
import About from './component/routes/about/About';
import Contact from './component/routes/contact/Contact';
import Layout from './component/routes/layout/Layout';
import Navbar from './component/navbar/navbar';
import Footer from './component/footer/footer';


function App() {
  return (
    <div className="App">
      {/* <Home/>
      <About/>
      <Contact/>
      <Navbar/>
      <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='home' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
