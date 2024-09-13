import api from "../api/axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdCheck, setPwdCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idCheck, setIdCheck] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        setIsButtonDisabled(idCheck);
    },);

    const idHandler = (e) => {
        setId(e.target.value)
    }

    const pwdHandler = (e) => {
        setPwd(e.target.value)
    }

    const pwdCheckHandler = (e) => {
        setPwdCheck(e.target.value)
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const idChecking = async () => {
        try {
            const response = await api.get(`daycare/signup/idCheck/${id}`);
            console.log("debug >>> 아이디 중복 확인 요청 응답 ", response.data);

            if (response.data === true) {
                alert("이미 존재하는 아이디입니다.");
                setIdCheck(false);
            } else if (response.data === false) {
                alert("사용 가능한 아이디입니다.");
                setIdCheck(true);
            } else {
                console.error("Unexpected response value:", response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const signupSave = async() => {
        if(id.length === 0 || pwd.length === 0 || name.length === 0 || email.length === 0 || phone.length === 0){
            alert("모든 란을 채워주세요.");
        }else{
            if(idCheck !== true){
                alert("아이디 중복확인을 해주세요.");
            }else if(pwd !== pwdCheck){
                alert("비밀번호를 다시 확인해주세요.");
            }else{
                const data = {
                    id : id,
                    pwd : pwd,
                    name : name,
                    email : email,
                    phone: phone
                };
                try{
                    const response = await api.post('daycare/signup', data);
                    console.log("debug >>> 회원가입 요청 응답 ", response);
                    if(response.status == 204){
                        alert("회원가입이 완료되었습니다.");
                        navigate("/");
                    }else{
                        alert("데이터 저장 오류 발생");
                    }
                    
                }catch(err){
                    console.log(err);
                }
            }
        }
        
    
    }

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
                <p style={{ margin: '20px' }}>회원가입</p>
                <div
                    style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        display: 'flex',          // 내부 요소도 Flexbox 사용
                        flexDirection: 'column',  // 세로 방향 정렬
                        alignItems: 'center',     // 가로 방향 중앙 정렬
                    }}
                >
                    <div    className="input-group"
                            style={{    height: '70px'}}>
                        <input  type="text" 
                                className="form-control" 
                                placeholder="아이디"
                                value={id}
                                onChange={idHandler}
                                style={{    fontSize: '1.3rem'}}/> 
                        <button className="btn btn-primary"
                                onClick={(e) => {idChecking()}}
                                disabled={isButtonDisabled}
                                style={{    width: '120px',
                                            backgroundColor: '#4CAF50',
                                            borderColor: '#4CAF50', 
                                            fontSize: '1.3rem'}}>
                                중복확인
                        </button>
                    </div>
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
                    <input
                        type="password"
                        className="form-control"
                        placeholder="비밀번호 확인"
                        value={pwdCheck}
                        onChange={pwdCheckHandler}
                        style={{
                            fontSize: '1.3rem',
                            marginTop: '20px',
                            height: '70px',
                            width: '600px',
                        }}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="닉네임"
                        value={name}
                        onChange={nameHandler}
                        style={{
                            fontSize: '1.3rem',
                            marginTop: '20px',
                            height: '70px',
                            width: '600px',
                        }}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="이메일"
                        value={email}
                        onChange={emailHandler}
                        style={{
                            fontSize: '1.3rem',
                            marginTop: '20px',
                            height: '70px',
                            width: '600px',
                        }}
                    />
                    <input
                        type="phone"
                        className="form-control"
                        value={phone}
                        onChange={phoneHandler}
                        placeholder="전화번호 ('-'를 제외한 11자리 숫자)"
                        style={{
                            fontSize: '1.3rem',
                            marginTop: '20px',
                            height: '70px',
                            width: '600px',
                        }}
                    />
                    <button
                        type="text"
                        className="btn btn-primary"
                        onClick={(e) => signupSave()}
                        style={{
                            backgroundColor: '#4CAF50',
                            borderColor: '#4CAF50',
                            fontSize: '1.3rem',
                            marginTop: '40px',
                            width: '600px',
                            height: '70px',
                        }}
                    >
                        회원가입
                    </button>
                </div>
            </div>
            <div style={{ height: '100px'}}>

            </div>
        </div>
    );
}

export default SignupPage;
