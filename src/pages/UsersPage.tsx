import React from 'react';
import Users from "../components/UsersContainer/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users/>

        </div>
    );
};

export default UsersPage;