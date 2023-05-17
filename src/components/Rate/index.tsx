import { useEffect, useState } from "react";
import moment from "moment";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import styles from "./index.module.css";
import "react-circular-progressbar/dist/styles.css";
import { PERCENT_DEFAULT, TIME_TODAY_DEFAULT } from "constants/index";

export default function Rate() {
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        if (percent < PERCENT_DEFAULT) {
            setTimeout(() => {
                setPercent(percent + 1);
            }, 5);
        }
    }, [percent]);

    return (
        <div className={styles.rate}>
            <CircularProgressbarWithChildren
                value={percent}
                strokeWidth={2}
                styles={{
                    path: {
                        stroke: "rgba(255, 255, 255)",
                    },
                    trail: {
                        stroke: "transparent",
                    },
                }}
            >
                <div>
                    <span className={styles.date}>{moment(TIME_TODAY_DEFAULT).format("MM/DD")}</span>
                    <span className={styles.percent}>{percent}%</span>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    )
}
