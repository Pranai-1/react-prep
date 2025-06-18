import { useEffect, useState } from "react"

export default function MemoryGame(){
    const[gridSize,setGridSize]=useState(0)
   const[gridElements,setGridElements]=useState([])

//    function written by me


//    function createGridElements(gridSize){
//     let element=<div className="element"></div>
//     let rowelements= <div className="row">
//       {Array.from({length:gridSize},(_,i)=>element)  }
//         </div>
//         let colElements=<div className="col"> {Array.from({length:gridSize},(_,i)=>rowelements)  }</div>
//       setGridElements(colElements)
//    }


  function createGridElements(gridSize){
        let removeLastElement=gridSize%2==0?false:true
        
        let colElements= Array.from({length:gridSize},(_,rowIndex)=>
        <div className="row" key={rowIndex}>
      {Array.from({length:gridSize},(_,colIndex)=>{
        if(removeLastElement && rowIndex==gridSize-1 && colIndex==gridSize-1)
            return <span></span>
            else
        return <div className="element" key={`col-${colIndex}-${rowIndex}`}>{`${rowIndex}${colIndex}`}</div>
      }
     
      )  }
        </div> )


        let finalElements=<div className="col">{colElements}</div>
     
      setGridElements(finalElements)
   }


   function createGridValues(gridSize){
        
   }

console.log(gridElements,gridSize)
useEffect(()=>{
    createGridElements(gridSize)
},[gridSize])

    return(
        <div className="grid-container">
            <div className="input">
            <p>Memory Game</p>
            <label htmlFor="gridSize">Grid size : 
                <span>      </span>   
            <input name="gridSize" type="number" min={2} max={9} value={gridSize} onChange={(e)=>{
                if(!isNaN(Number(e.target.value))){
                     setGridSize(Number(e.target.value) > 9 ? 9:Number(e.target.value))
                }else
                setGridSize(0)
               
                }} />

                </label>

            </div>
                {gridElements}
           


            
        </div>
    )
}