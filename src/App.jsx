import {BrowserRouter , Route , Routes} from "react-router-dom"
import AddTodo from "./pages/AddTodo"
import Error404 from "./pages/Error404"
import Home from "./pages/Home"
import Todo from "./pages/Todo"
import Update from "./pages/Update"
import View from "./pages/View"

function App(){
    return(
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/todo" element={<Todo/>} />
                <Route path="/add-todo" element={<AddTodo/>} />
                <Route path="/view/:id" element={<View/>}   />
                <Route path="/update/:id" element={<Update/>} />
                <Route  path="*" element={<Error404/>} />

            </Routes>
        
        </BrowserRouter>
    )
}

export default App