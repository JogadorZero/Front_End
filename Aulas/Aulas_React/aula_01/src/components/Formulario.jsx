function Formulario ({products}) {
    return (
        <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.preco}</td>
                        <td>{product.estoque}</td>
                        <td>
                            <tr class="actions">
                                <button>Editar</button>
                                <button>Excluir</button>
                            </tr>
                        </td>
                    </tr>
                ))}

            </tbody>
            
        </table>
    )
}

export default Formulario