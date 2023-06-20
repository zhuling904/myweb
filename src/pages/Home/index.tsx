import Header from "../../components/Header"
import style from './style/index.module.less';
const Home = () => {
    return <>
        <div className={style.container}>
            我是home
            <Header></Header>
        </div>
    </>
}

export default Home;