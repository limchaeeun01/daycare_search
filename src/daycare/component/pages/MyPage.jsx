import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from "../api/axios";
import DaycareList from '../list/daycare/DaycareList';
import { Navigate } from 'react-router-dom';
import PostList from '../list/daycare/PostList';

function MyPage() {
    const { user } = useAuth();
    const [userData, setUserData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [data, setData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [likeSize, setLikeSize] = useState(0);
    const [postSize, setPostSize] = useState(0);

    useEffect(() => {
        if (user) {
            setData(["로딩중"]);
            getUser();
            getDaycare();
            getPost();
        }
    }, [user]);  // user가 변경될 때마다 effect 실행

    const getUser = async () => {
        try {
            const response = await api.get(`/daycare/user/${user.uid}`);
            console.log(response.data.name); 
            setUserData(response.data);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };

    const getLikeDaycare = async () => {
        try {
            const response = await api.get(`/daycare/likeDaycare/${user.uid}`, null);
            const likedDaycares = response.data; // 좋아요 한 어린이집 목록
            console.log(likedDaycares); 
            return likedDaycares;
        } catch (error) {
            console.error('검색 실패:', error);
            return [];
        }
    };
    
    const getDaycare = async () => {
        try {
            const response = await api.post('/daycare/api/search', {
                sigun: '',
                type: '',
                name: ''
            });
            const allDaycares = response.data; 
            console.log(allDaycares); 
            
            const likedDaycares = await getLikeDaycare(); // 좋아요 한 어린이집 불러오기
    
            const filteredDaycares = allDaycares.filter(daycare => 
                likedDaycares.some(liked => liked.daycareId === daycare.STCODE)
            );
    
            console.log(filteredDaycares); 
            setData(filteredDaycares); 
            setLikeSize(filteredDaycares.length);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };

    const getPost = async () => {
        try {
            const response = await api.get('/daycare/post', null);
            const filteredData = response.data.filter(post => post.uid === user.uid);
            console.log(filteredData); // 필터링된 결과를 설정
            setPostData(filteredData);
            setPostSize(filteredData.length);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };
    

    if (!user) {
        Navigate('login');
    }

    return (
        <div className="container" style={{ width: '1100px' }}>
            <div className="page-title">
                <p style={{ margin: '20px' }}>마이페이지</p>
                <div className="container" style={{ width: '1100px', marginTop: '20px' }}>
                    <div className="card" style={{ backgroundColor: 'white', padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold' }}>
                                내 정보
                            </p>
                        </div>
                        <div className="card" style={{ padding: '10px'}}>
                            <div className="container text-start" style={{ fontSize: '1.3rem', marginTop: '15px' }}>
                                <div className="row" style={{ marginBottom: '15px' }}>
                                    <div className="col-3">닉네임</div>
                                    <div className="col-8">{userData.name}</div>
                                </div>
                                <div className="row" style={{ marginBottom: '15px' }}>
                                    <div className="col-3">아이디</div>
                                    <div className="col-8">{userData.id}</div>
                                </div>
                                <div className="row" style={{ marginBottom: '15px' }}>
                                    <div className="col-3">이메일</div>
                                    <div className="col-8">{userData.email}</div>
                                </div>
                                <div className="row" style={{ marginBottom: '15px' }}>
                                    <div className="col-3">전화번호</div>
                                    <div className="col-8">{userData.phone}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
                            <p style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold' }}>
                                관심 어린이집 ({likeSize})
                            </p>
                        </div>

                        {data.length > 0 ? (
                            <DaycareList
                                data={data}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage} />
                        ) : (
                            <p style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            관심 어린이집이 없습니다.
                            </p>
                        )}

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
                            <p style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold' }}>
                                내가 쓴 게시물 ({postSize})
                            </p>
                        </div>

                        {postData.length > 0 ? (
                            <PostList
                                data={postData}
                                currentPage={currentPage2}
                                setCurrentPage={setCurrentPage2} />
                        ) : (
                            <p style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            내가 쓴 게시물이 없습니다.
                            </p>
                        )}

                        <div style={{ height: '20px' }}></div>
                    </div>
                    <div style={{ height: '100px' }}></div>
                </div>
            </div>
        </div>
        
    );
}

export default MyPage;
