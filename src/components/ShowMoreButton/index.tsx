import styles from "./index.module.css";

export default function ShowMoreButton({ text, callback }: ShowMoreButton) {
    return (
        <div onClick={() => callback()} className={styles.showMoreButton}>{text}</div>
    )
}
