import { useState } from "react";

const One = () =>{

let [count , setChaiCount] = useState(0);

const AddTea = () =>{
    if(count<20){
    setChaiCount(count++)
    }
}

const removeTea = () =>{
    if(count>0){
    setChaiCount(count-1)
    }
}

return(

    <>
    <div className="oneBoby">
    <h1>Hello Tea Cafe</h1>
    <h2>Chai Count : {count}</h2>
    <button onClick={AddTea}>addTea</button>
    <button onClick={removeTea}>removeTea</button>
    </div>
    </>  
)

}

export default One;