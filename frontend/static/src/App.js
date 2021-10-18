import './App.css';
import {useState, useEffect} from 'react';
import RoomNav from './components/RoomNav';
import Chatroom from './components/Chatroom';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import RegisterForm from './components/RegisterForm';
import Cookies from 'js-cookie';
import InputField from './components/InputField';

function App() {
  const [selection, setSelection] = useState('Home');
  // const msgs = [{user: 'Sam', time_created: 1, body: "aokeokoeko", room_assoc: "Test"}, {user: 'Sam', time_created: 3, body: "Home, people", room_assoc: "Home"}, {user: 'Sam', time_created: 5, body: "Home, but later", room_assoc: "Home"}]
  // ^^^ Strictly for testing
  const [user, setUser] = useState({});
  
  const [logged, setLogged] = useState(false);
  const [register, setRegister] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [msgs, setMsgs] = useState([]);

  async function fetchRooms(){
    const response = await fetch('/api_v1/chat/rooms/')
    if (response.ok){
        const data = await response.json();
        // console.log(data);
        setRooms(data);
        // console.log(rooms);

    }
}

  async function fetchMsgs(){
    const response = await fetch('/api_v1/chat/msgs/');
    if (response.ok){
        const data = await response.json();
        console.log(data)
        setMsgs(data);
    }
  }

  async function fetchUser(){
    // const pk = fetchUserPK();
    const response = await fetch(`/rest-auth/user/`);    
    if (response.ok){
        const data = await response.json();
        setUser(data);
        console.log(data);
        
    }
}

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
        // setLogged(false);
    } else{
        const data = await response.json();
        Cookies.set(`Authorization`, `Token ${data.key}`);
        console.warn(data.key);
        if (data.key && !logged) {
          setLogged(true)
        } else {
          Cookies.remove('Authorization');
        }
    }
}

useEffect(() => {
  (Cookies.get('Authorization')) ? setLogged(true) : setLogged(false);
  fetchRooms();
  fetchMsgs();
  fetchUser()}, []);

// setInterval(function(){ fetchRooms();fetchMsgs() }, 5000000);
 

  if (logged){    
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <RoomNav selection={selection} setSelection={setSelection} rooms={rooms}/>
        <div className="stacked col-10">
          <Chatroom msgs={msgs} selection={selection}/>
          <InputField selection={selection} user={user} msgs={msgs} setMsgs={setMsgs}/>
        </div>
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
