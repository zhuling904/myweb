import { Tooltip } from 'antd';
import { SOCIAL_CONTACT, normalIcons } from './constants';
import style from './style/index.module.less';
import classNames from 'classnames';
interface SocialContactProps {
    type: 'withBorder' | 'noneBorder'
}
const SocialContact = (props: SocialContactProps) => {
    const { type } = props;
    return <>
        <div className={style.container}>
            {
                SOCIAL_CONTACT.map((item, index) => {
                    return <>
                        <Tooltip title={item.info} placement='top' color={'#282938'}>
                            <div onClick={() => { handleLink(item.link) }} className={classNames({
                                [style.socialWithBorder]: type === 'withBorder',
                                [style.social]: type === 'noneBorder',
                            })} style={{ animationDelay: `.${index}s` }}>
                                {
                                    normalIcons(item.title)
                                }
                            </div>
                        </Tooltip >
                    </>
                })
            }
        </div >
    </>
}

export function handleLink(link: string) {
    if (!link) return;
    window.open(link, '_black')
}

export default SocialContact;