import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/Navbar.css'; 

function Navbar() {
  // 현재 활성화된 링크 상태를 저장하는 state
  const [activeLink, setActiveLink] = useState('/');

  // 메뉴 클릭 시 활성화된 링크를 업데이트하는 함수
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
        <div className="d-flex justify-content-end p-2">
            <Link to="/login" className="nav-login">
            로그인
            </Link>
            <Link to="/signup" className="nav-login">
            회원가입
            </Link>
        </div>
        <ul className="nav justify-content-center">
            <Link to="/" className="navbar-brand">
            <img
                src="/logo/logo1.png"
                alt="Logo"
                style={{    height: '130px',
                            marginRight: '100px'
                }} // 로고의 크기 조정
            />
            </Link>
            <li className="nav-item">
                <Link
                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                to="/"
                onClick={() => handleLinkClick('/')}
                >
                어린이집 찾기
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className={`nav-link ${activeLink === '/features' ? 'active' : ''}`}
                to="/features"
                onClick={() => handleLinkClick('/features')}
                >
                커뮤니티
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className={`nav-link ${activeLink === '/pricing' ? 'active' : ''}`}
                to="/pricing"
                onClick={() => handleLinkClick('/pricing')}
                >
                마이페이지
                </Link>
            </li>
        </ul>
    </div>
    
  );
}

export default Navbar;
