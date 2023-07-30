import style from './style/index.module.less';
interface WorkCardProps {
    desc: string, // 作品秒速
    link: string, // 作品链接
    coverImg: string, // 封面图
    miniImg: string,  // 小图
}
const WorkCard = (props: WorkCardProps) => {
    const { desc, link, coverImg, miniImg } = props;
    return <div className={style.container}
        onClick={() => { window.open(link, "_blank") }}
    >
        <div className={style.top}>
            <img src={coverImg} alt="" />
        </div>
        <div className={style.bottom}>
            <div className={style.img}>
                <img src={miniImg} alt="" />
            </div>
            <div className={style.desc}>
                {desc}
            </div>
        </div>
    </div>
}

export default WorkCard;