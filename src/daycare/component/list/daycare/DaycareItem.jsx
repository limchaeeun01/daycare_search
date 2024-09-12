function DaycareItem({ data }) {

    if (!data) {
        return <div>유치원 정보가 없습니다.</div>;
    }

    return (
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
                    {data.name || '이름 정보 없음'}
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
                    }}/>
                    <p className="card-text"
                    style={{ fontSize: '1.2rem'}}>
                        4.3 / 5.0 (3)
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
                    주소: {data.address || '주소 정보 없음'}
                </p>
                <img
                    src="/icon/heart-on-icon.png"
                    style={{
                        height: '40px',
                        marginLeft: 'auto'
                    }}/>
            </div>
        </div>
    );
}

export default DaycareItem;
