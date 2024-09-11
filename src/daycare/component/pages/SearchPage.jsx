import '../../css/styles.css'; 

function SearchPage(){


    return(
        <div    className="container"
                style={{ width: '1100px'}}>
            <div className="page-title">
                <p style={{ margin: '20px' }}>어린이집 찾기</p>
                <div style={{   backgroundColor: 'white',
                                padding: '20px'}}>
                    <div    class="row align-items-center"
                            style={{ paddingTop: '20px'}}>
                        <div    class="col">
                            <button class="btn btn-secondary dropdown-toggle" 
                                    type="button" 
                                    id="dropdownMenuButton1" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                서울특별시
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item">서울특별시</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    시 / 군 / 구
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    어린이집 유형
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div    class="input-group mb-3"
                            style={{    marginTop: '20px',
                                        height: '55px',
                                        marginLeft: '13px'}}>
                        <input  type="text" 
                                class="form-control" 
                                placeholder="어린이집명/유치원명을 입력해주세요."
                                style={{    fontSize: '1.2rem'}}/> 
                        <button className="btn btn-primary"
                                style={{    width: '100px',
                                            marginRight: '26px', 
                                            backgroundColor: '#4CAF50',
                                            borderColor: '#4CAF50', 
                                            fontSize: '1.3rem'}}>
                                검색
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ height: '100px'}}/>

            <div>
                <p>여기</p>
            </div>
            
        </div>
    
    );
}

export default SearchPage;