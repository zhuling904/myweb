import { SOCIAL_CONTACT, normalIcons } from './constants';
import style from './style/index.module.less';
const SocialContact = () => {
    return <>
        <div className={style.container}>
            {
                SOCIAL_CONTACT.map((item, index)=>{
                    return <>
                        <div onClick={()=>{ handleLink(item.link) }} className={style.social} style={{animationDelay: `.${index}s`}}>
                            {
                                normalIcons(item.title)
                            }
                        </div>
                    </>
                })
            }
        </div>
    </>
}

function handleLink(link: string) {
    if(!link) return;
    window.open(link,'_black')
}

export default SocialContact;