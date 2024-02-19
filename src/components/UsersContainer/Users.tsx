import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IUser} from "../../interfaces";
import {usersService} from "../../services";
import User from "./User";


interface IProps extends PropsWithChildren{

}
const Users:FC<IProps> = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;