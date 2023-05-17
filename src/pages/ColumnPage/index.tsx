import ColumnCard from "components/ColumnCard";
import { useEffect } from "react";
import styles from "./index.module.css";
import { listColumns, listRecommends } from "./data";
import RecommendCard from "components/RecommendCard";
import ShowMoreButton from "components/ShowMoreButton";

export default function ColumnPage() {
  useEffect(() => {
    document.title = "Column page"
  }, []);

  return (
    <div className={styles.columnPage}>
      {/* List recommends */}
      <div className={styles.listRecommends}>
        {listRecommends.map((recommend: RecommendItem) => <RecommendCard recommend={recommend} key={recommend.id} />)}
      </div>
      {/* List card */}
      <div className={styles.listCards}>
        {listColumns.map((column: ColumnItem) => <ColumnCard column={column} key={column.id} />)}
      </div>
      {/* Button show more */}
      <div className={styles.showMoreButton}>
        <ShowMoreButton text="コラムをもっと見る" callback={() => { }} />
      </div>
    </div>
  )
}
