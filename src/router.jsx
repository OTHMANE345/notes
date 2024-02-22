import {createBrowserRouter} from "react-router-dom";



 

import DefaultLayout from './components/DefaultLayout';


const router =  createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
       
    },
   

    // {
    //     path:'/',
    //     element:<GuestLayout/>,
    //      children:[

    //             {
    //                 path:'/signup',
    //                 element:<Form/>
    //             },

    //     ]
    // },


])


 export default router;
