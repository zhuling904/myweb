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
            strings: ['前端工程师', "篮球爱好者"],
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
                    <h3>你好👋！</h3>
                    <h1>我是 <i>朱领</i></h1>
                    <h3>我是一个 <span ref={el}></span></h3>
                    <p>或许你不相信现在的我，但你可以期待未来的我。</p>
                </div>
                <div className={style.link}>
                    <SocialContact type='withBorder'/>
                </div>
                <div className={style.buttonContaner}>
                    <NavLink className={style.button} to={'/works'}>开始探索</NavLink>
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