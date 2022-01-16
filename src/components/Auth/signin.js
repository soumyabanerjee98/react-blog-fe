import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./auth.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logMessage, setLogMessage] = useState();
    let history = useHistory();

    const signin = () => {
        const auth = { email, password };
        axios.post("https://the-siren-blog.herokuapp.com/api/v1/signin/",auth)
        .then((res)=>{
            if (res.data === "Logged In"){
                localStorage.setItem("login", "true");
                setLogMessage("Signed In");
                history.push("/home");
            }
            else if (res.data === "Please Sign Up") {
                setLogMessage("Not Registered, Please Sign Up");
            }
            else if (res.data === "Please check your Email and Password") {
                setLogMessage("Please check your Email and Password");
            }
        })
        .catch((err) => {
                console.log(err);
        })
    }

    return(
        <div className="auth">
            <h1>Sign in</h1>
            <label htmlFor="email" > Email : </label>
            <input
                name="email"
                onChange={(t) => setEmail(t.target.value)}
                id="email"
                type="email" />
            <br/>
            <br/>
            <br/>
            Password : <input
                type="password"
                onChange={(t) => setPassword(t.target.value)}
            />
            <br/>
            <br/>
            <br/>
            <button className="authBtn" onClick={signin} >Sign In</button>
            <br/>
            <br/>
            {logMessage}
            <p>New User ? <span className="link"><Link to="/signup" >Click Here to Sign Up</Link></span> </p>
        </div>
    )
}

export default SignIn;