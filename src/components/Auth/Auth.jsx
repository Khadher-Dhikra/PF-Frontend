import { useState } from 'react';
import Login from './login';
import Register from './register';
import ForgotPassword from './ForgotPassword';
import DivImage from '../UI/divimage';
import './Auth.css';
import FPwdP from './password reset/forgetPwdPage';

export default function Auth() {
    const [view, setView] = useState("login");
    const [isLogin, setIsLogin] = useState(true);
    const [animate, setAnimate] = useState("") 

    const toggleForm = () => {
    setView(prev => (prev === "login"? "register" : "login"));
    setAnimate(prev => prev === "ann" ? "rann" : "ann");
    setIsLogin(prev => !prev);
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
            {
                view === "login" && (<Login toggleForm={toggleForm} goToForgot={()=> setView("forgot")}/>)
            }
            {
                view === "register" && (<Register toggleForm={toggleForm} />)
            }
            {
                view === "forgot" && (<FPwdP goBack={()=> setView("login")}/>)
            }
            <DivImage isLogin={isLogin} animate={animate}/>
        </>
    );
}