import { Fragment, useEffect, useState } from "react";
import MyProfile from "./MyProfile/MyProfile";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {

    return (
        <Fragment>
            <Navbar/>
            <Sidebar />
            {/* <DataTable data={props.data} /> */}
            <MyProfile/>
            {/* <UpdateProfile /> */}
        </Fragment>
    );

};

export default Dashboard;