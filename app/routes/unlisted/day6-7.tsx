import { Card, Divider } from "@tremor/react";
import Header from "~/components/Header";

const scoreFive = [
  {
    name: "Start",
    tttslr: 170,
    bill: 180,
    rabbit: 180,
    b0sskit: 240,
    ujei: 160,
    lils: 150,
    jontrooper: 230,
  },
  {
    name: "Match 1",
    tttslr: 170,
    bill: 230,
    rabbit: 180,
    b0sskit: 240,
    ujei: 160,
    lils: 200,
    jontrooper: 280,
  },
  {
    name: "Match 2",
    tttslr: 220,
    bill: 230,
    rabbit: 180,
    b0sskit: 240,
    ujei: 160,
    lils: 240,
    jontrooper: 330,
  },
];

export default function Day4_5() {
  return (
    <div className="max-w-2xl m-auto p-2">
      <Header data={scoreFive} day={"Day 6-7"} />
      <Divider>Day 6-7 Results</Divider>
      <div className="m-auto max-w-md">
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
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/vit.png" width={22} />
              <p className="text-red-300">2-1</p>
            </div>
            <div className="bg-green-900 p-1 rounded-md border border-green-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/navi.png" width={22} />
              <p className="text-green-300">2-1</p>
            </div>
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
            <div className="bg-green-900 p-1 rounded-md border border-green-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/faze.png" width={22} />
              <p className="text-green-300">2-1</p>
            </div>
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/g2.png" width={22} />
              <p className="text-red-300">2-0</p>
            </div>
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
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/vit.png" width={22} />
              <p className="text-red-300">2-1</p>
            </div>
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/g2.png" width={22} />
              <p className="text-red-300">2-1</p>
            </div>
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
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/vit.png" width={22} />
              <p className="text-red-300">2-1</p>
            </div>
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/g2.png" width={22} />
              <p className="text-red-300">2-0</p>
            </div>
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
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/vit.png" width={22} />
              <p className="text-red-300">2-0</p>
            </div>
            <div className="bg-red-900 p-1 rounded-md border border-red-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/g2.png" width={22} />
              <p className="text-red-300">2-1</p>
            </div>
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
            <div className="bg-green-900 p-1 rounded-md border border-green-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/faze.png" width={22} />
              <p className="text-green-300">2-1</p>
            </div>
            <div className="bg-green-900 p-1 rounded-md border border-green-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/navi.png" width={22} />
              <p className="text-red-300">2-0</p>
            </div>
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
            <div className="bg-green-900 p-1 rounded-md border border-green-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/faze.png" width={22} />
              <p className="text-green-300">2-1</p>
            </div>
            <div className="bg-green-900 p-1 rounded-md border border-green-700 flex items-center gap-1.5 w-16">
              <img src="img/x32/navi.png" width={22} />
              <p className="text-green-300">2-1</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
