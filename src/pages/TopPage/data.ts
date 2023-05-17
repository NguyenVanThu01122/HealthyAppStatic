import iconKnife from "images/icon-knife.svg";
import iconCup from "images/icon-cup.svg";
import m01 from "images/m01.jpg";
import l03 from "images/l03.jpg";
import l02 from "images/l02.jpg";
import l01 from "images/l01.jpg";
import d01 from "images/d01.jpg";
import d02 from "images/d02.jpg";
import s01 from "images/s01.jpg";

export const dataGraphTopPage: DataGraph = {
  labels: [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [850, 750, 600, 560, 400, 390, 300, 280, 230, 150, 100, 50],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
    {
      label: "Dataset 2",
      data: [850, 800, 550, 620, 550, 450, 550, 450, 400, 300, 250, 300],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
  ],
};

export const hexGroup: HexCard[] = [
  {
    id: 1,
    text: "Morning",
    icon: iconKnife,
  },
  {
    id: 2,
    text: "Lunch",
    icon: iconKnife,
  },
  {
    id: 3,
    text: "Dinner",
    icon: iconKnife,
  },
  {
    id: 4,
    text: "Snack",
    icon: iconCup,
  },
];

export const mealHistory: MealItem[] = [
  {
    id: 1,
    date: "2022-05-21T14:58:52.189Z",
    history: [
      {
        id: 100,
        session: "Morning",
        image: s01,
      },
      {
        id: 101,
        session: "Lunch",
        image: l03,
      },
      {
        id: 102,
        session: "Dinner",
        image: d01,
      },
      {
        id: 103,
        session: "Snack",
        image: l01,
      },
    ],
  },
  {
    id: 2,
    date: "2022-05-20T14:58:52.189Z",
    history: [
      {
        id: 104,
        session: "Morning",
        image: m01,
      },
      {
        id: 105,
        session: "Lunch",
        image: l02,
      },
      {
        id: 106,
        session: "Dinner",
        image: d02,
      },
      {
        id: 107,
        session: "Snack",
        image: s01,
      },
    ],
  },
];
