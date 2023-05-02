import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Prevent from './components/Prevent';
import Symtoms from './components/Symtoms';
import Experts from './components/Experts';
import Footer from './components/Footer';
import CaseReport from './components/CaseReport';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Route, Link, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <Symtoms />
        <Prevent />
        <Experts />
        <Blogs />
        <CaseReport />
        <Footer />
    </div>
  );
}

export default App;
