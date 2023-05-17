import moment from "moment";
import styles from "./index.module.css";
import { shortenText } from "helpers";

export default function Diary({ diary }: { diary: DiaryItem }) {
    return (
        <div className={styles.diary}>
            <div className={styles.content}>
                <div className={styles.time}>
                    <div>{moment(diary.date).format("YYYY.MM.DD")}</div>
                    <div>{moment(diary.date).format("HH:mm")}</div>
                </div>
                <div className={styles.title}>
                    私の日記の記録が一部表示されます。
                </div>
                <div className={styles.text}>
                    {shortenText(diary.text)}
                </div>
            </div>
        </div>
    )
}
