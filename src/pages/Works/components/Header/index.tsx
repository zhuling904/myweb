
import SocialContact from '../../../../components/SocialContact';
import style from './style/index.module.less';
const Header = () => {
    return <>
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.titleDesc}>What i created</div>
                <div className={style.title}>My Work Portfolio</div>
                <div className={style.desc}>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</div>
                <div className={style.social}>
                    <SocialContact type='noneBorder'></SocialContact>
                </div>
            </div>
        </div>
    </>
}

export default Header;
