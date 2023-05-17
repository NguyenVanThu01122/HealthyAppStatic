import { useCallback, useState } from "react";
import styles from "./index.module.css";
import logo from "images/logo.svg";
import iconMemo from "images/icon-memo.svg";
import iconChallenge from "images/icon-challenge.svg";
import iconInfo from "images/icon-info.svg";
import iconMenu from "images/icon-menu.svg";
import iconClose from "images/icon-close.svg";
import { menu } from "./data";
import ScrollButton from "components/ScrollButton";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const pathName = window.location.pathname;

  const handleToggleShowMenu = useCallback(() => {
    setShowMenu(!showMenu)
  }, [showMenu]);

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} onClick={() => window.location.assign("/")} />
      <div className={styles.groupMenu}>
        <div className={styles.itemMenu} onClick={() => window.location.assign("/my-record")}>
          <img src={iconMemo} alt="itemMemo" />
          <span className={pathName === "/my-record" ? styles.itemMenuActive : ""}>自分の記録</span>
        </div>
        <div className={styles.itemMenu}>
          <img src={iconChallenge} alt="itemChallenge" />
          <span>チャレンジ</span>
        </div>
        <div className={styles.itemMenu}>
          <div className={styles.iconInfo}>
            <img src={iconInfo} alt="iconInfo" />
            <div className={styles.notification}>1</div>
          </div>
          <span>お知らせ</span>
        </div>
        <div className={styles.boxMenu}>
          <img
            src={showMenu ? iconClose : iconMenu}
            alt="menu"
            onMouseEnter={handleToggleShowMenu}
            onMouseLeave={handleToggleShowMenu}
          />
          {
            showMenu &&
            <div
              className={styles.menu}
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              {menu.map(item =>
                <div
                  className={pathName === item.url ? styles.itemMenuActive : ""}
                  key={item.id}
                  onClick={() => window.location.assign(item.url)}
                >
                  {item.text}
                </div>
              )}
            </div>
          }
        </div>
      </div>
      <ScrollButton />
    </div>
  )
}
