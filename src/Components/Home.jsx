import { useEffect, useRef, useState } from "react";
// import axios from 'axios'
function Home(){
    const userNameRef=useRef()
    const ageRef=useRef()
    const actorRef=useRef()
    const option1=useRef()
    const option2=useRef()
    const option3=useRef() 
    const dateRef=useRef() 
    const fileRef=useRef()  
    function handleRef(){
        console.log(userNameRef.current.value);
        console.log(ageRef.current.value);
        console.log(option1.current.checked);
        console.log(option2.current.checked);
        console.log(option3.current.checked);
        console.log(dateRef.current.value);
        console.log(fileRef.current.value);
    }
    return(
        <div>
            <label>Username</label><br/>
            <input type='text' ref={userNameRef}></input><br/>
            <label>Age</label><br/>
            <input type='number' ref={ageRef}></input><br/>

            <label id='AA'>AA</label><br/>
            <input type='radio' ref={actorRef} name='actor' id='AA'></input><br/>
            <label id='Charan'>Charan</label><br/>
            <input type='radio' ref={actorRef} name='actor' id='Charan'></input><br/>
            <label id='NTR'>NTR</label><br/>
            <input type='radio' ref={actorRef} name='actor' id='NTR'></input><br/>

            <label id='AA'>AA</label><br/>
            <input type='checkbox' ref={option1} name='actor' id='AA'></input><br/>
            <label id='Charan'>Charan</label><br/>
            <input type='checkbox' ref={option2} name='actor' id='Charan'></input><br/>
            <label id='NTR'>NTR</label><br/>
            <input type='checkbox' ref={option3} name='actor' id='NTR'></input><br/>

            <label>Date</label><br/>
            <input type='date' ref={dateRef}></input><br/>

            <label>Proof</label><br/>
            <input type='file' ref={fileRef}></input><br/>
            <button onClick={handleRef}>Refresh</button>
        </div>
    )
}
export default Home;