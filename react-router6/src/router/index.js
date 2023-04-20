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
                // path: 'detail/:id/:title',
                path: 'detail',
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