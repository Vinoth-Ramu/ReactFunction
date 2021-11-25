import React, { useState,useEffect } from "react"
function HookCounterTwo(){
    

    const intialCount = 0
    const [count,setCount ] = useState(0)

    useEffect(() => 
     {
       console.log("mounting phase")  
     },[])//only called at mounting phase not at updating phase

     useEffect(() => 
     {
       console.log("updating phase")  
     },[count])

    
     return(
        <div>
           <h1> Count: {count}</h1><br/><br/>
            <button onClick ={() => setCount(intialCount)} >Reset</button> &nbsp;
            <button onClick ={() => setCount(count+1)} >Increment</button>&nbsp;
            <button onClick ={() => setCount(count-1)} >Decrement</button>&nbsp;
        </div>
    )
}


export default HookCounterTwo