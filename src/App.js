import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Pricing from './components/Pricing';
import Analytics from './components/Analytics/Analytics';
import Footer from './components/Footer';
import VerifyEmail
 from './components/verifyEmail';
import Filters from './components/Filters/Filters';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/analytics" element={<Analytics />}/>
        <Route path='/verifyemail' element={<VerifyEmail />}/>
        <Route path='/filters' element={<Filters />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
