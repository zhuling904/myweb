import { MdAnimation } from 'react-icons/md';
import { RxComponent1 } from 'react-icons/rx';
import { BiSolidPencil } from 'react-icons/bi';
import { ReactElement } from 'react';
import { MenuType } from '.';
type MenuTabs =  {
    title: string,
    type: MenuType,
    icon: ReactElement,
}
export const LEFT_MENU_TABS: MenuTabs[] = [
    {
        title: '动画',
        type: 'animation',
        icon: <MdAnimation/>,
    },
    {
        title: '组件',
        type: 'component',
        icon: <RxComponent1/>
    },
    {
        title: '手写API&功能',
        type: 'write',
        icon: <BiSolidPencil/>
    }
]