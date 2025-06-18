import { useEffect, useState } from "react"
import { debounce,throttle } from "../functions/Gun"



export default function Gun(){
    const[normalGun,setNormalGun]=useState(false)
    const[debounceGun,setDebounceGun]=useState(false)
    const[throttleGun,setThrottleGun]=useState(false)
    const[normalCount,setNormalCount]=useState(0)
    const[debounceCount,setDebounceCount]=useState(0)
    const[throttleCount,setThrottleCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
                if(debounceGun)
                    setDebounceGun(false)
        },500)
 
    },[debounceGun])

     useEffect(()=>{
        setTimeout(()=>{
                if(throttleGun)
                    setThrottleGun(false)
        },500)
 
    },[throttleGun])


    
     useEffect(()=>{
        setTimeout(()=>{
                if(normalGun)
                    setNormalGun(false)
        },500)
 
    },[normalGun])

    return(
        <div className="gun-home"> 

             <div className="gun-wrapper">
                <p>Normal gun count:{normalCount}</p>

                <div className="gun">
                    
                    <button style={{
                        width:"80%"
                    }} onClick={()=>{
                        setNormalGun(true)
                        setNormalCount((prev)=>prev+1)

                    }}>Normal Gun</button>
                    <span className="bullet"></span>
                </div>
             </div>
             


              <div className="gun-wrapper">
                <p>Debounce gun count:{debounceCount}</p>

                 <div className="gun">
                    <button style={{
                        width:"60%"
                    }} onClick={()=>{debounce(setDebounceGun,setDebounceCount)}}>Debounce Gun</button>
                   {debounceGun && <span className="bullet"></span>} 
                 </div>

             </div>



              <div className="gun-wrapper">
                <p>Throttle gun count:{throttleCount}</p>

                <div className="gun">
                    <button style={{
                        width:"60%"
                    }} onClick={()=>{throttle(setThrottleGun,setThrottleCount)}}>Throttle Gun</button>
                    {throttleGun && <span className="bullet"></span>} 
                </div>
             </div>

        

          
        
        </div>
      
    )
}