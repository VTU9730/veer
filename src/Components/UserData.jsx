import { useState,useEffect } from "react"
import axios from 'axios'
import dataFetching from "../hoc/dataFetchingHoc"
import {increment,decrement} from '../slices/counterSlice'
import { incrementLikes,decrementLikes } from "../slices/userLikesSlice"
import { useSelector, useDispatch } from "react-redux"
function UserData(props){
    const [userData,setUserData] = useState(['hello'])
    const [isLoading,setIsLoading] = useState(true)
    const dispatch=useDispatch()
    const count=useSelector(state=>state.count.value)
    const age=useSelector(state=>state.count.age)
    console.log(age);
    const likes=useSelector(state=>state.likes.value)
    console.log(count,likes);
    useEffect(()=>{
        async function fetchUserData(){
            try{
                // setTimeout(async()=>{
                    const response =await axios.get(props.url)
                    setUserData(response.data)
                    setIsLoading(false)
                // })
                
            }
            catch(e){
                console.log(e);
            }
        }
        fetchUserData()
    },[])
    if(isLoading){
        return <div>Loading...</div>
    }
    else{
        return(
            <div>
                <p>Count: {count}</p>
                <p>Age: {JSON.stringify(age)}</p>
                <button onClick={()=>dispatch(decrement())}>-</button>
                <button onClick={()=>dispatch(increment({name:'veera',age:24}))}>+</button>
                <p>Likes: {likes}</p>
                <button onClick={()=>dispatch(decrementLikes())}>-</button>
                <button onClick={()=>dispatch(incrementLikes())}>+</button>
                {userData&&<p>{userData[0].title}</p>}
            </div>
        )
    }
}
const EnhancedUserData = dataFetching(UserData)
export default EnhancedUserData;