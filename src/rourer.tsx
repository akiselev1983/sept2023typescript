import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, children:[
                    {
                        path:':id', element:<UserDetailsPage/>
                    }
                ]
            },
            {
                path:'posts', element:<PostsPage/>
            }
        ]
    }
])

export {router}