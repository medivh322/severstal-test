import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const News = () => {
    const users = useSelector((state) => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        if(users.length) return false;
        dispatch({type: 'GET_NEWS_REQUEST'});
    }, [users, dispatch]);

    return(
        <ul>
            {users.map((elem, i) => 
                <li key={elem.id}>
                    {elem.title}   
                </li>
            )}
        </ul>
    )
}

export default News;