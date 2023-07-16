import style from './style/index.module.less';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineMenuFold } from 'react-icons/ai';
// AiOutlineMenuUnfold
import { useNavigate } from 'react-router-dom';
const TopButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={style.container}>
                <div className={style.left} onClick={()=>{navigate('/')}}>
                    <BiHomeAlt2></BiHomeAlt2>
                </div>
                <div className={style.right}>
                    <AiOutlineMenuFold></AiOutlineMenuFold>
                </div>
            </div>
        </>
    )
}

export default TopButton;