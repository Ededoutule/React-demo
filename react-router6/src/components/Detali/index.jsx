import {useParams, useSearchParams, useLocation, useMatch} from "react-router-dom";

function Detali() {

    // params传参，‘detail/:id/:title’
    // let { id, title } = useParams();


    // search传参 detail?name=${item.name}&title=${item.title}
    /* const [search, getSearch] = useSearchParams()
    const id = search.get('name')
    const title = search.get('title')*/



    // state路由传参
    const {state: {name, title}} = useLocation()


    return (
        <>
         {/*   <div>name:{id? id: '???'}</div>
            <div>title: ???{ title ? title: '???'}</div>*/}
            <div>name:{'???'}</div>
            <div>title: ???{  '???'}</div>
        </>
    )
}

export default Detali