

function ReviewItem({ data }) {

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
                    {data.uid}
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
                        {data.rating}
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

export default ReviewItem;
