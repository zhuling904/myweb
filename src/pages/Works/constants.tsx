
import { FaCss3Alt } from 'react-icons/fa';
import { LiaReact } from 'react-icons/lia';
export const TABS_CONFIG = [{
    title: 'React',
    icons: <LiaReact/>,
},{
    title: 'CSS',
    icons: <FaCss3Alt/>,
}]

export type WorkItem = {
    desc: string,
    type: string,
    link: string,
    coverImg: string,
    miniImg: string,
}

// 模拟假数据
export const WORKS_LIST: WorkItem[] = [{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述recommended',
    type: 'recommended',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述recommended',
    type: 'recommended',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '是个推荐的',
    type: 'recommended',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
}]

export const COMP_WORKS_LIST: WorkItem[] = [{
    desc: '组件list',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '是个推荐的',
    type: 'recommended',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
}]

export const WRITE_WORKS_LIST: WorkItem[] = [{
    desc: '手写list',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述',
    type: 'latest',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '这是一个描述recommended',
    type: 'recommended',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
},{
    desc: '是个推荐的',
    type: 'recommended',
    link: 'zhuling.net.cn',
    coverImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f',
    miniImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215152022_crpqz.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692105634&t=abde2a13025e084556ba6a0c93e09b5f'
}]


export const LISTMAP = {
    animation: WORKS_LIST,
    component: COMP_WORKS_LIST,
    write: WRITE_WORKS_LIST
}