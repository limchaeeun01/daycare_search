import api from "../api/axios";
import '../../css/styles.css'; 
import { useState } from 'react'; 
import DaycareList from '../list/daycare/DaycareList';

function SearchPage() {
    const [data, setData] = useState([]); 
    const [daycareName, setDaycareName] = useState(''); 
    const [selectedSigunName, setselectedSigunName] = useState("시 / 군 / 구");
    const [selectedCrTypeName, setSelectedCrTypeName] = useState("어린이집 유형");
    const [currentPage, setCurrentPage] = useState(1);
    const [hasSearched, setHasSearched] = useState(false);
    
    const sigunNames = [
        "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", 
        "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", 
        "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"
    ];

    const crTypeNames = [
        "전체", "가정", "국공립", "민간", "사회복지법인", "직장", "협동"
    ];

    const handleSelect1 = (sigunName) => {
        setselectedSigunName(sigunName); 
    }

    const handleSelect2 = (crTypeName) => {
        setSelectedCrTypeName(crTypeName); 
    }

    const daycareNameHandler = (e) => {
        setDaycareName(e.target.value);
    };

    const searchClickHandler = () => {
        setHasSearched(true);
        setData(["로딩중"]);
        setCurrentPage(1);
        getData(); 
    };

    const selectCheck = () => {
        if(selectedSigunName == "시 / 군 / 구"){
            return false;
        }else{
            return true;
        }
    }

    const getData = async () => {
        if(selectCheck()){
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
        }else{
            alert("시/군/구를 선택한 후 검색해주세요.")
        }
    };
    
    return (
        <div className="container" style={{ width: '1100px' }}>
            <div className="page-title">
                <p style={{ margin: '20px' }}>어린이집 찾기</p>
                <div className="card" style={{ backgroundColor: 'white', padding: '20px' }}>
                    <div className="row align-items-center" style={{ paddingTop: '20px' }}>
                        <div className="col">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                서울특별시
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item">서울특별시</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedSigunName}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"
                                    style={{ fontSize: '1.3rem' }}>
                                    {sigunNames.map((sigunName, index) => (
                                        <li key={index}>
                                            <a
                                                className="dropdown-item"
                                                onClick={() => handleSelect1(sigunName)} // 클릭 시 아이템 선택
                                            >
                                                {sigunName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedCrTypeName}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"
                                    style={{ fontSize: '1.3rem' }}>
                                    {crTypeNames.map((crTypeName, index) => (
                                        <li key={index}>
                                            <a
                                                className="dropdown-item"
                                                onClick={() => handleSelect2(crTypeName)} // 클릭 시 아이템 선택
                                            >
                                                {crTypeName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3" style={{ marginTop: '20px', height: '55px', marginLeft: '13px' }}>
                        <input type="text"
                            className="form-control"
                            placeholder="어린이집명/유치원명을 입력해주세요."
                            value={daycareName}
                            onChange={daycareNameHandler}
                            style={{ fontSize: '1.2rem' }} />
                        <button className="btn btn-primary"
                            onClick={searchClickHandler}
                            style={{ width: '100px', marginRight: '26px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}>
                            검색
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ height: '50px' }} />

            {hasSearched && (
                    <div>
                        <DaycareList
                            data={data}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage} 
                        />
                    </div>
                )}
                
            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default SearchPage;
