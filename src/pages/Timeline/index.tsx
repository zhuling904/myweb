
import { TIMELINES } from './constants';
import style from './style/index.module.less';
import { Timeline } from 'antd';
const TimeLine = () => {
    return <>
        <div className={style.container}>
            <Timeline
                mode='left'
                items={TIMELINES}
            />
        </div>
    </>
}

export default TimeLine;