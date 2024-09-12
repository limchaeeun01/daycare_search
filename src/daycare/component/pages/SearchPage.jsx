import axios from 'axios';
import '../../css/styles.css'; 
import { useState } from 'react'; 
import DaycareList from '../list/daycare/DaycareList';

function SearchPage() {
    const [data, setData] = useState([]); 
    const [daycareName, setDaycareName] = useState(''); 

    const daycareNameHandler = (e) => {
        setDaycareName(e.target.value);
    };

    const searchClickHandler = () => {
        getData(); 
    };

    const getData = async () => {
        try {
            const response = await axios.get('http://openapi.seoul.go.kr:8088/5a696a4a6b74776f33377172777252/json/ChildCareInfo/1/5/');
            console.log("API Response:", response.data); // 데이터 구조를 로그로 확인
            const childCareInfo = response.data.ChildCareInfo;
            const daycareList = childCareInfo.row.map(item => ({
                id: item.STCODE,
                name: item.CRNAME,
                address: item.CRADDR || '주소 정보 없음',
                phone: item.CRTELNO || '전화번호 정보 없음'
            }));
            setData(daycareList); 
        } catch (err) {
            console.error(err); 
        }
    };
    

    return (
        <div className="container" style={{ width: '1100px' }}>
            <div className="page-title">
                <p style={{ margin: '20px' }}>어린이집 찾기</p>
                <div style={{ backgroundColor: 'white', padding: '20px' }}>
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
                                    시 / 군 / 구
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    어린이집 유형
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
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

            <div style={{ height: '100px' }} />

            <div>
                <DaycareList
                 data={data}/>
            </div>

            <div style={{ height: '100px'}}></div>
        </div>
    );
}

export default SearchPage;
