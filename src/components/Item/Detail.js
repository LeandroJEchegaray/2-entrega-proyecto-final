

const Detail = ( {item}) =>{
    return(
        <div >
            <p >{item.name}</p>
            <img src={item.imagen} alt={item.name}/>
        </div>
    )
};

export default Detail;