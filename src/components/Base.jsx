import { useState } from "react"


export default function Base(){
    const[count,setCount]=useState(0)

    console.log("hello welcome to check source maps")

    const counterUpdate=()=>{
        setInterval(()=>{
         const newCount=count+1
         debugger;
         setCount(newCount)
        },500)
    }

    //Here we are starting an interval to update the state after 500ms,for the first click it will take count as 0 for the first interval
    //it will get updated to 1 and then after 500ms there are no update in the state as count was 0 at the time of interval creation

    //for the second click it will get updated count of 1 and then it updates it 2 but the previous interval is still running
    //with the count value of 0 so it will buffer between 1 and 2 
    return(
        <>
        <p style={{color:"blue"}}>All the best for the interview preparation pranai</p>
        <p>count:{count}</p>
        <button onClick={counterUpdate}>Increment Count</button>
        </>
    )
}