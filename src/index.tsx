import ReactDOM from 'react-dom/client';

import './index.css';
import {App} from './App';
import {RouterProvider} from "react-router-dom";
import {router} from "./rourer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);

