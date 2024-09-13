import api from "../api/axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'

function LoginPage() {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const idHandler = (e) => {
        setId(e.target.value)
    }

    const pwdHandler = (e) => {
        setPwd(e.target.value)
    }

    const login = async () => {
        try {
            const response = await api.post('/daycare/login', { id, pwd });
            console.log("debug >>> 로그인 요청 응답 ", response.data);

            if (response.data.success) {
                setUser({
                    uid: response.data.uid,
                    name: response.data.name
                });
                navigate('/');
            } else {
                alert("아이디 또는 비밀번호가 잘못 되었습니다.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            className="container"
            style={{
                width: '1100px',
                display: 'flex',              // Flexbox 사용
                flexDirection: 'column',      // 세로 방향 정렬
                alignItems: 'center',         // 가로 방향 중앙 정렬
                justifyContent: 'center',     // 세로 방향 중앙 정렬
            }}
        >
            <div className="page-title">
                <p style={{ margin: '20px' }}>로그인</p>
                <div
                    style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        display: 'flex',          // 내부 요소도 Flexbox 사용
                        flexDirection: 'column',  // 세로 방향 정렬
                        alignItems: 'center',     // 가로 방향 중앙 정렬
                    }}
                >
                    <input
                        type="text"
                        className="form-control"
                        value={id}
                        onChange={idHandler}
                        placeholder="아이디"
                        style={{
                            fontSize: '1.3rem',
                            height: '70px',
                            width: '600px',
                        }}
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="비밀번호"
                        value={pwd}
                        onChange={pwdHandler}
                        style={{
                            fontSize: '1.3rem',
                            marginTop: '20px',
                            height: '70px',
                            width: '600px',
                        }}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => login()}
                        style={{
                            backgroundColor: '#4CAF50',
                            borderColor: '#4CAF50',
                            fontSize: '1.3rem',
                            marginTop: '40px',
                            width: '600px',
                            height: '70px',
                        }}
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
