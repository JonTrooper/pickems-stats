import { RiCrosshair2Fill, RiVipCrownFill } from "@remixicon/react";
import { Badge, BadgeDelta, Card, SparkAreaChart } from "@tremor/react";

export default function Leaderboard({ data }: { data: any[] }) {
  return (
    <div className="max-w-md m-auto">
      <Card className="mx-auto flex items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
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
        <div className="flex items-center space-x-2.5">
          <Badge className="font-medium" color={"emerald-500"} size={"lg"}>
            {data[data.length - 1].tttslr * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/b0sskit.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            B0sskit
          </p>
          <Badge
            color={"amber-200"}
            icon={RiCrosshair2Fill}
            tooltip="Day 3"
            className="ml-auto mr-4"
          >
            3-0
          </Badge>
        </div>
        <div className="flex items-center space-x-2.5">
          <Badge className="font-medium" color={"emerald-500"} size={"lg"}>
            {data[data.length - 1].b0sskit * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/rabbit.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            rabbit
          </p>
        </div>
        <div className="flex items-center space-x-2.5">
          <Badge className="font-medium" color={"emerald-300"} size={"lg"}>
            {data[data.length - 1].rabbit * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/bill.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            Bill
          </p>
        </div>
        <div className="flex items-center space-x-2.5">
          <Badge className="font-medium" color={"emerald-200"} size={"lg"}>
            {data[data.length - 1].bill * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/ujei.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            ujei
          </p>
        </div>
        <div className="flex items-center space-x-2.5">
          <Badge className="font-medium" color={"emerald-100"} size={"lg"}>
            {data[data.length - 1].ujei * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/jontrooper.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            JonTrooper
          </p>
        </div>
        <div className="flex items-center space-x-2.5">
          <Badge className="font-medium" color={"emerald-100"} size={"lg"}>
            {data[data.length - 1].jontrooper * 0.1}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <img
            src="img/avatars/lils.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            Lils
          </p>
        </div>
        <div className="flex items-center space-x-2.5">
          <Badge className="font-medium" color={"emerald-50"} size={"lg"}>
            {data[data.length - 1].lils * 0.1}
          </Badge>
        </div>
      </Card>
    </div>
  );
}
