import { useState } from 'react';
import Login from './login';
import Register from './register';
import DivImage from '../UI/divimage';
import './Auth.css';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [animate, setAnimate] = useState("")

    const toggleForm = () => {
    setIsLogin(prev => !prev);
    setAnimate(prev => prev === "ann" ? "rann" : "ann");
    };

    return(
        <>
            {isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
            <DivImage isLogin={isLogin} animate={animate}/>
        </>
    );
}