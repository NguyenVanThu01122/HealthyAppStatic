import styles from "./index.module.css";

export default function RecommendCard({ recommend }: { recommend: RecommendItem }) {
    return (
        <div className={styles.recommendCard}>
            <div className={styles.content}>
                <div className={styles.label}>
                    <div>RECOMMENDED</div>
                    <div>{recommend.label}</div>
                </div>
                <div className={styles.bar}></div>
                <div className={styles.title}>{recommend.title}</div>
            </div>
        </div>
    )
}
