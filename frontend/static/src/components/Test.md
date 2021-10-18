value_or_null = (document.cookie.match(/^(?:.*;)?\s*Authorization\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
import Cookies from 'js-cookie';
console.log(value_or_null)

if (value_or_null){
    //Check if Token is ... wait... do we need to do this server side at all?  I guess so, right?

}


async function fetchData(){
    const response = await fetch('https://127.0.0.1:8000/rest-auth/authtoken/tokenproxy/')
    if (response.ok){
      const data = await response.json();
      console.log(data)
    }
  }

  Cookies.get(name: 'Authorization');

//pull list of tokens, see if it's in there, then grab the associated user?



/* 
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    
  };

// if there's a user show the message below
  if (user) {
    return <div>{user.name} is logged in</div>;
  }

  // if there's no user, show the login form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default App;



const handleSubmit = async e => {
  e.preventDefault();
  const user = { username, password };
  // send the username and password to the server
  const response = await axios.post(
    "http://blogservice.herokuapp.com/api/login",
    user
  );
  // set the state of the user
  setUser(response.data)
  // store the user in localStorage
  localStorage.setItem('user', response.data)
  console.log(response.data)
};



 useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);



<button onClick={handleLogout}>logout</button>


const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };









*/