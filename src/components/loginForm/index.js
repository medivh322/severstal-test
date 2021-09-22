import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { AUTH_REQUEST } from "../../redux/constants";

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState("");
    const dispatch = useDispatch();

    function handleChangeInput(e) {
        (e.target.getAttribute("id") === "login") ? setLogin(e.target.value) : setPassword(e.target.value);
    }

    function SubmitForm(e) {
        if (login !== "Admin" || password !== "12345") {
            setIsValid(false);
            return false;
        }
        dispatch({ type: AUTH_REQUEST });
        setIsValid(true);
    }

    return (
        (isValid === true) ? <Redirect to="/profile" /> :
            <>
                <div className="form_login">
                    <Form.Group className="mb-3" controlId="login">
                        <Form.Label>username:</Form.Label>
                        <Form.Control onChange={handleChangeInput} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>password:</Form.Label>
                        <Form.Control onChange={handleChangeInput} type="password" />
                    </Form.Group>
                    <Button onClick={SubmitForm} variant="primary">
                        Log In
                    </Button>
                    {isValid === false ? <div className="error_valid">Имя пользователя или пароль введены не верно</div> : ""}
                </div>
            </>
    )
}

export default LoginForm;