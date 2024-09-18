import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import api from "../../api/axios";

function DaycareItem({ data }) {
    const navigate = useNavigate();
    const [averageRating, setAverageRating] = useState(0);
    const [reviewSize, setReviewSize] = useState(0);

    useEffect(() => {
        if (data && data.STCODE) {
            getReview();
        }
    }, [data]); // data가 변경될 때마다 getReview 호출

    const getReview = async () => {
        try {
            const response = await api.get(`/daycare/review/${data.STCODE}`);
            calculateAverageRating(response.data);
            setReviewSize(response.data.length);
        } catch (error) {
            console.error('검색 실패:', error);
            // 추가적인 에러 처리 (예: 사용자에게 에러 메시지 표시)
        }
    };

    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) {
            setAverageRating(0);
            return;
        }
        
        const totalRating = reviews.reduce((acc, review) => acc + parseFloat(review.rating), 0);
        const avgRating = totalRating / reviews.length;
        setAverageRating(avgRating.toFixed(1)); 
    };

    const moveHandler = () => {
        console.log("debug >>> button click");
        navigate(`daycare-view/${data.STCODE}`, { state: { daycareData: data } });
    }

    if (!data) {
        return <div>유치원 정보가 없습니다.</div>;
    }

    return (
        <div className="card"
             onClick={moveHandler}
             style={{ marginBottom: '20px' }}>
            <div className="card-header"
                 style={{
                     fontSize: '1.3rem',
                     padding: '10px',
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center'
                 }}>
                <div style={{ marginLeft: '5px' }}>
                    {data.CRNAME || '이름 정보 없음'}
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img
                        src="/icon/star-icon.png"
                        style={{
                            height: '25px',
                            marginRight: '5px'
                        }}
                        alt="별점 아이콘"
                    />
                    <p className="card-text"
                       style={{ fontSize: '1.2rem' }}>
                        {averageRating} / 5.0 ({reviewSize})
                    </p>
                </div>
            </div>
            <div className="card-body"
                 style={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center'
                 }}>
                <p className="card-text"
                   style={{ fontSize: '1.2rem' }}>
                    주소: {data.CRADDR || '주소 정보 없음'}
                </p>
            </div>
        </div>
    );
}

export default DaycareItem;
