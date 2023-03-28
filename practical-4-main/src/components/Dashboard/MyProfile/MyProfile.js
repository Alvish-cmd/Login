import { useEffect, useState } from 'react';
import './MyProfile.css';
import { Link, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import img from './manager.png';

const MyProfile = () => {

  const [userID, setUserID] = useState("");
  const [userFname, setUserFname] = useState("");
  const [userLname, setUserLname] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [userProfileData, setUserProfileData] = useState([]);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    dataFetchHandler()

  }, [token]);

  const dataFetchHandler = async () => {
    const response = await fetch('https://phplaravel-886096-3128455.cloudwaysapps.com/api/v1/get-profile',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`
        },

      });
    const data = await response.json();
    setUserProfileData(data.data);

  }
  console.log(userProfileData);

  // const dataUpdateHandler = async (event) => {
  //   event.preventDefault();

  //   let myData = {
  //     'id':userID,
  //     'first_name': userFname,
  //     'last_name': userLname,
  //     'phone_number': userContact,
  //     'email': userEmail,
  // }

  //   const response = await fetch('https://phplaravel-886096-3128455.cloudwaysapps.com/api/v1/register/', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'content-type': 'application/json',
  //       Authorization: `Bearer ${token}`
  //     },
  //     body: JSON.stringify(myData)
  // });

  // };

  return (

    <Fragment>
      <div className="profile" >
        <form className="form-data" >
          <div className="col">
            <img src={img}></img>
            <h4>Welcome, {userProfileData.first_name}!</h4>
            <div className="row">

              <input id="id" disabled value={"ID - " + userProfileData.id} placeholder="Id" />

              <input id="fname" disabled value={userProfileData.first_name} onChange={(e) => setUserFname(e.target.value)} placeholder="First name" />


              <input id="lname" disabled value={userProfileData.last_name} onChange={(e) => setUserLname(e.target.value)} placeholder="Last name" />


              <input id="contact" disabled value={userProfileData.phone_number} onChange={(e) => setUserContact(e.target.value)} placeholder="Contact No." />


              <input id="email" disabled value={userProfileData.email} onChange={(e) => setUserEmail(e.target.value)} placeholder="Email" />

              <div className="row">
                <button>Edit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>

  );

};

export default MyProfile;