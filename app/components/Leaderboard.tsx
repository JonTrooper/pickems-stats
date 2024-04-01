import {
  RiCrosshair2Fill,
  RiMedalFill,
  RiShieldCheckFill,
  RiSwordFill,
  RiTrophyFill,
} from "@remixicon/react";
import { Badge, Card } from "@tremor/react";

export default function Leaderboard({ data }: { data: any[] }) {
  return (
    <div className="max-w-md m-auto">
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-1">
          <img
            src="img/avatars/jontrooper.png"
            width={34}
            className="mr-0.5 rounded-full"
          />
          <p className="text-jontrooper font-medium px-1">JonTrooper</p>
          {/* <Badge
            color={"orange-400"}
            icon={RiFireFill}
            tooltip="7 Pick Winstreak!"
            className="mr-auto ml-1"
            size={"xs"}
          >
            On Fire!
          </Badge> */}
          <Badge
            color={"rose-500"}
            icon={RiSwordFill}
            tooltip="Picked FaZe to win Team Spirit in the Quarterfinals"
            size={"xs"}
          >
            Clutch
          </Badge>
          <Badge
            color={"amber-200"}
            icon={RiCrosshair2Fill}
            tooltip="Champions Stage"
            size={"xs"}
          >
            7-0
          </Badge>
        </div>
        <div className="flex items-center space-x-1">
          <div className="mr-2 flex items-center">
            <img src="img/awards/1st.png" width={33} />
            <Badge
              color={"yellow-300"}
              icon={RiTrophyFill}
              tooltip="CS2: Copenhagen Major 2024 Pick'Ems Winner"
              className="ml-1 pl-3"
              size={"xs"}
            >
              1st
            </Badge>
          </div>
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-500"}
            size={"md"}
          >
            {data[data.length - 1].jontrooper}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-1">
          <img
            src="img/avatars/lils.png"
            width={34}
            className="mr-0.5 rounded-full"
          />
          <p className="text-lils font-medium px-1">Lils</p>
          <Badge
            color={"sky-500"}
            icon={RiSwordFill}
            tooltip="Picked Cloud9 to win G2 on Day 1"
            className="ml-2"
            size={"xs"}
          >
            Clutch
          </Badge>
          <Badge
            color={"amber-200"}
            icon={RiCrosshair2Fill}
            tooltip="Day 6-7"
            className="ml-2"
            size={"xs"}
          >
            3-0
          </Badge>
          <Badge
            color={"green-400"}
            icon={RiShieldCheckFill}
            tooltip="Full bonus points on Day 7"
            className="ml-2"
            size={"xs"}
          >
            Bonus
          </Badge>
        </div>
        <div className="flex items-center space-x-1">
          <div className="mr-2 flex items-center">
            <img src="img/awards/2nd.png" width={33} />
            <Badge
              color={"neutral-300"}
              icon={RiMedalFill}
              tooltip="CS2: Copenhagen Major Pick'Ems 2024 2nd Place"
              className="ml-1"
              size={"xs"}
            >
              2nd
            </Badge>
          </div>
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-400"}
            size={"md"}
          >
            {data[data.length - 1].lils}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all my-1.5">
        <div className="flex items-center space-x-1">
          <img
            src="img/avatars/tttslr.png"
            width={34}
            className="mr-0.5 rounded-full"
          />
          <p className="font-medium text-neutral-100 px-1">tttslr</p>
          <Badge
            color={"green-400"}
            icon={RiShieldCheckFill}
            tooltip="Full bonus points on Day 7"
            className="ml-2"
            size={"xs"}
          >
            Bonus
          </Badge>
        </div>
        <div className="flex items-center space-x-1">
          <div className="mr-2 flex items-center">
            <img src="img/awards/3rd.png" width={33} />
            <Badge
              color={"yellow-600"}
              icon={RiMedalFill}
              tooltip="CS2: Copenhagen Major Pick'Ems 2024 3rd Place"
              className="ml-1.5"
              size={"xs"}
            >
              3rd
            </Badge>
          </div>
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-400"}
            size={"md"}
          >
            {data[data.length - 1].tttslr}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-1">
          <img
            src="img/avatars/b0sskit.png"
            width={34}
            className="mr-0.5 rounded-full"
          />
          <p className="text-b0sskit font-medium px-1">B0sskit</p>
          <Badge
            color={"amber-200"}
            icon={RiCrosshair2Fill}
            tooltip="Day 3"
            className="ml-2"
            size={"xs"}
          >
            3-0
          </Badge>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-red-400">
            {/* <RiArrowUpSLine /> */}
            {/* <RiArrowDownSLine /> */}
          </div>
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-300"}
            size={"md"}
          >
            {data[data.length - 1].b0sskit}
          </Badge>
        </div>
      </Card>

      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-1">
          <img
            src="img/avatars/rabbit.png"
            width={34}
            className="mr-0.5 rounded-full"
          />
          <p className="font-medium text-rabbit px-1">rabbit</p>
        </div>
        <div className="flex items-center space-x-1">
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-300"}
            size={"md"}
          >
            {data[data.length - 1].rabbit}
          </Badge>
        </div>
      </Card>
      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-1">
          <img
            src="img/avatars/bill.png"
            width={34}
            className="mr-0.5 rounded-full"
          />
          <p className="text-bill font-medium px-1">Bill</p>
        </div>
        <div className="flex items-center space-x-1">
          <Badge
            className="py-1 font-mono font-bold"
            color={"emerald-200"}
            size={"md"}
          >
            {data[data.length - 1].bill}
          </Badge>
        </div>
      </Card>

      <Card className="mx-auto flex items-center justify-between px-1 py-1 my-1.5 dark:bg-neutral-950 hover:dark:bg-[#0e0e0e] transition-all">
        <div className="flex items-center space-x-1">
          <img
            src="img/avatars/ujei.png"
            width={34}
            className="mr-0.5 rounded-full"
          />
          <p className="text-ujei font-medium px-1">ujei</p>
        </div>
        <div className="flex items-center space-x-1">
          <Badge
            className="font-mono font-bold py-1"
            color={"emerald-100"}
            size={"md"}
          >
            {data[data.length - 1].ujei}
          </Badge>
        </div>
      </Card>
    </div>
  );
}
