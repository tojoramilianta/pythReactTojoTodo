import {useState , useEffect} from "react" 
import axios from "axios"
import { Link } from "react-router-dom"

const init = {
    data: [(
            <tr>
                <td></td>
                <td>Chargement...</td>
                <td></td>

            </tr>
    )]
}

export default function Todo(){

    let[state , setState ] = useState(init)
    let[deleted , setdeleted] = useState(false)

    function handleclick(event){
        const id = event.target.id
        axios.delete(`http://localhost:8000/todos/${id}/`)
        .then((response) =>{
            setdeleted(true)
        })
        .catch(error => console.log(error))

        
    }

    useEffect(() => {
        if(deleted){
            setdeleted(false)
        }


        axios.get('http://localhost:8000/todos/')
        .then((response) =>{
            const todos = response.data 

            let trs = todos.map((todo , index) => {
                return (
                    <tr key={index}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.content}</td>
                        <td><Link to={'/view/'+todo.id} className="btn btn-primary">View</Link></td>
                        <td><Link to={'/update/'+todo.id} className="btn btn-success">Update</Link></td>
                        <td><button type="submit" className="btn btn-danger" id={todo.id} onClick={handleclick}>delete</button> </td>

                    </tr>
                )

            
            })

            setState(state => ({
                ...state,
                data: trs
            }))

        })
        .catch(error => console.log(error))
        
        
    }, [deleted]);


    return(
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titre</th>
                        <th>Content</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>


                    </tr>
                
                </thead>
                <tbody>
                    {state.data}
                </tbody>

                
            </table>
            
        </div>
    )
}