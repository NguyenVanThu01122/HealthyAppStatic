import styles from "./index.module.css";

export default function Exercise({ exercise }: { exercise: ExerciseItem }) {
    return (
        <div className={styles.itemExercise}>
            <div className={styles.textsExercise}>
                <div className={styles.dot}></div>
                <div>
                    <div className={styles.contentExercise}>{exercise.content}</div>
                    <div className={styles.kcal}>{exercise.kcal}kcal</div>
                </div>
            </div>
            <div className={styles.timeExercise}>{exercise.time} min</div>
        </div>
    )
}
