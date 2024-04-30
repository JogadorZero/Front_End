import React, {useState} from "react"
export default function CadastroDeUsuarios({saveForm, handleName, handlePreco, handleEstoque, Name, Preco, Estoque}){
    const [name, setName] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    
    return(
        <>
        <h3>Cadastro de Produtos</h3>
        <form onSubmit={saveForm}>
            <label htmlFor='Nome'>Nome</label>
            <input type='text' name='Nome' onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="Preço">Preco</label>
            <input type="Preço" name="Preço" onChange={(e) => setPreco(e.target.value)}/>

            <label htmlFor="Estoque">Estoque</label>
            <input type="Estoque" name="Estoque" onChange={(e) => setEstoque(e.target.value)}/>

            <input type="submit" value="Cadastrar" />
        </form>
        </>
    )
}
