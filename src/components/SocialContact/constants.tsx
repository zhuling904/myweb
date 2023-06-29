import { TbBrandJuejin } from "react-icons/tb";
import { AiOutlineGithub, AiFillCodeSandboxCircle, AiOutlineWechat } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
export const SOCIAL_CONTACT = [
    {
        title: 'Juejin',
        link: 'https://juejin.cn/user/3109845573069422',
    },
    {
        title: 'Github',
        link: 'https://github.com/HushanCode',
    },
    {
        title: 'CodeSandbox',
        link: 'https://codesandbox.io/u/hushancode',
    },
    {
        title: 'Email',
        link: '',
        email: '514034541@qq.com'
    },
    {
        title: 'WeChat',
        link: '',
        img: ''
    }
]

export function normalIcons(title: string) {
    switch (title) {
        case 'Juejin':
            return <TbBrandJuejin></TbBrandJuejin>;
        case 'Github':
            return <AiOutlineGithub></AiOutlineGithub>;
        case 'CodeSandbox':
            return <AiFillCodeSandboxCircle></AiFillCodeSandboxCircle>;
        case 'Email':
            return <HiOutlineMailOpen></HiOutlineMailOpen>;
        case 'WeChat':
            return <AiOutlineWechat></AiOutlineWechat>
    }
}