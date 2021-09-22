import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import LoginForm from './components/loginForm';
import News from './components/news';
import Profile from './components/profile';
import PrivateRoute from './components/profileRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LOGOUT_REQUEST } from './redux/constants';

function App() {
  const auth = useSelector(state => state.isAuth);
  const dispatch = useDispatch();

  function logout(){
    dispatch({type: LOGOUT_REQUEST});
  }

  return (
    <Router>
      <Container fluid>
        <nav>
          <ul className="nav_list">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
            {auth ? <li className="btn_logout" onClick={logout}>Выйти</li> : ""}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            Главная
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/news">
            <News />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch> 
      </Container>
    </Router>
  );
}

export default App;
