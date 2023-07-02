
import { TIMELINES } from './constants';
import style from './style/index.module.less';
import { Timeline } from 'antd';
const TimeLine = () => {
    return <>
        <div className={style.container}>
            
            <div className={style.left}>
                <Timeline
                    mode='left'
                    items={TIMELINES}
                />
            </div>
            <div className={style.right}>
                <Timeline
                    mode='left'
                    items={TIMELINES}
                />
            </div>
        </div>
    </>
}

export default TimeLine;