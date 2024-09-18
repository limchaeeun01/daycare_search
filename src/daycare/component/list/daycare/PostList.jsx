import PostItem from "./PostItem";
import { useState, useEffect } from 'react';
import '../../../css/styles.css';  

function PostList({ data, currentPage, setCurrentPage }) {
    const [currentData, setCurrentData] = useState([]); 
    const itemsPerPage = 5;    // 한 페이지 당 아이템 수
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        if (data === "로딩중") {
            setCurrentData(["로딩중"]);
        } else {
            setCurrentData(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        }
    }, [data, currentPage]);

    const pageChangeHandler = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCurrentData(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    };

    return (
        <div className="card" style={{ display: 'flex', padding: '20px' }}>
            <div class="container text-center" style={{ marginBottom: '20px', fontSize: '1.2rem'}}>
                <div class="row">
                    <div class="col-6">
                    제목
                    </div>
                    <div class="col">
                    글쓴이
                    </div>
                    <div class="col">
                    게시일
                    </div>
                </div>
            </div>
            {currentData.length > 0 ? (
                currentData[0] === "로딩중" ? (
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border text-success" style={{width: '3rem', height: '3rem', marginTop: '20px'}} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    currentData.map((post) => (
                        <PostItem
                            key={post.postId}
                            data={post}
                        />
                    ))
                )
            ) : (
                <p style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    검색한 조건의 게시물이 존재하지 않습니다.
                </p>
            )}

            {currentData.length > 0 ? (
                currentData[0] === "로딩중" ? (
                    <p></p>
                ) : (
                    <nav    aria-label="Page navigation example" 
                    style={{ display: 'flex', justifyContent: 'center', margin: '20px'}}>
                    <ul className="pagination">
                        <li className="page-item">
                            <a  className="page-link" href="#" aria-label="Previous" 
                                onClick={() => pageChangeHandler(Math.max(currentPage - 1, 1))}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <a  className="page-link" href="#" 
                                    onClick={() => pageChangeHandler(index + 1)}>
                                    {index + 1}
                                </a>
                            </li>
                        ))}
                        <li className="page-item">
                            <a  className="page-link" href="#" aria-label="Next" 
                                onClick={() => pageChangeHandler(Math.min(currentPage + 1, totalPages))}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                )
            ) : (
                <p></p>
            )}


        </div>
    );
}

export default PostList;
