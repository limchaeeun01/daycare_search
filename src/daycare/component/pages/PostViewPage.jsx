import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import CommentList from '../list/daycare/CommentList';

function PostViewPage(){
    const location = useLocation();
    const { postData } = location.state || {};
    const { user } = useAuth();
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const [commentData, setCommentData] = useState([]);
    const [commentSize, setCommentSize] = useState(0);

    useEffect(() => {
        getUser();
        getComment();
    }, []);  

    const commentHandler = (e) => {
        setComment(e.target.value);
    };

    const clickHandler = () => {
        if(user === null){
            alert("로그인이 필요한 서비스입니다.");
            navigate('/login');
        }else{
            addComment();
        }
    };

    const updateHandler = () => {
        navigate(`/update`, { state: { postData: postData } });
    };

    const deleteHandler = () => {
        deletePost();
    };


    const deletePost = async () => {
        try {
            const response = await api.delete(`/daycare/post/delete/${postData.postId}`, null);
            console.log("debug >>> 게시물 삭제 요청 응답 ", response.data);
            alert('게시물이 삭제되었습니다.');
            navigate('/');
        } catch (err) {
            console.log(err);
        }
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

    const addComment = async() => {
        if(comment === ''){
            alert("댓글을 작성해주세요.")
        }else{
            const data = {
                postId : postData.postId,
                content : comment,
                uid : user.uid,
                date: getCurrentDateTime()
            };
            try{
                const response = await api.post('daycare/comment/add', data);
                console.log("debug >>> 댓글 게시 요청 응답 ", response);
                if(response.status == 204){
                    alert("댓글 작성이 완료되었습니다.");
                    setComment('');
                    getComment();
                }else{
                    alert("데이터 저장 오류 발생");
                }
                
            }catch(err){
                console.log(err);
            }
        }
    }

    const getComment = async () => {
        try {
            const response = await api.get(`/daycare/comment/${postData.postId}`);
            console.log(response.data); 
            setCommentData(response.data);
            setCommentSize(response.data.length);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };

    const getUser = async () => {
        try {
            const response = await api.get(`/daycare/user/${postData.uid}`);
            console.log(response.data.name); 
            setUserName(response.data.name);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    const isUserAuthorized = user && postData.uid === user.uid;

    return(
        <div className="container" style={{ width: '1100px', marginTop: '40px' }}>
            <div className="card" style={{ backgroundColor: 'white', padding: '20px' }}>
                <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>

                </div> 
                <div style={{
                    fontSize: '1.3rem',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between', // 양 끝으로 배치
                    alignItems: 'center'
                }}>
                    <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                        <p style={{ fontSize: '1.8rem', fontWeight: 'bold'}}>
                            {postData.title}
                        </p>
                    </div> 

                    <div style={{
                        display: 'flex'
                    }}>
                        <p style={{
                            fontSize: '1.3rem',
                            textAlign: 'right', // 텍스트를 오른쪽으로 정렬
                        }}>
                            {formatDate(postData.date)}
                        </p>
                    </div>

                </div>
                
                <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                    <p style={{ fontSize: '1.3rem', marginLeft: '12px'}}>
                        {userName}
                    </p>
                </div> 

                <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '30px'
                        }}>
                    <p style={{ fontSize: '1.5rem', marginLeft: '12px'}}>
                        {postData.content}
                    </p>
                </div> 

                {isUserAuthorized && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', marginTop: '40px'}}>
                        <button 
                            className="btn btn-primary"
                            onClick={updateHandler}
                            style={{ width: '100px', height: '55px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem', marginRight: '10px' }}
                        >
                            수정
                        </button>
                        <button 
                            className="btn btn-primary"
                            onClick={deleteHandler}
                            style={{ width: '100px', height: '55px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}
                        >
                            삭제
                        </button>
                    </div>
                )}

                <div style={{
                            display: 'flex',
                            alignItems: 'center', marginTop: '80px'
                        }}>
                    <p style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold'}}>
                        댓글 ({commentSize})
                    </p>
                </div> 

                <div className="card" style={{ marginBottom: '20px'}}>
                    <div className="card-body">
                        <textarea 
                            placeholder="댓글을 작성해보세요."
                            value={comment}
                            onChange={commentHandler}
                            style={{ borderColor: 'white', width: '100%', height: '100px',
                                    fontSize: '1.3rem', resize: 'vertical', minHeight: '100px', maxHeight: '200px'
                            }}>
                        </textarea>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px'}}>
                    <button 
                        className="btn btn-primary"
                        onClick={clickHandler}
                        style={{ width: '100px', height: '55px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}
                    >
                        등록
                    </button>
                </div>
                <div>
                    <CommentList data={commentData} />  
                </div>
            </div>

            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default PostViewPage;
