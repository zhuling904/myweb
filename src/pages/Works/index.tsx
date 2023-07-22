
import { useState } from 'react';
import ContentTitle from './components/ContentTitle';
import LeftAvatar from './components/LeftAvatar';
import LeftTabMenu, { MenuType } from './components/LeftTabMenu';
import TopButton from './components/TopButton';
import style from './style/index.module.less';
import WorkCard from './components/WorkCard';
import { WORKS_LIST, WorkItem } from './constants';
const Works = () => {
    const [activeTab, setActiveTab] = useState<MenuType>('animation');
    const [workList, setWorkList] = useState<WorkItem[]>(WORKS_LIST);
    return <>
        <div className={style.container}>
            <div className={style.left}>
                <TopButton></TopButton>
                <LeftAvatar></LeftAvatar>
                <LeftTabMenu
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setWorkList={setWorkList}
                ></LeftTabMenu>
            </div>
            <div className={style.right}>
                <ContentTitle
                    title={activeTab}
                    workList={workList}
                    setWorkList={setWorkList}
                ></ContentTitle>
                <div className={style.workContainer}>
                    {
                        workList.map(item => {
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