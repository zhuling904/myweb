
import style from './style/index.module.less';
import { TABS_CONFIG } from './constants';
import { Card } from 'antd';
const { Meta } = Card;
const Works = () => {
    return <>
        <div className={style.container}>
            {
                TABS_CONFIG.map(item => {
                    return <div className={style.tabItem}>
                        <Card
                            style={{ width: 200}}
                            cover={
                                <img
                                    alt="example"
                                    src="https://img0.baidu.com/it/u=2586026036,482906847&fm=253&fmt=auto&app=138&f=JPEG?w=1003&h=500"
                                />
                            }
                            bordered={ false }
                            hoverable={ true }
                            bodyStyle={{background: 'rgb(216, 197, 182)'}}
                        >
                            <Meta
                                title={item.title}
                                description="This is the description"
                            />

                        </Card>
                    </div>
                })
            }
        </div>
    </>
}

export default Works;