import HomeContent from "../../components/HomeContent";
import style from './style/index.module.less';
const Home = () => {
    return <>
        <div className={style.container}>
            <HomeContent></HomeContent>
        </div>
    </>
}

export default Home;