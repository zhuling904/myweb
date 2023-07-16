import { useState } from 'react';
import { LEFT_MENU_TABS } from '../LeftTabMenu/constants';
import { CLASSIFY } from './constants';
import style from './style/index.module.less';
import classNames from 'classnames';
interface ContentTitlePropType {
    title: string,
}
const ContentTitle = (props: ContentTitlePropType) => {
    const { title } = props;
    const [tabType, setTabType] = useState<string>(CLASSIFY[0].type);
    const tab = LEFT_MENU_TABS.find(tab => tab.type === title);
    return <div className={style.container}>
        <div className={style.title}>
            全部{tab ? tab.title : null}
        </div>
        <div className={style.classify}>
            {
                CLASSIFY.map(item => {
                    return <div className={classNames({
                        [style.tabItem]: true,
                        [style.isActive]: tabType === item.type
                    })}
                        onClick={() => { setTabType(item.type) }}
                    >
                        {item.title}
                    </div>
                })
            }
        </div>
    </div>
}

export default ContentTitle;