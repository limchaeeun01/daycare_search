import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from "../api/axios";
import DaycareList from '../list/daycare/DaycareList';

function MyPage() {
    const { user } = useAuth();
    const [userData, setUserData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (user) {
            getUser();
            getLikeDaycare();
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
            const response = await api.post('/daycare/like', {
                sigun : selectedSigunName,
                type : (selectedCrTypeName === "어린이집 유형" || selectedCrTypeName === "전체")  ? "" : selectedCrTypeName,
                name : daycareName
            });
            console.log(response.data); // 서버에서 받아온 결과 설정
            setData(response.data);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    }

    const getDaycare = async () => {
        try {
            const response = await api.post('/daycare/api/search', {
                sigun : selectedSigunName,
                type : (selectedCrTypeName === "어린이집 유형" || selectedCrTypeName === "전체")  ? "" : selectedCrTypeName,
                name : daycareName
            });
            console.log(response.data); // 서버에서 받아온 결과 설정
            setData(response.data);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };

    if (!user) {
        return <p>로그인이 필요합니다.</p>;
    }

    return (
        <div className="container" style={{ width: '1100px', marginTop: '40px' }}>
            <div className="card" style={{ backgroundColor: 'white', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold' }}>
                        내 정보
                    </p>
                </div>
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
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <p style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold' }}>
                        관심 어린이집
                    </p>
                </div>

                <DaycareList
                    data={data}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>
            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default MyPage;
