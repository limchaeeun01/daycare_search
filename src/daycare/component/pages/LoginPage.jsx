function LoginPage() {
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
