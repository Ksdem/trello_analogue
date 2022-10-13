import React from 'react';
import './App.scss';
import ListWrapper from "./Components/Content/ListWrapper";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Navbar
                <Outlet/>
            </div>,
            children: [
                {path: '', element: <ListWrapper/>},
                // {path: 'edit', element: <div>Content123</div>},
                {path: '/edit/:listItemId', element: <div>Content123</div>},
                {path: '/edit/:listItemId/:rowItemId', element: <div>Content1234</div>},
            ]
        },
        /*{
            path: "/",
            element: <div>Hello world!</div>,
        },*/
    ]);
    return (
        <RouterProvider router={router}/>

    );
}

export default App;
