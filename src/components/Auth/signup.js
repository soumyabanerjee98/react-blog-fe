import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [status, setStatus] = useState(null);

    const newUser = () => {
        const user = { userName, userEmail, userPassword }
        axios.post("https://the-siren-blog.herokuapp.com/api/v1/signup/",user)
        .then((res) => {
            setStatus(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <div className="auth">
            <h1>Sign Up</h1>
            <label htmlFor="name" > Name : </label>
            <input
                name="name"
                onChange={(e) => setUserName(e.target.value)}
                id="name"
                type="name" />
            <br/>
            <br/>
            <br/>
            <label htmlFor="email" > Email : </label>
            <input
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
                id="email"
                type="email" />
            <br/>
            <br/>
            <br/>
            Password : <input
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
            />
            <br/>
            <br/>
            <br/>
            <button className="authBtn" onClick={newUser} >Sign Up</button>
            <br/>
            <br/>
            {status}
            <p>Already a member ? <span className="link"><Link to="/" >Click here to Sign In</Link></span> </p>
        </div>
    )
}

export default SignUp;