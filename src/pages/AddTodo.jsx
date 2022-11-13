import { useState } from "react" 
import { useNavigate } from "react-router-dom"
import  axios from "axios"

let initState = {
    title: "",
    content: ""
}

export default function AddTodo(){

    const [state , setState] = useState(initState)
    let navigate = useNavigate()

    function handlechange(event){
        setState({
            ...state,
            [event.target.name]: event.target.value
        })

    }

    function handlesubmit(event){
        event.preventDefault()
        axios.post('http://localhost:8000/todos/' , state)
        .then((response) => {
            navigate('/todo')
          

        })
        .catch((error) => console.log(error))

    }

    return(
        <div className="container">
            <div className="row">
                <h1 className="text-center mb-3">Create New Todo</h1>
                
                <div className="col-lg-4 offset-lg-4">
                    <form onSubmit={handlesubmit}>
                        <div className="mb-3">
                            <input type="text" onChange={handlechange}  name="title" placeholder="Todo Title" />
                            
                        </div>
                        <div className="mb-3">
                            <textarea name="content" onChange={handlechange}   className="form-control" placeholder="Todo Content" rows="10"></textarea>
                   
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary form-control" type="submit">save todo</button>
                            
                        </div>
                    </form>
                    
                </div>
                
            </div>
            
        </div>
    )
}