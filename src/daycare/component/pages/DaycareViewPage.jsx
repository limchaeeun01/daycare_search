import { useLocation } from "react-router-dom";

function DaycareViewPage(){
    const location = useLocation();
    const { daycareData } = location.state || {};

    return(
        <div className="container" style={{ width: '1100px', marginTop: '40px' }}>
            <div className="card" style={{ backgroundColor: 'white', padding: '20px' }}>
                <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                    <p  style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold'}}>
                        {daycareData.CRNAME}
                    </p>
                    <img
                        src="/icon/heart-off-icon.png"
                        style={{
                            height: '40px',
                            marginBottom: '15px',
                            marginLeft: '10px'
                        }}/>
                </div> 
                <div class="container text-start" style={{ fontSize: '1.3rem', marginTop: '15px' }}> 
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">어린이집 유형</div>
                        <div class="col-8">{daycareData.CRTYPENAME || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">주소</div>
                        <div class="col-8">{daycareData.CRADDR || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">전화번호</div>
                        <div class="col-8">{daycareData.CRTELNO || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">운영 상태</div>
                        <div class="col-8">{daycareData.CRSTATUSNAME || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">정원</div>
                        <div class="col-8">{daycareData.CRCAPAT || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">총 어린이 수</div>
                        <div class="col-8">{daycareData.CHILD_CNT_TOT || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">총 교실 수</div>
                        <div class="col-8">{daycareData.CLASS_CNT_TOT || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">총 교직원 수</div>
                        <div class="col-8">{daycareData.EM_CNT_TOT || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">CCTV 설치 대수</div>
                        <div class="col-8">{daycareData.CCTVINSTLCNT || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">우편번호</div>
                        <div class="col-8">{daycareData.ZIPCODE || '정보 없음'}</div>
                    </div>
                    <div class="row" style={{ marginBottom: '15px' }}>
                        <div class="col-3">인증일</div>
                        <div class="col-8">{daycareData.CRCNFMDT || '정보 없음'}</div>
                    </div>
                </div>
                <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '20px'
                        }}>
                    <p  style={{ fontSize: '1.6rem', marginLeft: '12px', fontWeight: 'bold'}}>
                        후기
                    </p>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <img
                        src="/icon/star-icon.png"
                        style={{
                            height: '30px',
                            marginBottom: '15px',
                            marginLeft: '20px',
                            marginRight: '8px'
                        }}/>
                        <p  style={{ fontSize: '1.6rem'}}>
                        4.3 / 5.0 (3)
                        </p>
                    </div> 
                </div> 
                <div    className="card"
                style={{ marginBottom: '20px'}}>
                    <div    className="card-header"
                            style={{
                                fontSize: '1.3rem',
                                padding: '10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                        <div
                            style={{ marginLeft: '5px' }}>
                            <img
                                src="/icon/star-icon.png"
                                style={{
                                    height: '30px',
                                    marginBottom: '6px',
                                    marginLeft: '5px',
                                    marginRight: '15px'
                            }}/>
                            <div className="form-check form-check-inline" style={{ marginRight: '20px'}}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="5.0"/>
                                <label className="form-check-label" for="inlineRadio1">5.0</label>
                            </div>
                            <div className="form-check form-check-inline" style={{ marginRight: '20px'}}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="4.0"/>
                                <label className="form-check-label" for="inlineRadio2">4.0</label>
                            </div>
                            <div className="form-check form-check-inline" style={{ marginRight: '20px'}}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="3.0"/>
                                <label className="form-check-label" for="inlineRadio2">3.0</label>
                            </div>
                            <div className="form-check form-check-inline" style={{ marginRight: '20px'}}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2.0"/>
                                <label className="form-check-label" for="inlineRadio2">2.0</label>
                            </div>
                            <div class="form-check form-check-inline" style={{ marginRight: '20px'}}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1.0"/>
                                <label className="form-check-label" for="inlineRadio2">1.0</label>
                            </div>
                        </div>
                        <button className="btn btn-primary"
                            style={{ width: '100px', backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontSize: '1.3rem' }}>
                            완료
                        </button>
                    </div>
                    <div className="card-body">
                    <textarea  placeholder="후기를 작성해보세요."
                            style={{    borderColor: 'white', width: '100%', height: '100px',
                                        fontSize: '1.3rem', resize: 'vertical', minHeight: '100px', maxHeight: '200px'
                             }}>
                    </textarea>
                    </div>
                </div>
            </div>
            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default DaycareViewPage;