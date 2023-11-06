import style from "./style/index.module.less";
interface LeftAvatarProps {
  avatarName: string;
  avatarImg: string;
}
// 左侧头像和作者名
const LeftAvatar = (props: LeftAvatarProps) => {
  const { avatarName, avatarImg } = props;
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={avatarImg} alt="" />
      </div>
      <div className={style.name}>{avatarName}</div>
    </div>
  );
};

export default LeftAvatar;
