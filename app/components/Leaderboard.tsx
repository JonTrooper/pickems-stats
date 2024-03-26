import { RiCrosshair2Fill, RiFireFill, RiVipCrownFill } from "@remixicon/react";
import { Badge, BadgeDelta, Card, SparkAreaChart } from "@tremor/react";

export default function Leaderboard({ data }: { data: any[] }) {
  const totalMatches = data.length - 1;
  return (
    <div className="max-w-lg m-auto rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:bg-[#141414] p-1.5 border-neutral-800 border-t border-x border-b border-b-[#1b1b1b]">
      <Card className="mx-auto flex items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/tttslr.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="font-medium text-neutral-100">tttslr</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-xs mr-2 text-emerald-400 opacity-50 hover:opacity-100 transition-all">
            {(9 / totalMatches).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </div>
          <Badge className="font-medium py-1" color={"emerald-500"} size={"md"}>
            {data[data.length - 1].tttslr * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/b0sskit.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.orange.500),theme(colors.orange.200),theme(colors.amber.400),theme(colors.orange.500))] bg-[length:200%_auto] animate-gradient">
            B0sskit
          </p>
        </div>
        <Badge
          color={"amber-200"}
          icon={RiCrosshair2Fill}
          tooltip="Day 3"
          className="ml-2"
          size={"xs"}
        >
          3-0
        </Badge>
        <Badge
          color={"orange-400"}
          icon={RiFireFill}
          tooltip="5 Pick Winstreak!"
          className="mr-auto ml-1"
          size={"xs"}
        >
          On Fire!
        </Badge>
        <div className="flex items-center space-x-1">
          <div className="text-xs mr-2 text-emerald-400 opacity-50 hover:opacity-100 transition-all">
            {(9 / totalMatches).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </div>
          <Badge className="font-medium py-1" color={"emerald-500"} size={"md"}>
            {data[data.length - 1].b0sskit * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/rabbit.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="font-medium text-rabbit">rabbit</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-xs mr-2 text-emerald-300 opacity-50 hover:opacity-100 transition-all">
            {(8 / totalMatches).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </div>
          <Badge className="font-medium py-1" color={"emerald-300"} size={"md"}>
            {data[data.length - 1].rabbit * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/bill.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-bill font-medium">Bill</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-xs mr-2 text-emerald-300 opacity-50 hover:opacity-100 transition-all">
            {(8 / totalMatches).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </div>
          <Badge className="font-medium py-1" color={"emerald-200"} size={"md"}>
            {data[data.length - 1].bill * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/ujei.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-ujei font-medium">ujei</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-xs mr-2 text-emerald-300 opacity-50 hover:opacity-100 transition-all">
            {(8 / totalMatches).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </div>
          <Badge className="font-medium py-1" color={"emerald-100"} size={"md"}>
            {data[data.length - 1].ujei * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/jontrooper.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-jontrooper font-medium">JonTrooper</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-xs mr-2 text-emerald-300 opacity-50 hover:opacity-100 transition-all">
            {(8 / totalMatches).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </div>
          <Badge className="font-medium py-1" color={"emerald-100"} size={"md"}>
            {data[data.length - 1].jontrooper * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/lils.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-lils font-medium">Lils</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-xs mr-2 text-emerald-200 opacity-50 hover:opacity-100 transition-all">
            {(7 / totalMatches).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </div>
          <Badge className="font-medium py-1" color={"emerald-50"} size={"md"}>
            {data[data.length - 1].lils * 0.1}
          </Badge>
        </div>
      </Card>
    </div>
  );
}
