import { useRef, useState } from "react";
import {store} from '../store/store'
function Contact(props){
    console.log(props);
    // const [username,setUsername]=useState('')
    // const [password,setPassword]=useState('')
    // const [credentials,setCredentials]=useState({username:'',password:''})
    // // console.log(credentials);
    // const usernameRef=useRef('')
    // const passwordRef=useRef('')
    // function handleClick(){
    //     setCredentials({...{username:usernameRef.current,passwordRef:passwordRef.current}})
    // }
    // console.log(credentials);
    // console.log('store',store);
    // function handleChange(e){
    //     if(e.target.name=='username'){
    //         usernameRef.current=e.target.value
    //     }
    //     else{
    //         passwordRef.current=e.target.value
    //     }
    // }
    return(
        <div style={{width:'60%',height:'100%',border:'solid 1px blue'}}>
            {/* <p>Username:{credentials.username}</p> */}
            {/* <p>Password:{credentials.password}</p>
            <div style={{border:'solid 1px red',width:'50%',margin:'10% 20%'}}>

                <label>Username</label>
                <input type='text' ref={usernameRef} name='username' onChange={handleChange}></input><br />
                <label>Password</label>
                <input type='text' ref={passwordRef} name='password' onChange={handleChange}></input><br />
                <button style={{marginLeft:'-120px'}} onClick={handleClick}>Submit</button>
                
            </div> */}
            hello contact
        </div>
    )
}
export default Contact;