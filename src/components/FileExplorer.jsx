import { useEffect,useState } from "react"
import { FaFolder } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import "./FileExplorer.css"
export default function FileExplorer(){
 
    return(
        <div className="main">
        <p style={{textAlign:"center"}}>File explorer</p>
        <div className="container">
          {/* <div className="folderDiv">
                 <div key={explorer.id} className="nameDiv"> 
                    <span><FaFolder/></span> {explorer.name} </div> 
                    <div className="buttonDiv"><button>+folder</button><button>+file</button></div> 
            </div> */}
            <FileNode node={explorer}/>
         
        </div>
        </div>
    )
}





    function FileNode({node}){
      console.log(node)
      const[fieNode,setFileNode]=useState(node)
      const[isOpen,setIsOpen]=useState(false)
      const[name,setName]=useState("")
      const[add,setAdd]=useState("")
      const handleChange=()=>{
        setIsOpen((prev)=>!prev)
      }


      function handleAdd(e) {
          e.stopPropagation();

          const newItem = {
            id: Date.now() + Math.floor(Math.random() * 1000), 
            name: name,
            isFolder: add === "folder",
            items: add === "folder" ? [] : undefined,
          };

          setFileNode((node) => ({
            ...node,
            items: [newItem, ...(node.items || [])],
          }));

          setAdd("");
}


            return (
                <div style={{
                  marginLeft:"20px",
                  
                }} onClick={()=>{setAdd("")}}>

                    {fieNode.isFolder ? 
                   
                    <div key={fieNode.id} className="folderDiv" style={{
                      cursor:"pointer"
                    }} onClick={handleChange}>
                        <div className="nameDiv"> 
                            <span><FaFolder/></span> {fieNode.name} 
                        </div> 
                            <div className="buttonDiv">
                              <button onClick={(e)=>{
                                e.stopPropagation()
                                setAdd("folder")
                              }}>+folder</button>
                              <button  onClick={(e)=>{
                                 e.stopPropagation()
                                setAdd("file")
                              }}>+file</button>
                              </div> 
                      
                    </div>
                    :   <div className="fileDiv" key={fieNode.id}>
                        <span><CiFileOn/></span> {fieNode.name}
                    </div>
                     }
                         {add.length>0 && 
                          <div style={{
                            width:"300px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            gap:"10px",
                            padding:"5px"
                          }}>
                          <input style={{padding:"10px"}} type="text" name="name" value={name} onClick={(e)=>{ e.stopPropagation()}} onChange={(e)=>{
                             e.stopPropagation()
                            setName(e.target.value)
                            }} />
                          <button onClick={handleAdd}>Add</button>
                          </div>
                          }

                 {isOpen && fieNode.items && fieNode.items.length>0 && fieNode.items.map((item)=> <FileNode key={item.id} node={item}/>)}
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

