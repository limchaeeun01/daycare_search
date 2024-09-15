import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchPage from './daycare/component/pages/SearchPage';
import LoginPage from './daycare/component/pages/LoginPage';
import SignupPage from './daycare/component/pages/SignupPage';
import DaycareViewPage from './daycare/component/pages/DaycareViewPage';
import Navbar from './daycare/component/ui/Navbar';

import { AuthProvider } from './daycare/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignupPage/>}></Route>
          <Route path="/daycare-view/:id" element={<DaycareViewPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
