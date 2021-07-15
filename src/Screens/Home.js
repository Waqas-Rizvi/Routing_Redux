import { Navber } from "../Components/Navber";
import { useEffect } from "react";  
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Store/Action'

export const Home = () => {
    let state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [])
    
    return (
        <div>
            <Navber />
            <h1>Home Page</h1>
            <p>{state.username}</p>
            {state.todos.map((v,i) => <p key={i}>{v.title}</p>)}
        </div>
    )
}

