import {useParams} from "react-router-dom";

function Detali() {
    let { id, title } = useParams();
    return (
        <>
            <div>name:{id}</div>
            <div>title: ???{title}</div>
        </>
    )
}

export default Detali