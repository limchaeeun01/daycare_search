import api from "../api/axios";
import '../../css/styles.css'; 
import { useState, useEffect } from 'react'; 
import PostList from '../list/daycare/PostList';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

function CommunityPage() {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState("제목");
    const [currentPage, setCurrentPage] = useState(1);
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const filterNames = [
        "제목", "제목/내용"
    ];

    useEffect(() => {
        getData();
    }, []);  
    
    const handleSelect = (filterName) => {
        setSelectedFilter(filterName); 
    }

    const searchTextHandler = (e) => {
        setSearchText(e.target.value);
    };

    const searchClickHandler = () => {
        setData(["로딩중"]);
        setCurrentPage(1);
        applyFilter();
    };

    const writeBtnClickHandler = () => {
        if(user !== null){
            navigate('/write');
        }else{
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
        }
    }

    
    const getData = async () => {
        try {
            const response = await api.get('/daycare/post', null);
            console.log(response.data); // 서버에서 받아온 결과 설정
            setData(response.data);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    };

    const applyFilter = () => {
        if(searchText === ""){
            getData();
        }else{
            let result = data;
            switch (selectedFilter) {
                case "제목":
                    result = data.filter(post => post.title.includes(searchText)); 
                    break;
                case "제목/내용":
                    result = data.filter(post => post.title.includes(searchText) || post.content.includes(searchText));
                    break;
                default:
                    result = data;
                    break;
            }
            setData(result);
        }
    };
    

    return (
        <div className="container" style={{ width: '1100px' }}>
            <div className="page-title">
                <p style={{ margin: '20px' }}>커뮤니티</p>
                <div className="card" style={{ backgroundColor: 'white', padding: '20px' }}>
                    <div className="row align-items-center">
                        <div className="input-group mb-3"
                             style={{ marginTop: '20px', height: '55px', marginLeft: '13px' }}>
                            <button className="btn btn-secondary dropdown-toggle" type="button" 
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{ width: '140px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}>
                                {selectedFilter}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"
                                style={{ fontSize: '1.3rem'}}>
                                {filterNames.map((filterName, index) => (
                                    <li key={index}>
                                        <a
                                            className="dropdown-item"
                                            onClick={() => handleSelect(filterName)} // 클릭 시 아이템 선택
                                        >
                                            {filterName}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <input type="text" className="form-control" aria-label="Text input with dropdown button"
                                value={searchText}
                                onChange={searchTextHandler}/>
                            <button className="btn btn-primary"
                                    onClick={searchClickHandler}
                                    style={{ width: '100px', marginRight: '26px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}>
                                검색
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ height: '50px' }} />
            <div>
            
                <PostList
                    data={data}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} 
                /> 
            </div>

            <div style={{   display: 'flex', justifyContent: 'flex-end', marginBottom: '20px',
                            marginTop: '20px'}}>
                <button className="btn btn-primary"
                        onClick={writeBtnClickHandler}
                        style={{ width: '120px', height: '55px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}>
                    글쓰기
                </button>
            </div>

            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default CommunityPage;
