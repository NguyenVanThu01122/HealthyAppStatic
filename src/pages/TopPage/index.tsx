import { useEffect } from "react";
import styles from "./index.module.css";
import { dataGraphTopPage, hexGroup, mealHistory } from "./data";
import d01 from 'images/d01.jpg';
import Rate from "components/Rate";
import Hex from "components/Hex";
import Meal from "components/Meal";
import ShowMoreButton from "components/ShowMoreButton";
import Graph from "components/Graph";

export default function TopPage() {
  useEffect(() => {
    document.title = "Top page"
  }, []);

  return (
    <div>
      <div className={styles.banner}>
        {/* Date - Achievement rate */}
        <div className={styles.rate}>
          <div className={styles.rateContent}>
            <img src={d01} alt="" />
            <div className={styles.rateChild}>
              <Rate />
            </div>
          </div>
        </div>
        {/* Body weight - Body fat percentage graph */}
        <div className={styles.graph}>
          <Graph data={dataGraphTopPage} />
        </div>
      </div>
      {/* Button to transit to input */}
      <div className={styles.hexGroup}>
        {hexGroup.map((hex: HexCard) => <Hex hex={hex} key={hex.id} />)}
      </div>
      {/* Meal history */}
      <div className={styles.rowHistory}>
        {mealHistory.map(item => item.history.map((meal: MealDetail) => <Meal meal={meal} date={item.date} key={meal.id} />))}
      </div>
      {/* Button show more */}
      <div className={styles.showMoreButton}>
        <ShowMoreButton text="記録をもっと見る" callback={() => { }} />
      </div>
    </div>
  )
}
