import Home from '../page/Home'
import About from '../page/About'
import Message from "../page/Home/Message";
import Detali from "../components/Detali";

const routers = [
    {
        path: '',
        element: <Home/>
    },
    {
        path: 'home',
        element: <Home/>,
        children: [{
            path: 'message',
            element: <Message/>,
            children: [{
                path: ':id/:title',
                element: <Detali/>,
            }]
        }]
    },
    {
        path: 'about',
        element: <About/>
    }
]

export default routers