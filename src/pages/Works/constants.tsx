import { FaCss3Alt } from "react-icons/fa";
import { LiaReact } from "react-icons/lia";
export const TABS_CONFIG = [
  {
    title: "React",
    icons: <LiaReact />,
  },
  {
    title: "CSS",
    icons: <FaCss3Alt />,
  },
];

export interface WORKITEM {
  type: string;
  subType: string;
  tags: string[];
  title: string;
  desc: string;
  coverImg: string;
  link: string;
  avatarImg: string;
  likes: number;
  visitors: number;
}

// 动画

// 组件数据

// 手写数据
