import { Link } from "react-router-dom"


function Home(){
    return(
        <div>
            <h1>Home page</h1>
            <ul>
                <li>LINK LIST</li>
                <li> <Link to="/todo">todo</Link></li>
                <li> <Link to="/add-todo">create new Todo</Link></li>
            </ul>
        </div>
    )
}

export default Home