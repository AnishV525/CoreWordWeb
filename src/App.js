import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PremiumPage from './pages/PremiumPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='content'>
          <NavLink className='content' exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className='content' activeClassName="active" to="/about">About</NavLink>
          <NavLink className='content' activeClassName="active" to="/contact">Contact</NavLink>
          <NavLink className='content' activeClassName="active" to="/premium">Premium Page</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/premium" element={<PremiumPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}



export default App;
