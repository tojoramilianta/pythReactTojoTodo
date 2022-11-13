import {useParams} from "react-router-dom"
import {useState , useEffect } from "react"
import axios from "axios"

const init = {
    title: "",
    content: ""
}


function View(){
   

        let params = useParams()
        let [state , setState] = useState(init)

        useEffect(() => {
            axios.get(`http://localhost:8000/todos/${params.id}/`)
            .then((response) =>{
                let {data} = response
                setState(state => ({...state , title: data.title , content: data.content}))
            })
            .catch(error => console.log(error))
        }, [params]);

        return(


        <div className="container">
            <h1>{state.title}</h1>
            <p>{state.content}</p>
        
            
        </div>
    )
}

export default View