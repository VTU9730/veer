import { useContext } from "react";
import appContext from "./context";
function Address(){
    const {user,setUser} =useContext(appContext)
    return(
        <div>
            {user} Address details
        </div>
    )
}
export default Address;