import {useState} from "react";
import {NavLink, Outlet} from "react-router-dom";

function Message() {
    const [navList, setNavList] = useState([
        {
            id: '001',
            name: '01',
            title: '01'
        },
        {
            id: '002',
            name: '02',
            title: '02'
        },
        {
            id: '003',
            name: '03',
            title: '03'
        }
    ])
    return (
        <div>
            <ol>
                {
                    navList.map(item => {
                        return (
                            /*<NavLink key={item.id} to={`/home/message/detail/${item.name}/${item.title}`}>{item.name}</NavLink>*/

                            /*<NavLink key={item.id} to={`/home/message/detail?name=${item.name}&title=${item.title}`}>{item.name}</NavLink>*/

                            <NavLink key={item.id} to={{pathname: '/home/message/detail'}} state={{name: item.name, title: item.title}}>{item.name}</NavLink>
                        )
                    })
                }
            </ol>
            <Outlet />
        </div>
    )
}

export default Message