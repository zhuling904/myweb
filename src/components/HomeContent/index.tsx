import style from './style/index.module.less';
import imgUrl from './img/3D.jpg';
import Typed from 'typed.js';
import React, { useEffect } from 'react';
import SocialContact from '../SocialContact';
import { NavLink } from 'react-router-dom';
const HomeContent = () => {
    const el = React.useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer', "Basketball lover", "liberal"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <>
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.desc}>
                    <h3>Hello,It's Me</h3>
                    <h1>Call Me <i>ZhuLing</i></h1>
                    <h3>And I'm a <span ref={el}></span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing dlit . Accusantium,ab autem repellat reiciendis ipsam perspicictis.</p>
                </div>
                <div className={style.link}>
                    <SocialContact type='withBorder'/>
                </div>
                <div className={style.buttonContaner}>
                    <NavLink className={style.button} to={'/works'}>Start Exploring</NavLink>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.homeImg}>
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    </>
}

export default HomeContent;