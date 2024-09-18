import { useState, useEffect } from 'react';
import api from "../../api/axios";

function CommentItem({ data }) {
    const [userName, setUserName] = useState('');
    
    const getUser = async () => {
        try {
            const response = await api.get(`/daycare/user/${data.uid}`);
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

    useEffect(() => {
        getUser();
    }, []);  

    return (
        <div    className="card"
                style={{ marginBottom: '20px'}}>
            <div className="card-header"
                style={{
                    fontSize: '1.3rem',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between', // 양 끝으로 배치
                    alignItems: 'center'
                }}>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px', marginBottom: '3px', marginLeft: '7px' }}>
                        {userName}
                    </div>

                </div>

                <div>
                    <p className="card-text"
                    style={{ fontSize: '1.2rem', marginRight: '5px' }}>
                        {formatDate(data.date)}
                    </p>
                </div>
            </div>

            <div    className="card-body"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                <p className="card-text"
                   style={{ fontSize: '1.2rem'}}>
                    {data.content}
                </p>

            </div>
        </div>
    );
}

export default CommentItem;
