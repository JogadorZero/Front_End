import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <span style={{padding: '8px'}}><Link to={'/'}>Home</Link></span>
            <span style={{padding: '8px'}}><Link to={'/products'}>Products</Link></span>
            <span style={{padding: '8px'}}><Link to={'/messi'}>Messi</Link></span>
        </div>
    )
}