import { useContext, useRef } from "react";
import appContext,{userContext} from "./context";
function Address(){
    const {app,setApp} = useContext(appContext)
    const {user,setUser} = useContext(userContext) 
    return(
        <div>
            <section>
                <label>Modify First name</label>
                <input type='text' onChange={(e)=>setUser({...user,...{firstName:e.target.value}})}></input>
            </section>
            {app} Address details 
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            
        </div>
    )
}
export default Address;