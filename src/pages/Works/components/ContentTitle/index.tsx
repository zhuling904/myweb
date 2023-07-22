import { useEffect, useState } from 'react';
import { LEFT_MENU_TABS } from '../LeftTabMenu/constants';
import { CLASSIFY } from './constants';
import style from './style/index.module.less';
import classNames from 'classnames';
import { LISTMAP, WorkItem } from '../../constants';
import { MenuType } from '../LeftTabMenu';
interface ContentTitlePropType {
    title: MenuType,
    workList: WorkItem[],
    setWorkList: Function,
}
const ContentTitle = (props: ContentTitlePropType) => {
    const { title, setWorkList } = props;
    const [tabType, setTabType] = useState<string>(CLASSIFY[0].type);
    const tab = LEFT_MENU_TABS.find(tab => tab.type === title);

    useEffect(() => {
        setTabType(CLASSIFY[0].type)
    }, [title])

    const getWorkList = (type: string) => {
        const newWorks = LISTMAP[title].filter(item => {
            return item.type === type
        })
        setTabType(type)
        setWorkList(type !== CLASSIFY[0].type ? newWorks : LISTMAP[title])
    }
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
                        onClick={() => { getWorkList(item.type) }}
                    >
                        {item.title}
                    </div>
                })
            }
        </div>
    </div>
}

export default ContentTitle;