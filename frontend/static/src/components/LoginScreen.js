function LoginScreen(props){
   
    const handleChange = (e) => {
        const {name, value} = e.target;
        props.setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLogin(props.user);
        props.setUser(props.user);
    }

    function handleClick(e){
        props.setRegister(true)
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
                    value={props.user.username}
                />
            </div>

            <div className="form-group text-left mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password"
                    placeholder="Enter Password"
                    required
                    name="password" 
                    onChange={handleChange}
                    value={props.user.password}
                />
            </div>

           
            <button type="submit" className="btn btn-primary mt-3">Login</button>
            <button type="button" onClick={handleClick} className="btn btn-primary mt-3">Register</button>

        </form>
    )
}

export default LoginScreen