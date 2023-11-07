interface experience {
    title: string;
    time: string;
    function: string;
  }
  
  interface lifeImgList {
    title: string;
    desc: string;
    time: string;
    url: string;
  }
  export interface ABOUT {
    author: string;
    introduce: string;
    skills: string[];
    experience: experience[];
    future: string;
    lifeImgList: lifeImgList[];
  }