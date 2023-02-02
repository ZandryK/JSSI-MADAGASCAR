import React,{useEffect} from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Home from './pages/Home';
import "aos/dist/aos.css"
import AOS from 'aos';
import Developpement from './pages/Developpement';
import GraphicDesign from './pages/GraphicDesign';
import Formation from './pages/Formation';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layouts/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/developpement",
                element:<Developpement/>
            },
            {
                path:"/graphic-design",
                element:<GraphicDesign/>
            },
            {
                path:"/formation",
                element:<Formation/>
            }

        ]
    }
])
const App = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
