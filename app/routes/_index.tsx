import { BarChart, BarList, Divider } from "@tremor/react";
import Leaderboard from "~/components/Leaderboard";
import Navbar from "~/components/Navbar";

const scoreTotal = [
  {
    name: "Start",
    tttslr: 0,
    bill: 0,
    rabbit: 0,
    b0sskit: 0,
    ujei: 0,
    lils: 0,
    jontrooper: 0,
  },
  {
    name: "Match 1",
    tttslr: 20,
    bill: 20,
    rabbit: 20,
    b0sskit: 20,
    ujei: 20,
    lils: 0,
    jontrooper: 0,
  },
  {
    name: "Match 2",
    tttslr: 20,
    bill: 40,
    rabbit: 40,
    b0sskit: 20,
    ujei: 20,
    lils: 20,
    jontrooper: 20,
  },
  {
    name: "Match 3",
    tttslr: 20,
    bill: 40,
    rabbit: 40,
    b0sskit: 20,
    ujei: 20,
    lils: 30,
    jontrooper: 20,
  },
  {
    name: "Match 4",
    tttslr: 20,
    bill: 40,
    rabbit: 50,
    b0sskit: 20,
    ujei: 30,
    lils: 40,
    jontrooper: 20,
  },
  {
    name: "Match 5",
    tttslr: 20,
    bill: 40,
    rabbit: 50,
    b0sskit: 20,
    ujei: 30,
    lils: 50,
    jontrooper: 30,
  },
  {
    name: "Match 6",
    tttslr: 30,
    bill: 50,
    rabbit: 60,
    b0sskit: 30,
    ujei: 40,
    lils: 50,
    jontrooper: 40,
  },
  {
    name: "Match 7",
    tttslr: 50,
    bill: 70,
    rabbit: 60,
    b0sskit: 30,
    ujei: 40,
    lils: 50,
    jontrooper: 40,
  },
  {
    name: "Match 8",
    tttslr: 50,
    bill: 70,
    rabbit: 60,
    b0sskit: 30,
    ujei: 40,
    lils: 70,
    jontrooper: 60,
  },
  {
    name: "Match 9",
    tttslr: 70,
    bill: 90,
    rabbit: 60,
    b0sskit: 30,
    ujei: 60,
    lils: 90,
    jontrooper: 80,
  },
  {
    name: "Match 10",
    tttslr: 90,
    bill: 110,
    rabbit: 60,
    b0sskit: 50,
    ujei: 80,
    lils: 90,
    jontrooper: 80,
  },
  {
    name: "Match 11",
    tttslr: 90,
    bill: 110,
    rabbit: 80,
    b0sskit: 70,
    ujei: 80,
    lils: 90,
    jontrooper: 100,
  },
  {
    name: "Match 12",
    tttslr: 110,
    bill: 110,
    rabbit: 100,
    b0sskit: 70,
    ujei: 80,
    lils: 90,
    jontrooper: 100,
  },
  {
    name: "Match 13",
    tttslr: 130,
    bill: 110,
    rabbit: 100,
    b0sskit: 90,
    ujei: 100,
    lils: 90,
    jontrooper: 120,
  },
  {
    name: "Match 14",
    tttslr: 130,
    bill: 130,
    rabbit: 120,
    b0sskit: 110,
    ujei: 120,
    lils: 90,
    jontrooper: 120,
  },
  {
    name: "Match 14",
    tttslr: 150,
    bill: 130,
    rabbit: 120,
    b0sskit: 130,
    ujei: 120,
    lils: 90,
    jontrooper: 120,
  },
  {
    name: "Match 15",
    tttslr: 170,
    bill: 150,
    rabbit: 140,
    b0sskit: 150,
    ujei: 140,
    lils: 110,
    jontrooper: 120,
  },
  {
    name: "Match 16",
    tttslr: 170,
    bill: 150,
    rabbit: 160,
    b0sskit: 170,
    ujei: 140,
    lils: 110,
    jontrooper: 140,
  },
];

const scoreByDay = [
  {
    name: "Day 1",
    tttslr: 5,
    Bill: 7,
    rabbit: 6,
    B0sskit: 3,
    ujei: 4,
    Lils: 7,
    JonTrooper: 6,
  },
  {
    name: "Day 2",
    tttslr: 13,
    Bill: 13,
    rabbit: 12,
    B0sskit: 11,
    ujei: 12,
    Lils: 9,
    JonTrooper: 12,
  },
  {
    name: "Day 3",
    tttslr: 17,
    Bill: 15,
    rabbit: 16,
    B0sskit: 17,
    ujei: 14,
    Lils: 11,
    JonTrooper: 14,
  },
];

const teamDataTotal = [
  {
    name: "G2",
    value: 6 + 4 + 6,
    icon: function Icon() {
      return <img src="img/g2.png" width={21} alt="" className="mr-1" />;
    },
    color: "red-500",
  },
  {
    name: "FaZe",
    value: 5 + 4 + 2,
    icon: function Icon() {
      return <img src="img/faze.png" width={31} alt="" className="mr-1" />;
    },
    color: "red-800",
  },
  {
    name: "Vitality",
    value: 6 + 4,
    icon: function Icon() {
      return <img src="img/vitality.png" width={20} alt="" className="mr-1" />;
    },
    color: "yellow-300",
  },
  {
    name: "NAVI",
    value: 3 + 4 + 3,
    icon: function Icon() {
      return <img src="img/navi.png" width={26} alt="" className="mr-1" />;
    },
    color: "yellow-400",
  },
  {
    name: "Complexity",
    value: 2 + 3 + 5,
    icon: function Icon() {
      return <img src="img/comp.png" width={24} alt="" className="mr-1" />;
    },
    color: "blue-300",
  },
  {
    name: "Heroic",
    value: 4 + 5,
    icon: function Icon() {
      return <img src="img/heroic.png" width={26} alt="" className="mr-1" />;
    },
    color: "slate-600",
  },
  {
    name: "Paingaming",
    value: 2 + 2 + 4,
    icon: function Icon() {
      return <img src="img/pain.png" width={31} alt="" className="mr-1" />;
    },
    color: "pink-500",
  },
  {
    name: "EF",
    value: 2 + 5,
    icon: function Icon() {
      return <img src="img/eternal.png" width={38} alt="" className="mr-1" />;
    },
    color: "orange-100",
  },
  {
    name: "VP",
    value: 3 + 2 + 1,
    icon: function Icon() {
      return <img src="img/vp.png" width={21} alt="" className="mr-1" />;
    },
    color: "orange-500",
  },
  {
    name: "MOUZ",
    value: 6,
    icon: function Icon() {
      return <img src="img/mouz.png" width={19} alt="" className="mr-2" />;
    },
    color: "red-600",
  },
  {
    name: "Mongolz",
    value: 5,
    icon: function Icon() {
      return <img src="img/mongolz.png" width={16} alt="" className="mr-1" />;
    },
    color: "stone-500",
  },
  {
    name: "Furia",
    value: 5,
    icon: function Icon() {
      return <img src="img/furia.png" width={21} alt="" className="mr-1" />;
    },
    color: "neutral-400",
  },
  {
    name: "Esc",
    value: 2 + 3,
    icon: function Icon() {
      return <img src="img/esc.png" width={21} alt="" className="mr-1" />;
    },
    color: "orange-300",
  },
  {
    name: "TeamSpirit",
    value: 4,
    icon: function Icon() {
      return (
        <img src="img/teamspirit.png" width={21} alt="" className="mr-1" />
      );
    },
    color: "slate-50",
  },
  {
    name: "C9",
    value: 1 + 3,
    icon: function Icon() {
      return <img src="img/c9.png" width={30} alt="" className="mr-1" />;
    },
    color: "blue-500",
  },
  {
    name: "Imperial",
    value: 1 + 3,
    icon: function Icon() {
      return <img src="img/imp.png" width={20} alt="" className="mr-1" />;
    },
    color: "green-500",
  },
];

export default function Index() {
  return (
    <div className="max-w-2xl m-auto p-2">
      <Navbar data={scoreTotal} day={"total"} />
      <Divider>Leaderboard</Divider>
      <Leaderboard data={scoreTotal} />
      <Divider>Cumulative Score by Day</Divider>
      <BarChart
        className="pr-6"
        data={scoreByDay}
        index="name"
        categories={[
          "tttslr",
          "Bill",
          "rabbit",
          "B0sskit",
          "ujei",
          "Lils",
          "JonTrooper",
        ]}
        colors={[
          "neutral-50",
          "#7d8174",
          "#2ecc71",
          "#e2be74",
          "#9ed1e1",
          "#8a7b64",
          "#fee5b9",
        ]}
        yAxisWidth={48}
        showAnimation={true}
      />

      <Divider>Total Team Picks</Divider>
      <BarList data={teamDataTotal} className="max-w-xl m-auto font-medium" />
    </div>
  );
}
