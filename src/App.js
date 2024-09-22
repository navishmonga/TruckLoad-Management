import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Pricing from './components/Pricing';
import Analytics from './components/Analytics/Analytics';
import Footer from './components/Footer';
import VerifyEmail from './components/auth/verifyEmail';
import Filters from './components/Filters/Filters';
import ForgotPassword from './components/auth/forgotPassword';
import NewFilters from './components/Filters/newFIlters';
import ContactUs from './components/contactUs';
import Results from './components/Results';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='dark' />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/analytics" element={<Analytics />}/>
        <Route path='/verifyemail' element={<VerifyEmail />}/>
        <Route path='filters' element={<Filters />}/>
        <Route path='/newfilters' element={<NewFilters />} />
        <Route path='resetpassword' element={<ForgotPassword />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='results' element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
