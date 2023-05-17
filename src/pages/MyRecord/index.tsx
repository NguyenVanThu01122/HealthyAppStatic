import { useEffect } from "react";
import moment from "moment";
import styles from "./index.module.css";
import { cardGroup, dataGraphMyRecord, listDiaries, listExercises } from "./data";
import { TIME_TODAY_DEFAULT } from "constants/index";
import Record from "components/Record";
import Exercise from "components/Exercise";
import Diary from "components/Diary";
import ShowMoreButton from "components/ShowMoreButton";
import Graph from "components/Graph";

export default function MyRecord() {
  useEffect(() => {
    document.title = "My record"
  }, []);

  return (
    <div className={styles.myRecord}>
      {/* Button to move to each entry screen */}
      <div className={styles.groupCard}>
        {cardGroup.map((record: RecordItem) => <Record record={record} key={record.id} />)}
      </div>
      {/* Body fat percentage graph */}
      <div className={styles.myExercise}>
        <div className={styles.titleExercise}>
          <div>
            <div>BODY</div>
            <div>RECORD</div>
          </div>
          <div>
            {moment(TIME_TODAY_DEFAULT).format("YYYY.MM.DD")}
          </div>
        </div>
        <div className={styles.graph}>
          <Graph data={dataGraphMyRecord} />
        </div>
        <div className={styles.groupButton}>
          <div>
            日
          </div>
          <div>
            週
          </div>
          <div>
            月
          </div>
          <div>
            年
          </div>
        </div>
      </div>
      {/* Exercise record */}
      <div className={styles.myExercise}>
        <div className={styles.titleExercise}>
          <div>
            <div>MY</div>
            <div>EXERCISE</div>
          </div>
          <div>
            {moment(TIME_TODAY_DEFAULT).format("YYYY.MM.DD")}
          </div>
        </div>
        <div className={styles.listExercise}>
          {listExercises.map((exercise: ExerciseItem) => <Exercise exercise={exercise} key={exercise.id} />)}
        </div>
      </div>
      {/* Diary */}
      <div className={styles.myDiary}>
        <div className={styles.titleDiary}>MY DIARY</div>
        <div className={styles.listDiary}>
          {listDiaries.map((diary: DiaryItem) => <Diary diary={diary} key={diary.id} />)}
        </div>
      </div>
      {/* Button show more */}
      <div className={styles.showMoreButton}>
        <ShowMoreButton text="自分の日記をもっと見る" callback={() => { }} />
      </div>
    </div>
  )
}
