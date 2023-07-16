import { useState } from 'react';
import { LEFT_MENU_TABS } from './constants';
import style from './style/index.module.less';
import classNames from 'classnames';
const LeftTabMenu = () => {
    const [activeTab, setActiveTab] = useState<string>('animation');
    return <div className={style.container}>
        {
            LEFT_MENU_TABS.map(item => {
                return <div className={classNames({
                    [style.tabItem]: true,
                    [style.activeTab]: item.type === activeTab,
                })}
                onClick={()=>{setActiveTab(item.type)}}
                >
                    <div className={style.icon}>{item.icon}</div>
                    <div className={style.name}>{item.title}</div>
                </div>
            })
        }
    </div>
}

export default LeftTabMenu;