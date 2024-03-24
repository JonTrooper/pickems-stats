import { BadgeDelta, Card, SparkAreaChart } from "@tremor/react";

export default function Leaderboard({ data }: { data: any[] }) {
  return (
    <div>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-1 my-2 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="text-tremor-content dark:text-dark-tremor-content w-0 pr-8">
            1
          </span>
          <img
            src="img/avatars/tttslr.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            tttslr
          </p>
        </div>
        <SparkAreaChart
          data={data}
          categories={["tttslr"]}
          index={"name"}
          colors={["neutral-50"]}
          className="pr-4 ml-auto h-8 w-20 sm:h-10 sm:w-36 opacity-50"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {data[data.length - 1].tttslr * 0.1}pts
          </span>
          <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true}>
            2
          </BadgeDelta>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-1 my-2 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="text-tremor-content dark:text-dark-tremor-content w-0 pr-8">
            2
          </span>
          <img
            src="img/avatars/bill.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            Bill
          </p>
        </div>
        <SparkAreaChart
          data={data}
          categories={["bill"]}
          index={"name"}
          colors={["#7d8174"]}
          className="pr-4 ml-auto h-8 w-20 sm:h-10 sm:w-36 opacity-50"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {data[data.length - 1].bill * 0.1}pts
          </span>
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}>
            0
          </BadgeDelta>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-1 my-2 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="text-tremor-content dark:text-dark-tremor-content w-0 pr-8">
            3
          </span>
          <img
            src="img/avatars/b0sskit.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            B0sskit
          </p>
        </div>
        <SparkAreaChart
          data={data}
          categories={["b0sskit"]}
          index={"name"}
          colors={["#e2be74"]}
          className="pr-4 ml-auto h-8 w-20 sm:h-10 sm:w-36 opacity-50"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {data[data.length - 1].b0sskit * 0.1}pts
          </span>
          <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true}>
            2
          </BadgeDelta>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-1 my-2 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="text-tremor-content dark:text-dark-tremor-content w-0 pr-8">
            4
          </span>
          <img
            src="img/avatars/rabbit.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            rabbit
          </p>
        </div>
        <SparkAreaChart
          data={data}
          categories={["rabbit"]}
          index={"name"}
          colors={["#2ecc71"]}
          className="pr-4 ml-auto h-8 w-20 sm:h-10 sm:w-36 opacity-50"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {data[data.length - 1].rabbit * 0.1}pts
          </span>
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}>
            0
          </BadgeDelta>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-1 my-2 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="text-tremor-content dark:text-dark-tremor-content w-0 pr-8">
            5
          </span>
          <img
            src="img/avatars/ujei.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            ujei
          </p>
        </div>
        <SparkAreaChart
          data={data}
          categories={["ujei"]}
          index={"name"}
          colors={["#9ed1e1"]}
          className="pr-4 ml-auto h-8 w-20 sm:h-10 sm:w-36 opacity-50"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {data[data.length - 1].ujei * 0.1}pts
          </span>
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}>
            0
          </BadgeDelta>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-1 my-2 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="text-tremor-content dark:text-dark-tremor-content w-0 pr-8">
            6
          </span>
          <img
            src="img/avatars/jontrooper.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            JonTrooper
          </p>
        </div>
        <SparkAreaChart
          data={data}
          categories={["jontrooper"]}
          index={"name"}
          colors={["#fee5b9"]}
          className="pr-4 ml-auto h-8 w-20 sm:h-10 sm:w-36 opacity-50"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {data[data.length - 1].jontrooper * 0.1}pts
          </span>
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}>
            0
          </BadgeDelta>
        </div>
      </Card>
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-1 my-2 dark:bg-neutral-950 hover:dark:bg-neutral-900 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="text-tremor-content dark:text-dark-tremor-content w-0 pr-8">
            7
          </span>
          <img
            src="img/avatars/lils.png"
            width={34}
            className="mr-1 rounded-full"
          />
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            Lils
          </p>
        </div>
        <SparkAreaChart
          data={data}
          categories={["lils"]}
          index={"name"}
          colors={["#8a7b64"]}
          className="pr-4 ml-auto h-8 w-20 sm:h-10 sm:w-36 opacity-50"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {data[data.length - 1].lils * 0.1}pts
          </span>
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}>
            0
          </BadgeDelta>
        </div>
      </Card>
    </div>
  );
}
