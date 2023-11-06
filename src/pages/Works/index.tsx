import { useEffect, useState } from "react";
import ContentTitle from "./components/ContentTitle";
import LeftAvatar from "./components/LeftAvatar";
import LeftTabMenu, { MenuType } from "./components/LeftTabMenu";
import TopButton from "./components/TopButton";
import style from "./style/index.module.less";
import WorkCard from "./components/WorkCard";
import { getWorks } from "../../api/works";
import { WORKITEM } from "./constants";
import { getWebInfo } from "../../api/webInfo";
import { WEBINFO } from "../../components/HomeContent/type";
const Works = () => {
  const [activeTab, setActiveTab] = useState<MenuType>("animation");
  const [workList, setWorkList] = useState<WORKITEM[]>([]);
  const [filterWorkList, setFilterWorkList] = useState<WORKITEM[]>([]);
  const [webInfo, setWebInfo] = useState<WEBINFO>();

  // 获取作品信息
  useEffect(() => {
    getWorks()
      .then((res) => {
        console.log("✅ ~ zhuling works res:", res.data);
        setWorkList(res.data);
        setFilterWorkList(
          res.data.filter((item: WORKITEM) => {
            return item.type === "animation";
          })
        );
      })
      .catch((err) => {
        console.error("✅ ~ zhuling works err:", err);
      });
  }, []);

  // 获取网站信息
  useEffect(() => {
    getWebInfo()
      .then((res) => {
        console.log("✅ ~ zhuling res webInfo:", res.data);
        setWebInfo(res.data);
      })
      .catch((err) => {
        console.error("✅ ~ zhuling err webInfo:", err);
      });
  }, []);

  if (!filterWorkList || !webInfo) return null;

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          {/* 左侧返回&折叠 */}
          <TopButton></TopButton>
          {/* 左侧头像作者名 */}
          <LeftAvatar
            avatarName={webInfo.author as string}
            avatarImg={webInfo.avatarImg as string}
          ></LeftAvatar>
          {/* 左侧菜单 */}
          <LeftTabMenu
            activeTab={activeTab}
            workList={workList}
            setActiveTab={setActiveTab}
            setFilterWorkList={setFilterWorkList}
          ></LeftTabMenu>
        </div>
        <div className={style.right}>
          <ContentTitle
            type={activeTab}
            workList={workList}
            setFilterWorkList={setFilterWorkList}
          ></ContentTitle>
          <div className={style.workContainer}>
            {filterWorkList.map((item) => {
              return (
                <>
                  <WorkCard
                    link={item.link}
                    desc={item.desc}
                    miniImg={item.avatarImg}
                    coverImg={item.coverImg}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
