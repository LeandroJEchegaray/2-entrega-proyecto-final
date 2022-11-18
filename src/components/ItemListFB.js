import Card from "../components/Cards/Card";

const ItemListFB = ( {data = []}) => {
    console.log(data)
    return (
        <div className="items-container">
            {
                data.map(product => <Card key={product.id} info={product}/>)
            }
        </div>
);}


export default ItemListFB;