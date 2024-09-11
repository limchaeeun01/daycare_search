import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchPage from './daycare/component/pages/SearchPage';
import LoginPage from './daycare/component/pages/LoginPage';
import SignupPage from './daycare/component/pages/SignupPage';
import Navbar from './daycare/component/ui/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
