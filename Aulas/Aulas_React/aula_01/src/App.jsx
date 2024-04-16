import './App.css'
import ProductComponent from './components/ProductComponent';
import ProductTemp from './components/ProductTemp';
import PostComponent from './components/PostComponent';


function App(){
  const posts = [
    {id: 1, title: 'Post 1', description: 'Descrição do Post 1'},
    {id: 2, title: 'Post 2', description: 'Descrição do Post 2'},
    {id: 3, title: 'Post 3', description: 'Descrição do Post 3'},
  ]

  return (
    <>
      
      <div>
        {posts.map((post) =>
        <PostComponent key = {post.id} title = {post.title} description = {post.description}/>)}
      </div>
    </>
    )
}

export default App


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



