function ProductTemp() {
    const products = [
      {id: 1, name: 'Limão'},
      {id: 2, name: 'Kiwi'},
      {id: 3, name: 'Morango'},
    ];
    //PRIMEIRA FORMA
    const listItems = products.map(product =>
      <li key = {product.id}>
        {product.name}
      </li>);
      return(
        <>
        <ul>{listItems}</ul>
        {/*SEGUNDA FORMA*/}
        <ul>
          {products.map((prod) =>  (
            <li key = {prod.id} > {prod.name}</li>
          ))}
        </ul>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr ket = {prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      )
    }
    export default ProductTemp