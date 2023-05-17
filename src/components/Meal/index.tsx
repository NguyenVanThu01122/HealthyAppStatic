import moment from "moment";
import styles from "./index.module.css";

export default function Meal({ meal, date }: { meal: MealDetail, date: string }) {
    return (
        <div className={styles.meal} key={meal.id}>
            <img src={meal.image} alt="imageHistory" />
            <div>
                {`${moment(date).format("MM.DD")}.${meal.session}`}
            </div>
        </div>
    )
}
