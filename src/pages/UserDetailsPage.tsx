import React, {useEffect, useState} from 'react';

import {useAppLocation} from "../hooks";
import {IUser} from "../interfaces";
import {usersService} from "../services";
import {useParams} from "react-router-dom";
import UserDetails from "../components/UsersContainer/UserDetails";


const UserDetailsPage = () => {
    const {state} = useAppLocation<{user:IUser}>()
    const [userDetails, setUserDetails] = useState<IUser>(null)
    const {id} = useParams()



    useEffect(() => {
        if(state?.user){
            setUserDetails(state.user)
        } else{
            usersService.getById(+id).then(({data})=>setUserDetails(data))
        }
    }, [id, state]);

    return (
        <div>
            {userDetails&&<UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export default UserDetailsPage;