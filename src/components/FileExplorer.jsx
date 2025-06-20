import { useEffect,useState } from "react"
import { FaFolder } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import "./FileExplorer.css"
export default function FileExplorer(){
    const[folders,setFolders]=useState([])
     useEffect(()=>{
      const arr= pushFolders(explorer.items)
      setFolders(arr)
    },[])


    function pushFolders(items){
          return items.map((item)=>{
            return (
                <div>
                    {item.isFolder ? 
                   
                    <div key={item.id} className="folderDiv">
                        <div className="nameDiv"> 
                            <span><FaFolder/></span> {item.name} </div> 
                            <div className="buttonDiv"><button>+folder</button><button>+file</button></div> 
                    </div>
                    :   <div className="fileDiv" key={item.id}>
                        <span><CiFileOn/></span> {item.name}
                    </div>
                     }
                  {item.items.length>0 && pushFolders(item.items)}
                </div>
            )
        })
    }
console.log(pushFolders(explorer.items))
    return(
        <div className="main">
        <p style={{textAlign:"center"}}>File explorer</p>
        <div className="container">
          <div className="folderDiv">
                 <div key={explorer.id} className="nameDiv"> 
                    <span><FaFolder/></span> {explorer.name} </div> 
                    <div className="buttonDiv"><button>+folder</button><button>+file</button></div> 
            </div>
          {pushFolders(explorer.items)}
        </div>
        </div>
    )
}
















const explorer = {
  id:"1",
  name: "root",
  isFolder: true,
  items: [
    {
      id:"2",
      name: "public",
      isFolder: true,
      items: [
        {
          id:"3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id:"4",
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              id:"5",
              name: "hello.html",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id:"6",
          name: "public_nested_file",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id:"7",
      name: "src",
      isFolder: true,
      items: [
        {
          id:"8",
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id:"9",
          name: "Index.js",
          isFolder: false,
          items: []
        },
        {
          id:"10",
          name: "styles.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id:"11",
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

