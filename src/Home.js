import React ,{useContext} from 'react'
import { stateContext } from './Context/Statecontext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Home = () => {

  
  //  const storage = JSON.parse(localStorage.getItem("newarray"));
  //  const [datas, setdatas] = useState(storage);

   const {state, dispatch} = useContext(stateContext);
   console.log("state", state,"dispatch", dispatch);

   const [datas, setdatas]= useState(state.newarr)
   
  //  console.log(datas);
  //  localStorage.removeItem("newarray");

  
  const removeElement = (id) => {
     setdatas(()=> datas.filter((val, i) => i!== id));
     console.log(datas);
      
  };
  localStorage.setItem("newarray",JSON.stringify(datas));


  const editElement = (info)=>{
    Nav(`/form?name=${info.name}`)

  }
  
 const Nav = useNavigate();
 const gotoforms = ()=>{
  Nav("/form")

    }
  return (
    <div>
       <table border="3"> 
       <caption style={{color:"black", fontSize:"25px"}}>User Details</caption>
        <thead>
          <tr>
            <th>ID</th>
           <th>UserName</th>
           <th>UserDescription</th>
           <th>IsCompleted</th>
           <th>Update</th> 
           <th>Delete</th>
           </tr>
    
        </thead>
        <tbody>
          {datas?.map((items,i)=>(<tr key={i}>
            <td>{i+1}</td>
            <td>{items.name}</td>
            <td>{items.description}</td>
            <td>{items.iscomplete}</td>
            <td><button onClick={(()=>editElement(items))} >Edit</button></td>
            <td><button onClick={()=>removeElement(i)}>Delete</button></td>
          </tr>))}

        </tbody>
       </table>
        
       <div>
       <button onClick={()=>gotoforms()}>NavigateToForm</button>

       </div>
       
    </div>
  )
}

export default Home


