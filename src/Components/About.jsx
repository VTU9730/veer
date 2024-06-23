import { useEffect, useState } from "react";
 
function About({name,age}){
    const obj={
        name:'veera',
        age:24
    }

    const hello = () => {
        return{
            
            ...obj,name:'hello',    
        }
    }
    console.log(hello());
    return(
        <div>
           about
            <button>Add</button>
        </div>
    )
}
export default About;