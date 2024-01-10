import React,{useState} from 'react'


//Use State

// function UseState() {

//     const [age, setAge] = useState(18)
//     const [sib, setSib] = useState(0)
//   return (
//     <div>
//         <div>
//             <h3>My current age: {age}</h3>
//             <button onClick={() => setAge(age + 1)}>Get Older</button>
//             <h3>No of siblings: {sib}</h3>
//             <button onClick={() => setSib(sib + 1)}>Add one Sibling</button>
//         </div>
//     </div>
//   )
// }


//Hooks using Objects
// function UseState(){

//     const [state, setState] = useState({age:19, siblings:3});
  
//     const handleState = (val)=>{
    
//       setState({
//         ...state,[val]:state[val]+1
//       })
//     }
  
//     const {age,siblings} = state;
  
//     return(
//       <div>
//         <h3>My Current Age is {age}</h3>
//         <h4>My siblings {siblings}</h4>
//         <button onClick={()=>{handleState("age")}}>age</button>
//         <button onClick={()=>{handleState("siblings")}}>sib</button>
//       </div>
//     )
//   }


// 

import { useEffect } from "react";

function UseState(){

  const [currAge, setAge] = useState(19);
  const [currSib, setSib] = useState(3);

  useEffect(()=>{
    alert(`something changed ${currAge}`)
  },[currAge])

  return(
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
      <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
    </div>
  )

}

export default UseState