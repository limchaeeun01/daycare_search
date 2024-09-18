import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchPage from './daycare/component/pages/SearchPage';
import LoginPage from './daycare/component/pages/LoginPage';
import SignupPage from './daycare/component/pages/SignupPage';
import DaycareViewPage from './daycare/component/pages/DaycareViewPage';
import CommunityPage from './daycare/component/pages/CommunityPage';
import WritePage from './daycare/component/pages/WritePage';
import PostViewPage from './daycare/component/pages/PostViewPage';
import MyPage from './daycare/component/pages/MyPage';
import PostUpdatePage from './daycare/component/pages/PostUpdatePage';
import Navbar from './daycare/component/ui/Navbar';

import { AuthProvider } from './daycare/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchPage/>}></Route>
          <Route path="/community" element={<CommunityPage/>}></Route>
          <Route path="/myPage" element={<MyPage/>}></Route>
          <Route path="/write" element={<WritePage/>}></Route>
          <Route path="/community/post-view/:id" element={<PostViewPage/>}></Route>
          <Route path="/mypage/post-view/:id" element={<PostViewPage/>}></Route>
          <Route path="/update" element={<PostUpdatePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignupPage/>}></Route>
          <Route path="/daycare-view/:id" element={<DaycareViewPage/>}></Route>
          <Route path="/myPage/daycare-view/:id" element={<DaycareViewPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
