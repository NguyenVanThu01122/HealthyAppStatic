import styles from "./index.module.css";
import arrowUp from "images/arrow-up.svg";

export default function ScrollButton() {
    return (
        <div
            className={styles.scroll}
            onClick={() => window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })}
        >
            <img src={arrowUp} alt="arrowUp" />
        </ div >
    )
}
