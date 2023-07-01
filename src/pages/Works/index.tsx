
import Header from './components/Header';
import Tabs from './components/Tabs';
import WorkCard from './components/WorkCard';
import style from './style/index.module.less';
const Works = () => {
    return <>
        <div className={style.container}>
            <Header></Header>
            <Tabs></Tabs>
            <WorkCard></WorkCard>
        </div>
    </>
}

export default Works;