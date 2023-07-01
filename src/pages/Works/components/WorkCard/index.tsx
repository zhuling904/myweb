

import { handleLink } from '../../../../components/SocialContact';
import { WORKS } from './constants';
import style from './style/index.module.less';
const WorkCard = () => {

    return <>
        <div className={style.container}>
            {
                WORKS.map(item => {
                    return <div className={style.cardItem}>
                        <div className={style.coverImg}>
                            <img src={item.imgUrl} alt={item.title} />
                        </div>
                        <div className={style.title}>{item.title}</div>
                        <div className={style.desc}>{item.desc}</div>
                        <div className={style.link} onClick={()=>{
                            handleLink(item.url)
                        }}>View Protfolio ——</div>
                    </div>
                })
            }
        </div>
    </>
}

export default WorkCard;
