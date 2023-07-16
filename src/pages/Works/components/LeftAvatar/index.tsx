import style from './style/index.module.less';
const LeftAvatar = () => {
    return <div className={style.container}>
        <div className={style.img}>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F23%2F20190923182908_zdEcW.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1692094937&t=a1a1f7f1f9e5d69c647a1423610f38ce" alt="" />
        </div>
        <div className={style.name}>
            朱领
        </div>
    </div>
}

export default LeftAvatar;