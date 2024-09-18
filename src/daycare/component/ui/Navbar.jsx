import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/Navbar.css'; 
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('/');
    const {user, setUser} = useAuth();

    const handleLinkClick = (path) => {
        if (path === '/myPage' && !user) {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
            return;
        }
        setActiveLink(path); 
    };

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        setUser(null); 
        alert('로그아웃 되었습니다.');
        navigate('/login'); 
    };

  return (
    <div>
        <div className="d-flex justify-content-end p-2 align-items-center">
            {user ? (
                <>
                    <span   className="nav-welcome"
                            style={{    marginRight: '20px',
                                        fontSize: '1.1rem'
                            }}>{user.name}님 안녕하세요.</span>
                    <Link to="/" className="nav-login" onClick={handleLogout}>로그아웃</Link>
                </>
            ) : (
                <>
                    <Link to="/login" className="nav-login">로그인</Link>
                    <Link to="/signup" className="nav-login">회원가입</Link>
                </>
            )}
        </div>
        <ul className="nav justify-content-center">
            <Link to="/" className="navbar-brand">
            <img
                src="/logo/logo1 (2).png"
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
                className={`nav-link ${activeLink === '/community' ? 'active' : ''}`}
                to="/community"
                onClick={() => handleLinkClick('/community')}
                >
                커뮤니티
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className={`nav-link ${activeLink === '/myPage' ? 'active' : ''}`}
                to="/myPage"
                onClick={() => handleLinkClick('/myPage')}
                >
                마이페이지
                </Link>
            </li>
        </ul>
    </div>
  );
}

export default Navbar;
