import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContextProvider } from "./Reducer"

export default function Login(){
const[loading,setLoading]=useState(false)
const navigate=useNavigate()

const {dispatch}=useContext(ContextProvider)
   async function formaction(e){
         console.log(e)
        e.preventDefault()
        setLoading(true)
            let formData = new FormData(e.target);
            let body = {
            username: formData.get("username"),
            password: formData.get("password"),
            };

            let response = await fetch("http://localhost:4001/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include" // if you're using cookies (e.g., JWT in cookie)
            });
         if(response.status==200){
  let result = await response.json();
            console.log(result);
            dispatch({type:"set",payload:result.user})
            navigate("/gun")
         }
          
    }

    return(
        <form onSubmit={formaction}>
            <input type="text" name="username" placeholder="username" id="name"/>
             <input type="text" name="password" placeholder="password" id="password"/>
            <button>{loading ? "loading" :"Submit"}</button>
        </form>
    )
}

