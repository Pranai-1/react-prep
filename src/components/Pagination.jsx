import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { useState } from 'react'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pagination />
    </QueryClientProvider>
  )
}


function Pagination(){
    const[pageNumber,setPageNumber]=useState(1)
      const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://dummyjson.com/products?limit=30').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'
console.log(data)
  if (error) return 'An error has occurred: ' + error.message


    return(
        <div>
           {data.products.slice((pageNumber-1)*10,pageNumber*10).map((item)=>
           <div key={item.id} style={{
            margin:"10px",
            padding:"10px",
            backgroundColor:"gray"
           }}>
              <p>Title:{item.title}</p>
               <p>Description:{item.decription}</p>
                <p>Category:{item.category}</p>
                 <p>Price:{item.price}</p>
                  <p>Rating:{item.rating}</p>
                  <p>Brand:{item.brand}</p>
            </div>
           )}
          
        {data.products.length>10 &&
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
           {pageNumber>1 && <button onClick={()=>setPageNumber((prev)=>prev-1)}>previous</button> }
            {Array.from({length:Math.ceil(data.products.length/10)},(_,i)=>i).map((ele,i)=><p key={i}>{i+1}</p>)}
           {pageNumber<Math.ceil(data.products.length/10) && <button  onClick={()=>setPageNumber((prev)=>prev+1)}>next</button>}

        </div>
     }
        </div>
    )


}