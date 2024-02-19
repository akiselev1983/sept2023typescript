import React, {FC, PropsWithChildren} from 'react';
import {IUser} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren{
    user:IUser
}
const User:FC<IProps> = ({user}) => {
    const{id, name} = user

    const navigate = useNavigate()

    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <button onClick={()=>navigate(id.toString(), {state:{user}})}>USER-DETAILS</button>
        </div>
    );
};

export default User;