
import style from './style/index.module.less';
import { Timeline } from 'antd';
const TimeLine = () => {
    return <>
        <div className={style.container}>
            <Timeline
                mode='left'
                items={[
                    {
                        label: '2015-09-01',
                        color: 'gray',
                        children: 'Create a services site 2015-09-01',
                    },
                    {
                        label: '2015-09-01',
                        color: 'gray',
                        children: 'Create a services site 2015-09-01',
                    },
                    {
                        label: '2015-09-01',
                        color: 'gray',
                        children: (
                            <>
                                <p>Solve initial network problems 1</p>
                                <p>Solve initial network problems 2</p>
                                <p>Solve initial network problems 3 2015-09-01</p>
                            </>
                        ),
                    },
                    {
                        label: '2015-09-01',
                        color: 'gray',
                        children: (
                            <>
                                <p>Technical testing 1</p>
                                <p>Technical testing 2</p>
                                <p>Technical testing 3 2015-09-01</p>
                            </>
                        ),
                    },
                    {
                        label: '2015-09-01',
                        color: 'gray',
                        children: (
                            <>
                                <p>Technical testing 1</p>
                                <p>Technical testing 2</p>
                                <p>Technical testing 3 2015-09-01</p>
                            </>
                        ),
                    },
                    {
                        label: '2015-09-01',
                        color: 'gray',
                        children: (
                            <>
                                <p>Technical testing 1</p>
                                <p>Technical testing 2</p>
                                <p>Technical testing 3 2015-09-01</p>
                            </>
                        ),
                    },
                    {
                        label: '2015-09-01',
                        color: 'gray',
                        children: <p>Custom color testing</p>,
                    },
                ]}
            />
        </div>
    </>
}

export default TimeLine;