// import { useState,useEffect } from "react"

// export default function Trafficlights(){
//     const[color,setColor]=useState("red")


//     useEffect(()=>{
//         if(color=="red")
//         {
//             setTimeout(()=>{
//                setColor("orange")
//             },3000)
//         }else if(color=="orange"){
//             setTimeout(()=>{
//                setColor("green")
//             },2000)
//         }else{
//             setTimeout(()=>{
//                setColor("red")
//             },4000)
//         }
//     },[color])

//     return(
//         <>
//         <div  style={{
//             marginLeft:"100px",
//             display:"flex",
//             padding:"20px",
//             justifyContent:"center",
//             alignItems:"center",
//             gap:"20px"
//         }}>
//             <p style={{
//                 padding:"10px",
//                 backgroundColor:color=="red"?"red":"gray"
//             }}>red</p>
//               <p style={{
//                 padding:"10px",
//                 backgroundColor:color=="green"?"green":"gray"
//             }}>green</p>
//               <p style={{
//                 padding:"10px",
//                 backgroundColor:color=="orange"?"orange":"gray"
//             }}>orange</p>
//         </div>
//         </>
//     )
// }





import { useState, useEffect, useRef } from "react";

export default function Trafficlights() {
  const [color, setColor] = useState("red");
  const timerRef = useRef(null);

  // Duration map for each light
  const durationMap = {
    red: 3000,
    orange: 2000,
    green: 4000,
  };

  // Transition map
  const nextColor = {
    red: "orange",
    orange: "green",
    green: "red",
  };

  useEffect(() => {

    if (timerRef.current) clearTimeout(timerRef.current);

 
    timerRef.current = setTimeout(() => {
      setColor(nextColor[color]);
    }, durationMap[color]);

    return () => clearTimeout(timerRef.current);
  }, [color]);

  return (
    <>
      <div
        style={{
          marginLeft: "100px",
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p
          style={{
            padding: "10px",
            backgroundColor: color === "red" ? "red" : "gray",
            color: "white",
          }}
        >
          red
        </p>
        <p
          style={{
            padding: "10px",
            backgroundColor: color === "green" ? "green" : "gray",
            color: "white",
          }}
        >
          green
        </p>
        <p
          style={{
            padding: "10px",
            backgroundColor: color === "orange" ? "orange" : "gray",
            color: "white",
          }}
        >
          orange
        </p>
      </div>
    </>
  );
}
