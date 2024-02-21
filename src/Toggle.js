import {useState,useEffect} from 'react'

const Toggle = (props) => {

    const [flag,setFlag] = useState(true)

   const toggleSwitch = ()=>{
        setFlag(!flag)
   }
   
   useEffect(()=>{
     flag?document.body.style = "background:white;":document.body.style = "background:#231e1e;";
     props.titleHandler(flag) 
   },[flag]) 

  return (
    <div>
        <label className="switch">
        <input type="checkbox" onChange={toggleSwitch}/>
        <span className="slider round"></span>
        </label>
    </div>
  )
}

export default Toggle
