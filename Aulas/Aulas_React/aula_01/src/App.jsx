import './App.css'
import ProductComponent from './components/ProductComponent';
import ProductTemp from './components/ProductTemp';
import PostComponent from './components/PostComponent';
import Formulario from './components/Formulario';
import CadastroDeUsuarios from './components/CadastroDeUsuarios';
import {useState, useEffect} from 'react'

function App() {
  const[products, setProducts] = useState ([])
  const[id, setId] = useState (1)
  const[name, setName] = useState ("")
  const[price, setPrice] = useState ("")
  const[stock, setStock] = useState ("")
  const[edit, setEdit] = useState (false)

  const url = 'http://localhost:3000/products';

  useEffect(() =>{
    const getProductList = async() => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    getProductsList();

  }, []);


  const clearForm = () => {
    setName("")
    setPrice("")
    setStock("")
  }

  const getProductById = async(id) => {
    const res = await fetch(url + `?id=${id}`);
    const data = await res.json();

    setName(data[0].name);
    setPrice(data[0], price);
    setStock(data[0].stock);
    setId(data[0].id);

    setEdit(true);
  }
    
  const saveProduct = async(e) => {
    e.preventDefault();
    const saveRequestParams = {
      method: edit ? "PUT" : "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({name, price, stock})
    }

    const save_url = edit ? url + `/${id}`: url;
    const res = await fetch(save_url, saveRequestParams);
    if(!edit) {
      const newProduct = await res.json();

      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }

    if(edit) {
      const editedProduct = await res.json();
      const editedProductIndex = products.findIndex(prod => prod.id === id);
      products[editedProductIndex] = editedProduct;
      setProducts(products);
    }
    clearForm();
    setEdit(false);
  }

const deleteProduct = async(id) => {
  const res = await fetch(url + `/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    },
  });

  const deleteProduct = await res.json();
  setProducts(products.filter(prod => prod.id !== deleteProduct.id));
}



const handleName = (e) => {setName(e.target.value)}
const handlePrice = (e) => {setPrice(e.target.value)}
const handleStock= (e) => {setStock(e.target.value)}
    



  return(
    <>
      {console.log(products)}

      <div>
        <Formulario produtos={products} editedProduct={editedProduct} deleteProduct={deleteProduct} />
        <CadastroDeUsuarios handleName={handleName} handlePrice={handlePrice} handleStock={handleStock} saveProduct={saveProduct} name={name} price={price} stock={stock}/>
      </div>
    </>
  )
}

export default App

  // const saveForm = (e) => {
  //   e.preventDefault();
  //   if(!edit) {
  //     setId( v => v + 1);
  //     setProducts((prevProducts) => [...prevProducts, {id, name, price, stock}])
  //   }
  //   if (edit) {
  //     const productIndex = products.findIndex(prod => prod.id === id)
  //     products[productIndex] = {id,name,price,stock}
  //     setProducts(products)
  //     setEdit(false)
  //   }
  //   clearForm()

//  const deleteProduct = (id) => {
//       setProducts(products.filter((prod) => prod.id !== id))
//     }

//     const editProduct = (productId) => {
//       const product = products.find(prod => prod.id === productId)
//       setId(product.id)
//       setName(product.name)
//       setPrice(product.price)
//       setStock(product.stock)
//       setEdit(true)
//     }
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



