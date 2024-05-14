import { Link } from "react-router-dom"
export default function Product(){
    const products = [
        {id: 1, name: "Uma", price: 1},
        {id: 2, name: "Duas", price: 2},
        {id: 3, name: "Três", price: 3}
    ]
    
    return(
        <div>
            <h3>Produtos</h3>
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle:'none'}}>
                    <li>Nome:{prod.name}</li>
                    <li>Preço: R$ {prod.price}</li>
                    <li><Link to={`${prod.id}/editform`}>Mais informações</Link></li>
                    <li><hr /></li>
                    </ul>
            ))}
        </div>
    )
}