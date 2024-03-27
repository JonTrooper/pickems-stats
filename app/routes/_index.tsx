import { BarChart, BarList, Divider } from "@tremor/react";
import Leaderboard from "~/components/Leaderboard";
import Navbar from "~/components/Navbar";
import Teams from "~/components/Teams";
import TestBars from "~/components/TestBars";

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

export default function Index() {
  return (
    <div className="max-w-2xl m-auto p-2">
      <Navbar data={scoreTotal} day={"total"} />
      <Divider>Leaderboard</Divider>
      <Leaderboard data={scoreTotal} />
      <Divider>Cumulative Score by Day</Divider>
      <BarChart
        className="pr-6 opacity-90"
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
        showLegend={false}
      />
      <Divider>Teams</Divider>
      <TestBars />
    </div>
  );
}
