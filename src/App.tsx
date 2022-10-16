import React from 'react';
import './App.scss';
import ListWrapper from "./Components/Content/ListWrapper";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Card from "./Components/Content/Card";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Navbar
                <Outlet/>
            </div>,
            children: [
                {path: '', element: <ListWrapper/>},
                {path: '/edit/:listItemId/:rowItemId', element: <div><Card/></div>},
            ]
        },
    ], {basename: process.env.PUBLIC_URL});
    return (
        <RouterProvider router={router}/>
    );
}
export default App;
