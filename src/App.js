import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchPage from './daycare/component/pages/SearchPage';
import Navbar from './daycare/component/ui/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
