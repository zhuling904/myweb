
import LeftAvatar from './components/LeftAvatar';
import LeftTabMenu from './components/LeftTabMenu';
import TopButton from './components/TopButton';
import style from './style/index.module.less';
const Works = () => {
    return <>
        <div className={style.container}>
            <div className={style.left}>
                <TopButton></TopButton>
                <LeftAvatar></LeftAvatar>
                <LeftTabMenu></LeftTabMenu>
            </div>
            <div className={style.right}>
                
            </div>
        </div>
    </>
}

export default Works;