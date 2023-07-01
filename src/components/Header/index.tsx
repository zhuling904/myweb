import { NavLink } from 'react-router-dom';
import { PAGES, WEB_NAME } from './constants';
import style from './style/index.module.less';
const Header = () => {
    return <>
        <div className={style.container}>
            <div className={style.left}>
                <NavLink to='/' className={style.webName}>{ WEB_NAME }</NavLink>
            </div>
            <div className={style.right}>
                <div className={style.pages}>
                    {
                        PAGES.map((item,index) => {
                            return <>
                                <NavLink to={item.router} key={ item.title } style={{animationDelay: `${0.2 * index}s`}} className={style.pageName}>{ item.title }</NavLink>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default Header;