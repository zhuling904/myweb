import { LEFT_MENU_TABS } from './constants';
import style from './style/index.module.less';
import classNames from 'classnames';
import { LISTMAP } from '../../constants';
interface LeftTabMenuProps {
    activeTab: string,
    setActiveTab: Function,
    setWorkList: Function,
}
export type MenuType = 'animation' | 'component' | 'write'
const LeftTabMenu = (props: LeftTabMenuProps) => {
    const { activeTab, setActiveTab, setWorkList } = props;
    const getWorkList = (type: MenuType) => {
        // 激活菜单
        setActiveTab(type)
        // 设置作品list
        setWorkList(LISTMAP[type])
    }
    return <div className={style.container}>
        {
            LEFT_MENU_TABS.map(item => {
                return <div className={classNames({
                    [style.tabItem]: true,
                    [style.activeTab]: item.type === activeTab,
                })}
                    onClick={() => { getWorkList(item.type) }}
                >
                    <div className={style.icon}>{item.icon}</div>
                    <div className={style.name}>{item.title}</div>
                </div>
            })
        }
    </div>
}

export default LeftTabMenu;