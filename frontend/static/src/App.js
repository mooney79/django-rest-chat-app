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
  const [user, setUser] = useState({
    "pk": 0,
    "username": "Filler",
  });
  
  const [logged, setLogged] = useState(false);
  const [register, setRegister] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [msgs, setMsgs] = useState([]);

  async function fetchRooms(){
    const response = await fetch('/api_v1/chat/rooms/')
    if (response.ok){
        const data = await response.json();
        setRooms(data);
    }
}

  async function fetchMsgs(){
    const response = await fetch('/api_v1/chat/msgs/');
    if (response.ok){
        const data = await response.json();
        setMsgs(data);
    }
  }

  async function fetchUser(){
    const response = await fetch(`/rest-auth/user/`, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      }
    });    
    if (response.ok){
        const data = await response.json();
        setUser(data);
    }
  }

  const handleLogout = () => {
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


async function submitMsg(selection, text) {
  const newMsg = {room_assoc: selection, sender: user.username, text: text };
  console.log(newMsg);
  const response = await fetch(`/api_v1/chat/msgs/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(newMsg),
  }).catch(console.log('Something went wrong'));
  if (response.ok){
        console.log('Message Submitted!');
        setMsgs([[newMsg], ...msgs]);
        fetchMsgs()
  }
}

useEffect(() => {
  (Cookies.get('Authorization')) ? setLogged(true) : setLogged(false);
  fetchRooms();
  fetchMsgs();
  fetchUser()}, []);
 

  if (logged){    
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <RoomNav selection={selection} setSelection={setSelection} rooms={rooms} setRooms={setRooms} fetchRooms={fetchRooms}/>
        <div className="stacked col-10">
          <Chatroom msgs={msgs} setMsgs={setMsgs} selection={selection}/>
          <InputField selection={selection} user={user} msgs={msgs} setMsgs={setMsgs} submitMsg={submitMsg}/>
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
