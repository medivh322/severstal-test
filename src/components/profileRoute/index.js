import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let isLoggin = useSelector(state => state.isAuth);

    return(
        <Route
            {...rest}
            render={() => (!isLoggin) ? <Redirect to="/login" /> : <Component />}
        />
    )
}

export default PrivateRoute;