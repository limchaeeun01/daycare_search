import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function WritePage() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');  // 수정된 부분
    const [content, setContent] = useState('');  // 수정된 부분

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };

    const contentHandler = (e) => {
        setContent(e.target.value);
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
    
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    const handleSubmit = async () => {
        try {
            const dateTime = getCurrentDateTime();
            await api.post('/daycare/post/add', {
                uid: user.uid,
                title: title,
                content: content,
                date: dateTime
            });
            navigate('/community');  // 게시글 작성 후 커뮤니티 페이지로 이동
        } catch (err) {
            console.error("게시글 작성 오류: ", err);
        }
    };

    return (
        <div className="container" style={{ width: '1100px', marginTop: '40px' }}>
            <div className="card" style={{ backgroundColor: 'white', padding: '20px' }}>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="제목을 입력해주세요."
                    value={title}
                    onChange={titleHandler}
                    style={{ fontSize: '1.3rem', height: '60px', backgroundColor: '#f7f7f7' }}
                />

                <textarea
                    className="form-control"
                    placeholder="내용을 입력해주세요."
                    value={content}
                    onChange={contentHandler}
                    style={{ marginTop: '15px', fontSize: '1.3rem', height: '600px', resize: 'vertical', minHeight: '600px', maxHeight: '1000px' }}
                />

                <div style={{display: 'flex', justifyContent: 'flex-end',
                            marginTop: '20px'}}>
                    <button 
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}
                    >
                        작성완료
                    </button>
                </div>
            </div>

            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default WritePage;
