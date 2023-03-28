import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    let history = useNavigate();

    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [isValid, setIsValid] = useState(true);
    

    const unameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredUserName(event.target.value);
        // console.log(enteredUserName);
    };

    const passChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredPassword(event.target.value);
    }


    const userLoginHandler = async (e) => {
        e.preventDefault();

        if (enteredUserName !== "" && enteredPassword !== "") {
            setIsValid(true)

            let myData = {
                'email': enteredUserName,
                'password': enteredPassword
            };

        
            const response = await fetch('https://phplaravel-886096-3128455.cloudwaysapps.com/api/v1/login',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(myData)

                });

            const data = await response.json();

            const userData = data.data;
            const accessToken = userData.access_token;
            console.log(accessToken);

            localStorage.setItem("access_token", accessToken);

            if(response.status === 200){
                history("/dashboard");
            }

        } else {
            setIsValid(false);      
            return;
        }

        console.log(isValid);

    };

    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form onSubmit={userLoginHandler}>
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" onChange={unameChangeHandler} />
                    <input type="password" placeholder="Password" onChange={passChangeHandler} />

                    {!isValid ? <span>Please enter valid values</span> : ""}

                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>New here!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <Link to="/signup" >
                            <button className="ghost" id="signUp">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;