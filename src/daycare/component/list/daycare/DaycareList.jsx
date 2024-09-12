import DaycareItem from "./DaycareItem";

function DaycareList({ data }) {

    return (
        <div className="card">
            {data && data.length > 0 ? (
                data.map((daycare) => (
                    <DaycareItem
                        key={daycare.id} 
                        data={daycare}
                    />
                ))
            ) : (
                <p>데이터가 없습니다.</p>
            )}
        </div>
    );
}

export default DaycareList;
