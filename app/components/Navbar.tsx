import { Link } from "@remix-run/react";
import {
  RiMedalFill,
  RiVerifiedBadgeFill,
  RiVerifiedBadgeLine,
} from "@remixicon/react";
import { Badge } from "@tremor/react";
import { Legend, Line, LineChart, ResponsiveContainer } from "recharts";

export default function Navbar({ data, day }: { data: any[]; day: string }) {
  return (
    <div className="pt-4">
      <Link to={"/"}>
        <h1 className="m-auto w-max lg:text-4xl md:text-3xl sm:text-2xl drop-shadow-md">
          🏆 CS2 Copenhagen 2024 Pick'Em Stats 📊
        </h1>
      </Link>
      <h3 className="m-auto w-max font-medium drop-shadow-md opacity-65">
        Winner Takes All
      </h3>
      <div className="w-max m-auto mt-1 flex gap-1">
        <Link to={"/day1"}>
          <Badge
            icon={RiVerifiedBadgeFill}
            className={`${
              day === "Day 1" ? "opacity-100" : "opacity-60"
            } hover:opacity-100 transition-opacity`}
          >
            Day 1
          </Badge>
        </Link>
        <Link to={"/day2"}>
          <Badge
            icon={RiVerifiedBadgeFill}
            className={`${
              day === "Day 2" ? "opacity-100" : "opacity-60"
            } hover:opacity-100 transition-opacity`}
          >
            Day 2
          </Badge>
        </Link>
        <Link to={"/day3"}>
          <Badge
            icon={RiVerifiedBadgeFill}
            className={`${
              day === "Day 3" ? "opacity-100" : "opacity-60"
            } hover:opacity-100 transition-opacity`}
          >
            Day 3
          </Badge>
        </Link>
      </div>

      <div className="w-max m-auto mt-1 flex gap-1">
        <Link to={"/"}>
          <Badge
            icon={RiVerifiedBadgeLine}
            className={`${
              day === "Day 4" ? "opacity-100" : "opacity-60"
            } hover:opacity-100 transition-opacity grayscale`}
          >
            Day 4-5
          </Badge>
        </Link>
        <Link to={"/"}>
          <Badge
            icon={RiVerifiedBadgeLine}
            className={`${
              day === "Day 6" ? "opacity-100" : "opacity-60"
            } hover:opacity-100 transition-opacity grayscale`}
          >
            Day 6-7
          </Badge>
        </Link>
        <Link to={"/"}>
          <Badge
            color={"amber-300"}
            icon={RiMedalFill}
            className={`${
              day === "total" ? "opacity-100" : "opacity-60"
            } hover:opacity-100 transition-opacity`}
          >
            Total
          </Badge>
        </Link>
      </div>

      <div>
        <ResponsiveContainer width="99%" height={320}>
          <LineChart width={600} height={400} data={data}>
            <Legend iconType="circle" iconSize={10} />
            <Line
              type="basis"
              dataKey="tttslr"
              stroke="#ffffff"
              strokeWidth={3}
              dot={false}
            />
            <Line
              name="Bill"
              type="basis"
              dataKey="bill"
              stroke="#7d8174"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="basis"
              dataKey="rabbit"
              stroke="#2ecc71"
              strokeWidth={3}
              dot={false}
            />
            <Line
              name="B0sskit"
              type="basis"
              dataKey="b0sskit"
              stroke="#e2be74"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="basis"
              dataKey="ujei"
              stroke="#9ed1e1"
              strokeWidth={3}
              dot={false}
            />
            <Line
              name="Lils"
              type="basis"
              dataKey="lils"
              stroke="#8a7b64"
              strokeWidth={3}
              dot={false}
            />
            <Line
              name="JonTrooper"
              type="basis"
              dataKey="jontrooper"
              stroke="#fee5b9"
              strokeWidth={3}
              dot={false}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
