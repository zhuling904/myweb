
import { useState } from 'react';
import { TABS_CONFIG } from './constants';
import style from './style/index.module.less';
import classNames from 'classnames';
const Tabs = () => {
    const [activeType, setActiveType] = useState('all');

    return <>
        <div className={style.container}>
            {
                TABS_CONFIG.map(item => {
                    return <div className={classNames({
                        [style.tabItem]: true,
                        [style.active]: activeType === item.type,
                    })}
                    onClick={()=>{
                        setActiveType(item.type)
                    }}
                    > 
                        {item.title}
                    </div>
                })
            }
        </div>
    </>
}

export default Tabs;
