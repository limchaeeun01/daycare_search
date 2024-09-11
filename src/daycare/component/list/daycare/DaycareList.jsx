function DaycareList(props){
    return(
        <div class="card">
            <div class="card-body">
                {props.data.map((daycare) => {
                    return(
                        <BbsItem
                            key={daycare.id}
                            data={daycare}/>
                    );
                })}
            </div>
        </div>
    );
}

export default DaycareList;