import Card from "../Cards/Card";

const ItemList = ( {data = []}) => {
    return (
        data.map(product => <Card key={product.id} info={product}/>)
);}


export default ItemList;