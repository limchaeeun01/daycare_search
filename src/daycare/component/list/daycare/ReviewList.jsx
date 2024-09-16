import ReviewItem from "./ReviewItem";
import { useState, useEffect } from 'react';
import '../../../css/styles.css';  

function ReviewList({ data }) {
    const itemsPerPage = 5;    // 한 페이지 당 아이템 수
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]); 

    useEffect(() => {
        setCurrentData(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    }, [currentPage, data]);  // currentPage와 data가 변경될 때마다 호출됨

    const pageChangeHandler = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="card" style={{ display: 'flex', padding: '20px', flexDirection: 'column' }}>
            {currentData.length > 0 ? (
                currentData.map((review, index) => (
                    <ReviewItem
                        key={index}
                        data={review}
                    />
                ))
            ) : (
                <p style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    해당 어린이집에 대한 첫 후기를 남겨보세요!
                </p>
            )}

            <nav aria-label="Page navigation example" 
                 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous" 
                           onClick={(e) => { e.preventDefault(); pageChangeHandler(Math.max(currentPage - 1, 1)); }}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <a className="page-link" href="#" 
                               onClick={(e) => { e.preventDefault(); pageChangeHandler(index + 1); }}>
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next" 
                           onClick={(e) => { e.preventDefault(); pageChangeHandler(Math.min(currentPage + 1, totalPages)); }}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ReviewList;
