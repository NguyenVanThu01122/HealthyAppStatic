import moment from "moment";
import styles from "./index.module.css";

export default function ColumnCard({ column }: { column: ColumnItem }) {
    return (
        <div className={styles.columnCard}>
            <div className={styles.image}>
                <div className={styles.contentImage}>
                    <img src={column.image} alt="columnImage" />
                    <div className={styles.date}>
                        <span>{moment(column.date).format("YYYY.MM.DD")}</span>
                        <span>{moment(column.date).format("HH:mm")}</span>
                    </div>
                </div>
            </div>
            <div className={styles.text}>{column.text}</div>
            <div className={styles.label}>{column.label}</div>
        </div>
    )
}