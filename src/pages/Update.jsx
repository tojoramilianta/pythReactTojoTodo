import {useParams , useNavigate} from "react-router-dom"
import {useState , useEffect} from "react"
import axios from "axios"

const init = {
    title : "", 
    content:  " "
}


function Update(){
    
    let params = useParams()
    let navigate = useNavigate()
    let [state , setState] = useState(init) 

    useEffect(() =>{
        axios.get(`http://localhost:8000/todos/${params.id}/`)
        .then((response) =>{ 
            const {data} = response 
            setState(state => ({...state, title:data.title , content:data.content}))

        })
        .catch(error => console.log(error))
    } , [params])
    

    function handlechange(event){
        setState({
            ...state,
            [event.target.name]:event.target.value
        })
    }

    function handlesubmit(event){
        event.preventDefault()
        axios.patch(`http://localhost:8000/todos/${params.id}/` , state)
        .then(() => {
            navigate('/todo')

        })
        .catch(error => console.log(error))
    }

    return(
        <div className="container" >
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <h1>Updtate todo</h1>
                    <form onSubmit={handlesubmit}>
                        <div className="mb-3">
                            <input type="text" onChange={handlechange} value={state.title} name="title" className="form-control" placeholder="Todo Title" />     
                        </div>
                        <div className="mb-3">
                            <textarea name="content" onChange={handlechange} className="form-control" value={state.content}  placeholder="enter your content" rows="10" ></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary form-control">Update</button>
                            
                        </div>
                    </form>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Update