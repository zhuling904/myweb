import { PAGES, WEB_NAME } from './constants';
import style from './style/index.module.less';
const Header = () => {
    return <>
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.webName}>{ WEB_NAME }</div>
            </div>
            <div className={style.right}>
                <div className={style.pages}>
                    {
                        PAGES.map(item => {
                            return <>
                                <span key={ item } className={style.pageName}>{ item }</span>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default Header;