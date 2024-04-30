import './App.css'
import ProductComponent from './components/ProductComponent';
import ProductTemp from './components/ProductTemp';
import PostComponent from './components/PostComponent';
import Formulario from './components/Formulario';
import CadastroDeUsuarios from './components/CadastroDeUsuarios';

function App(){
  
  const posts = [
    {id: 1, nome: 'Banana', preco: '10', estoque: '34'},
    {id: 2, nome: 'Ovo', preco: '5', estoque: '65'},
    {id: 3, nome: 'Uva', preco: '7', estoque: '45'},
  ]
  const saveForm = (e) => {
    e.preventDefault();
    setName("");
    setPreco("");
    setEstoque("");
  }

  return (
    <>
      <Formulario products={posts}/>
      <div>
        {posts.map((post) =>
        <PostComponent key = {post.id} nome = {post.nome} preco = {post.preco} estoque = {post.estoque}/>)}
      </div>
      <div>
      <CadastroDeUsuarios/>
      </div>
    </>
    )
}

export default App

/*
BACKUP FORMULARIO
const saveForm = (e) => {
  e.preventDefault();
  setName("");
  setEmail("");
}
return(
  <div className="cor">
    <CadastroDeUsuarios/>
      </div>
)

*/
  // let component;
  //   let condition = false;
  //   if(condition){
  //       component = <ConditionalComponent1/>
  //   } else {
  //       component = <ConditionalComponent2/>
  //   }
//     return (
//       {/**
//       <>
//       {component}
//        <div>
//           {component ? <ConditionalComponent1/>: <ConditionalComponent2/>}
//       </div>
      
//       </>
//     */}
// )



