import { Card, Divider } from "@tremor/react";
import Header from "~/components/Header";

const score = [
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
];

const teamData = [
  {
    name: "MOUZ",
    value: 6,
    icon: function Icon() {
      return <img src="img/mouz.png" width={19} alt="" className="mr-2" />;
    },
    color: "red-600",
  },
  {
    name: "G2",
    value: 6,
    icon: function Icon() {
      return <img src="img/g2.png" width={21} alt="" className="mr-1" />;
    },
    color: "red-500",
  },
  {
    name: "Vitality",
    value: 6,
    icon: function Icon() {
      return <img src="img/vitality.png" width={20} alt="" className="mr-1" />;
    },
    color: "yellow-300",
  },
  {
    name: "FaZe",
    value: 5,
    icon: function Icon() {
      return <img src="img/faze.png" width={31} alt="" className="mr-1" />;
    },
    color: "red-800",
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
    name: "Heroic",
    value: 4,
    icon: function Icon() {
      return <img src="img/heroic.png" width={26} alt="" className="mr-1" />;
    },
    color: "slate-600",
  },
  {
    name: "NAVI",
    value: 3,
    icon: function Icon() {
      return <img src="img/navi.png" width={26} alt="" className="mr-1" />;
    },
    color: "yellow-400",
  },
  {
    name: "VP",
    value: 3,
    icon: function Icon() {
      return <img src="img/vp.png" width={21} alt="" className="mr-1" />;
    },
    color: "orange-500",
  },
  {
    name: "Complexity",
    value: 2,
    icon: function Icon() {
      return <img src="img/comp.png" width={24} alt="" className="mr-1" />;
    },
    color: "blue-300",
  },
  {
    name: "EF",
    value: 2,
    icon: function Icon() {
      return <img src="img/eternal.png" width={38} alt="" className="mr-1" />;
    },
    color: "orange-100",
  },
  {
    name: "Paingaming",
    value: 2,
    icon: function Icon() {
      return <img src="img/pain.png" width={31} alt="" className="mr-1" />;
    },
    color: "pink-500",
  },
  {
    name: "Esc",
    value: 2,
    icon: function Icon() {
      return <img src="img/esc.png" width={21} alt="" className="mr-1" />;
    },
    color: "orange-300",
  },
  {
    name: "C9",
    value: 1,
    icon: function Icon() {
      return <img src="img/c9.png" width={30} alt="" className="mr-1" />;
    },
    color: "blue-500",
  },
  {
    name: "Imperial",
    value: 1,
    icon: function Icon() {
      return <img src="img/imp.png" width={20} alt="" className="mr-1" />;
    },
    color: "green-500",
  },
];

export default function Day1() {
  return (
    <div className="max-w-2xl m-auto p-2">
      <Header data={score} day={"Day 1"} />
      <Divider>Day 1 Results</Divider>
      <div className="max-w-md m-auto">
        <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
          <div className="flex items-center space-x-2.5">
            <img
              src="img/avatars/tttslr.png"
              width={34}
              className="mr-1 rounded-full"
            />
            <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              tttslr
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="img/x32/mouz.png"
              width={32}
              className="bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/navi.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/g2.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/heroic.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/faze.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/vit.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/pain.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/furia.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
          </div>
        </Card>
        <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all my-1.5">
          <div className="flex items-center space-x-2.5">
            <img
              src="img/avatars/bill.png"
              width={34}
              className="mr-1 rounded-full"
            />
            <p className="text-bill font-medium">Bill</p>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="img/x32/mouz.png"
              width={32}
              className="bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/ts.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/g2.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/heroic.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/faze.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/vit.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/pain.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/furia.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
          </div>
        </Card>
        <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all my-1.5">
          <div className="flex items-center space-x-2.5">
            <img
              src="img/avatars/rabbit.png"
              width={34}
              className="mr-1 rounded-full"
            />
            <p className="text-rabbit font-medium">rabbit</p>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="img/x32/mouz.png"
              width={32}
              className="bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/navi.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/g2.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/vp.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/faze.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/vit.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/mongolz.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/furia.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
          </div>
        </Card>
        <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all my-1.5">
          <div className="flex items-center space-x-2.5">
            <img
              src="img/avatars/b0sskit.png"
              width={34}
              className="mr-1 rounded-full"
            />
            <p className="text-b0sskit font-medium">B0sskit</p>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="img/x32/mouz.png"
              width={32}
              className="bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/navi.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/g2.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/heroic.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/faze.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/vit.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/mongolz.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/furia.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
          </div>
        </Card>
        <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all my-1.5">
          <div className="flex items-center space-x-2.5">
            <img
              src="img/avatars/ujei.png"
              width={34}
              className="mr-1 rounded-full"
            />
            <p className="text-ujei font-medium">ujei</p>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="img/x32/mouz.png"
              width={32}
              className="bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/navi.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/g2.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/vp.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/faze.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/vit.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/mongolz.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/furia.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
          </div>
        </Card>
        <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all my-1.5">
          <div className="flex items-center space-x-2.5">
            <img
              src="img/avatars/lils.png"
              width={34}
              className="mr-1 rounded-full"
            />
            <p className="text-lils font-medium">Lils</p>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="img/x32/comp.png"
              width={32}
              className="bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/ts.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/c9.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/vp.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/et.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/imp.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/mongolz.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/esc.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
          </div>
        </Card>
        <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
          <div className="flex items-center space-x-2.5">
            <img
              src="img/avatars/jontrooper.png"
              width={34}
              className="mr-1 rounded-full"
            />
            <p className="text-jontrooper font-medium">JonTrooper</p>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="img/x32/comp.png"
              width={32}
              className="bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/ts.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/g2.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/heroic.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/et.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/vit.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
            <img
              src="img/x32/mongolz.png"
              width={32}
              className="mr-2 bg-red-900 p-1 rounded-md border border-red-700"
            />
            <img
              src="img/x32/esc.png"
              width={32}
              className="mr-2 bg-green-900 p-1 rounded-md border border-green-700"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
