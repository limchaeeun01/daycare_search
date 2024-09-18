import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import api from "../../api/axios";

function PostItem({ data }) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [commentSize, setCommentSize] = useState(0);

    useEffect(() => {
        getUser();
        getComment();
    }, [data]); 

    const getUser = async () => {
        try {
            const response = await api.get(`/daycare/user/${data.uid}`);
            console.log(response.data.name); 
            setUserName(response.data.name);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };

    const getComment = async () => {
        try {
            const response = await api.get(`/daycare/comment/${data.postId}`);
            console.log(response.data); 
            setCommentSize(response.data.length);
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


    const moveHandler = () => {
        navigate(`post-view/${data.postId}`, { state: { postData: data } });
    }

    if (!data) {
        return <div>게시물 정보가 없습니다.</div>;
    }

    return (
        <div className="card"
             onClick={moveHandler}
             style={{ marginBottom: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
            <div class="container text-center" style={{ fontSize: '1.2rem'}}>
                <div class="row">
                    <div class="col-6">
                        {data.title} [{commentSize}]
                    </div>
                    <div class="col">
                        {userName}
                    </div>
                    <div class="col">
                        {formatDate(data.date)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
