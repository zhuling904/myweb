import { MdAnimation } from 'react-icons/md';
import { RxComponent1 } from 'react-icons/rx';
import { BiSolidPencil } from 'react-icons/bi';
export const LEFT_MENU_TABS = [
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