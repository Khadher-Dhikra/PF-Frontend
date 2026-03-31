import { useState } from 'react';
import Login from './login';
import Register from './register';
import ForgotPassword from './ForgotPassword';
import DivImage from '../UI/divimage';
import './Auth.css';

export default function Auth() {
    const [page, setPage]       = useState("login"); // login | register | forgot
    const [animate, setAnimate] = useState("");

    const goToRegister = () => {
        setPage("register");
        setAnimate(prev => prev === "ann" ? "rann" : "ann");
    };

    const goToLogin = () => {
        setPage("login");
        setAnimate(prev => prev === "ann" ? "rann" : "ann");
    };

    const goToForgot = () => {
        setPage("forgot");
    };

    return (
        <>
            {page === "login"     && <Login toggleForm={goToRegister} goToForgot={goToForgot} />}
            {page === "register"  && <Register toggleForm={goToLogin} />}
            {page === "forgot"    && <ForgotPassword toggleForm={goToLogin} />}
            <DivImage isLogin={page === "login"} animate={animate} />
        </>
    );
}