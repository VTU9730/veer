import logo from './logo.svg';
import appContext,{userContext} from './context/context';
import Home from './Components/Home';
import Contact from './Components/Contact'
import About from './Components/About'
import Email from './Components/Email'
import Address from './Components/Address';
import contactHoc from './hoc/contactHoc'
// import UserData from './UserData';
import { useRef, useState } from 'react';
import {store} from './store/store'
import { Provider } from 'react-redux';
import EnhancedUserData from './Components/UserData';
function App() {
  const [app,setApp]=useState('Demo')
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [user,setUser]=useState({
    firstName:'Veeraprathap Reddy',
    lastName:'Siddavatam',
    education:'UG'
  }) 
  return (
    <Provider store={store}>
    <appContext.Provider value={{app,setApp}}>
    <userContext.Provider value={{user,setUser}}>
    <EnhancedUserData url='https://jsonplaceholder.typicode.com/todos' />
    <About name='veera' age='24'>
    </About>
    </userContext.Provider>
    </appContext.Provider>
    </Provider>
  );
}

export default App;
