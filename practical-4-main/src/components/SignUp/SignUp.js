import './SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [isValid, setIsValid] = useState(true);
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredContact, setEnteredContact] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
    // const [error, setError] = useState(null);

    const emailRegex = /\S+@\S+\.\S+/;

    const fistNameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredFirstName(event.target.value);
        console.log(enteredFirstName);
    };

    const lastNameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredLastName(event.target.value);
    }

    const contactChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredContact(event.target.value);
    };

    const emailChangeHandler = (event) => {
        if (event.target.value.trim().length > 0  && emailRegex.test(enteredEmail)) {
            setIsValid(true);
        }
        setEnteredEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredPassword(event.target.value);
    }

    const confirmPasswordChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredConfirmPassword(event.target.value);
    };

    const sendDataHandler = async (e) => {
        e.preventDefault()

        if(enteredFirstName !=="" && enteredLastName !== "" && enteredContact !== "" && enteredEmail !== "" && enteredPassword !== "" && enteredConfirmPassword !== ""){
            setIsValid(true);
        
            // const myData = new FormData();
        let myData = {
            'first_name': enteredFirstName,
            'last_name': enteredLastName,
            'phone_number': enteredContact,
            'email': enteredEmail,
            'password': enteredPassword,
            'subscription_type': 1
        }

        const response = await fetch('https://phplaravel-886096-3128455.cloudwaysapps.com/api/v1/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        });
        const data = await response.json();
        console.log(data)

        setEnteredFirstName("");
        setEnteredLastName("");
        setEnteredContact("");
        
        }else{
            setIsValid(false);
        }

    };


    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form onSubmit={sendDataHandler} >
                    <h1>Sign Up</h1>
                    <input type="text" placeholder='First Name' onChange={fistNameChangeHandler} />
                    <input type="text" placeholder='Last Name' onChange={lastNameChangeHandler} />
                    <input type="tel" maxLength="10" placeholder='Contact No.' onChange={contactChangeHandler} />
                    <input type="email" placeholder="Email" onChange={emailChangeHandler} />
                    <input type="password" placeholder="Password" onChange={passwordChangeHandler} />
                    <input type="password" placeholder="Retype Password" onChange={confirmPasswordChangeHandler} />
                    {!isValid ? <span>No blank Fields are Alllowed!</span>: ""}
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Already a Member!</h1>
                        <p>Click on Sign in button to move to the Sign In page</p>
                        <Link to="/" >
                        <button className="ghost" id="signUp">Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SignUp;