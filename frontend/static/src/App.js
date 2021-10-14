import './App.css';
import {useState, useEffect} from 'react';
import RoomNav from './components/RoomNav';
import Chatroom from './components/Chatroom';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import RegisterForm from './components/RegisterForm'

function App() {
  const [selection, setSelection] = useState('Home');
  return (
    <div className="App">
      <Header />
      <div className="container">
        <RoomNav selection={selection} setSelection={setSelection}/>
        <Chatroom />
      </div>
      <LoginScreen />
      <RegisterForm />
    </div>
  );
}

export default App;
