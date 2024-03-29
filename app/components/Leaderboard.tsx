import {
  RiArrowDownDoubleLine,
  RiArrowDownFill,
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowUpCircleLine,
  RiArrowUpDoubleLine,
  RiArrowUpFill,
  RiArrowUpSLine,
  RiCrosshair2Fill,
  RiFireFill,
  RiVipCrownFill,
} from "@remixicon/react";
import { Badge, BadgeDelta, Card, SparkAreaChart } from "@tremor/react";

export default function Leaderboard({ data }: { data: any[] }) {
  const totalMatches = data.length - 1;
  return (
    <div className="max-w-md m-auto">
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
          tooltip="6 Pick Winstreak!"
          className="mr-auto ml-1"
          size={"xs"}
        >
          On Fire!
        </Badge>
        <div className="flex items-center space-x-1">
          <div className="text-emerald-400">
            <RiArrowUpSLine />
          </div>
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-500"}
            size={"md"}
          >
            {data[data.length - 1].b0sskit * 0.1}
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
          <Badge
            color={"yellow-300"}
            icon={RiCrosshair2Fill}
            tooltip="Picked FaZe to win Team Spirit in the Quarterfinals"
            className="ml-2"
            size={"xs"}
          >
            Clutch
          </Badge>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-emerald-400">
            <RiArrowUpDoubleLine />
          </div>
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-500"}
            size={"md"}
          >
            {data[data.length - 1].jontrooper * 0.1}
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
          <div className="text-red-400">
            <RiArrowDownSLine />
          </div>
          <Badge
            className="py-1 font-mono font-bold"
            color={"emerald-400"}
            size={"md"}
          >
            {data[data.length - 1].bill * 0.1}
          </Badge>
        </div>
      </Card>
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
          <div className="text-red-400">
            <RiArrowDownDoubleLine />
          </div>
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-300"}
            size={"md"}
          >
            {data[data.length - 1].tttslr * 0.1}
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
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-200"}
            size={"md"}
          >
            {data[data.length - 1].rabbit * 0.1}
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
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-200"}
            size={"md"}
          >
            {data[data.length - 1].ujei * 0.1}
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
          <Badge
            color={"blue-500"}
            icon={RiCrosshair2Fill}
            tooltip="Picked Cloud9 to win G2 on Day 1"
            className="ml-2"
            size={"xs"}
          >
            Clutch
          </Badge>
        </div>
        <div className="flex items-center space-x-1">
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-100"}
            size={"md"}
          >
            {data[data.length - 1].lils * 0.1}
          </Badge>
        </div>
      </Card>
    </div>
  );
}
