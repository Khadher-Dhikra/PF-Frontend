// import { useState } from 'react';
import illusImg1 from '../../assets/Login-amico.svg'
import illusImg2 from '../../assets/Online world-amico.svg'

export default function DivImage({isLogin,animate}){
    const img1 = <img src={illusImg1} alt="login illustration image" />;
    const img2 = <img src={illusImg2} alt="login illustration image" />;

    return (
        <div className={`Dimg ${animate}`}>
            <span>TopG Team</span>
            {isLogin ? img1 : img2}
        </div>
    );
}