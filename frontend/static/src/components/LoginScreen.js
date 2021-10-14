import {useState} from 'react'
import Cookies from 'js-cookie';

function LoginScreen(props){
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    // const [error, setError] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    async function handleSubmit(user){
        const response = await fetch('127.0.0.1:8000/rest-auth/login/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('crftoken')
          },
          body: JSON.stringify(user),  
        })
        if (!response === true){
            console.warn(response);
        } else {
            const data = await response.json();
            Cookies.set(`Authorization`, `Token ${data.key}`);
        }
    }
       
    return(
        <form className="mt-3" onSubmit={handleSubmit}>

            <div className="form-group text-left mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username"
                    placeholder="Enter username"
                    required
                    name="username" 
                    onChange={handleChange}
                    value={user.username}
                />
            </div>

            <div className="form-group text-left mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password"
                    placeholder="Enter Password"
                    required
                    name="password" 
                    onChange={handleChange}
                    value={user.password}
                />
            </div>

           
            <button type="submit" className="btn btn-primary mt-3">Login</button>

        </form>
    )
}

export default LoginScreen