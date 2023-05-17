declare module "*.module.css";
declare module "*.jpg";
declare module "*.svg";
declare module "faker";

declare interface ColumnItem {
  id: number;
  date: string;
  image: string;
  text: string;
  label: string;
}
declare interface RecommendItem {
  id: number;
  label: string;
  title: string;
}
declare interface DiaryItem {
  id: number;
  date: string;
  text: string;
}
declare interface ExerciseItem {
  id: number;
  content: string;
  kcal: number;
  time: number;
}
declare interface RecordItem {
  id: number;
  image: string;
  title: string;
  description: string;
}
declare interface MenuItem {
  id: number;
  text: string;
  url: string;
}
declare interface HexCard {
  id: number;
  text: string;
  icon: string;
}

declare interface MealDetail {
  id: number;
  session: string;
  image: string;
}
declare interface MealItem {
  id: number;
  date: string;
  history: {
    id: number;
    session: string;
    image: string;
  }[];
}
declare interface ShowMoreButton {
  text: string;
  callback: () => any;
}
declare interface DataGraph {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}
