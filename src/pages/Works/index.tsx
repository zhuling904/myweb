
import { useState } from 'react';
import ContentTitle from './components/ContentTitle';
import LeftAvatar from './components/LeftAvatar';
import LeftTabMenu from './components/LeftTabMenu';
import TopButton from './components/TopButton';
import style from './style/index.module.less';
import WorkCard from './components/WorkCard';
import { WORKS_LIST } from './constants';
const Works = () => {
    const [activeTab, setActiveTab] = useState<string>('animation');

    return <>
        <div className={style.container}>
            <div className={style.left}>
                <TopButton></TopButton>
                <LeftAvatar></LeftAvatar>
                <LeftTabMenu
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                ></LeftTabMenu>
            </div>
            <div className={style.right}>
                <ContentTitle
                    title={activeTab}
                ></ContentTitle>
                <div className={style.workContainer}>
                    {
                        WORKS_LIST.map( item => {
                            return <>
                                <WorkCard
                                    link={item.link}
                                    desc={item.desc}
                                    miniImg={item.miniImg}
                                    coverImg={item.coverImg}
                                    
                                />
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default Works;