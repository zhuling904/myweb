
import style from './style/index.module.less';
import { Tabs } from 'antd';
import { TABS_CONFIG } from './constants';
const Works = () => {
    return <>
        <div className={style.container}>
            <Tabs
                renderTabBar={() => {
                    return <>
                        {TABS_CONFIG.map((item) => {
                            return <div className={style.tabItem} key={item.title}>
                                <div>{item.title}</div>
                            </div>
                        })}
                    </>
                }}
            />
        </div>
    </>
}

export default Works;