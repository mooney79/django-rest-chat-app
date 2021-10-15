import './App.css';
import {useState, useEffect} from 'react';
import RoomNav from './components/RoomNav';
import Chatroom from './components/Chatroom';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import RegisterForm from './components/RegisterForm';
import Cookies from 'js-cookie';

function App() {
  const [selection, setSelection] = useState('Home');
  const msgs = [{user: 'Sam', time_created: 1, body: "aokeokoeko", room_assoc: "Test"}, {user: 'Sam', time_created: 3, body: "Home, people", room_assoc: "Home"}, {user: 'Sam', time_created: 5, body: "Home, but later", room_assoc: "Home"}]
  // ^^^ Strictly for testing
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  
  const [logged, setLogged] = useState(false)
  const [register, setRegister] = useState(false)

  const handleLogout = () => {
    // setUser({});
    // setUsername("");
    // setPassword("");
    Cookies.remove('Authorization');
    setLogged(false);
  };
  async function handleLogin(user){
    const response = await fetch('/rest-auth/login/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),  
    })
    if (!response === true){
        console.warn(response);
    } else {
        const data = await response.json();
        Cookies.set(`Authorization`, `Token ${data.key}`);
        console.warn(data.key)
        setLogged(true)    
    }
}

useEffect(() => {
  (Cookies.get('Authorization')) ? setLogged(true) : setLogged(false);}, []);
 


  if (logged){    
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <RoomNav selection={selection} setSelection={setSelection}/>
        <Chatroom msgs={msgs} selection={selection}/>
      </div>
      <button onClick={handleLogout}>logout</button>      
    </div>
   );} else if (register===true){
     return(<RegisterForm setRegister={setRegister} setUser={setUser} setLogged={setLogged}/> );
   } else {
    return (
    <div>
      <LoginScreen handleLogin={handleLogin} user={user} setUser={setUser} setRegister={setRegister}/>
      
    </div>
    )
  }
}

export default App;
