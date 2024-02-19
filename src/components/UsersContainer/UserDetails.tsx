import React, {FC, PropsWithChildren} from 'react';
import {IUser} from "../../interfaces";
import user from "./User";


interface IProps extends PropsWithChildren{
    userDetails:IUser
}
const UserDetails:FC<IProps> = ({userDetails}) => {
    const {id, name, username, email} = userDetails
    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>USERNAME: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export default UserDetails;