import styles from "./index.module.css";

export default function Record({ record }: { record: RecordItem }) {
    return (
        <div className={styles.record}>
            <div className={styles.content}>
                <img src={record.image} alt="" />
                <div className={styles.groupText}>
                    <div className={styles.title}>{record.title}</div>
                    <div className={styles.description}>{record.description}</div>
                </div>
            </div>
        </div>
    )
}
