import { TbBrandJuejin } from "react-icons/tb";
import { AiOutlineGithub, AiFillCodeSandboxCircle, AiOutlineWechat } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RxGlobe } from 'react-icons/rx';
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
        title: 'KnowledgeBase',
        link: 'https://nextjs-notion-starter-kit-phi-gray.vercel.app/?vercelToolbarCode=q7e6XSyBgBIeMSk',
        info: '知识库'
    },
    {
        title: 'Email',
        link: '',
        info: '514034541@qq.com'
    },
    {
        title: 'WeChat',
        link: '',
        info: 'Doerr_33'
    }
]

export function normalIcons(title: string) {
    console.log("✅ ~ zhuling title:", title)
    switch (title) {
        case 'Juejin':
            return <TbBrandJuejin></TbBrandJuejin>;
        case 'Github':
            return <AiOutlineGithub></AiOutlineGithub>;
        case 'CodeSandbox':
            return <AiFillCodeSandboxCircle></AiFillCodeSandboxCircle>;
        case 'KnowledgeBase':
            return <RxGlobe></RxGlobe>
        case 'Email':
            return <HiOutlineMailOpen></HiOutlineMailOpen>
        case 'WeChat':
            return <AiOutlineWechat></AiOutlineWechat>
    }
}