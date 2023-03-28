import { Fragment } from "react";
import './UpdateProfile.css';
import img from './manager.png';
import { useState } from "react";


const UpdateProfile = () => {

    const[userID, setUserID] = useState("");
    const[userFname, setUserFname] = useState("");
    const[userLname, setUserLname] = useState("");
    const[userContact, setUserContact] = useState("");
    const[userEmail, setUserEmail] = useState("");
  
    const [userProfileData, setUserProfileData] = useState([]);
  
    const token = localStorage.getItem("access_token");

    const dataUpdateHandler = async (event) => {
        event.preventDefault();
    
        let myData = {
          'id':userID,
          'first_name': userFname,
          'last_name': userLname,
          'phone_number': userContact,
          'email': userEmail,
      }
    
        const response = await fetch('https://phplaravel-886096-3128455.cloudwaysapps.com/api/v1/register/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(myData)
      });
    
      };

    return (
        <Fragment>
            <div className="profile" >
                <form className="form-data" >
                    <div className="col">
                        <img src={img}></img>
                        <h4>Welcome,!</h4>
                        <div className="row">

                            <input id="id" placeholder="Id" />

                            <input id="fname" placeholder="First name" />


                            <input id="lname" placeholder="Last name" />


                            <input id="contact" placeholder="Contact No." />


                            <input id="email" placeholder="Email" />

                            <div className="row">
                                <button>Update</button>
                                <button>Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );

};

export default UpdateProfile;