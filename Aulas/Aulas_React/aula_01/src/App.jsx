import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroComponent from './components/IntroComponent'
import ChilComponent from './components/ChildComponent'
import EventComponent from './components/EventComponent'
import ConditionalComponent1 from './components/ConditionalComponent1'
import ConditionalComponent2 from './components/ConditionalComponent2'


function App() {
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


export default App
