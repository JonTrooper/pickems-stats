import { ResponsiveBar } from "@nivo/bar";
import { BarList, Divider } from "@tremor/react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

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

const teamData = [
  {
    team: "G2",
    "Day 1": 6,
    "Day 2": 4,
    "Day 3": 6,
  },
  {
    team: "FaZe",
    "Day 1": 5,
    "Day 2": 4,
    "Day 3": 2,
  },
  {
    team: "Vitality",
    "Day 1": 6,
    "Day 2": 4,
    "Day 3": 0,
  },
  {
    team: "Na'Vi",
    "Day 1": 4,
    "Day 2": 4,
    "Day 3": 3,
  },
  {
    team: "Complexity",
    "Day 1": 2,
    "Day 2": 3,
    "Day 3": 5,
  },
  {
    team: "Heroic",
    "Day 1": 4,
    "Day 2": 5,
    "Day 3": 0,
  },
  {
    team: "paiN",
    "Day 1": 2,
    "Day 2": 2,
    "Day 3": 4,
  },
  {
    team: "Eternal Fire",
    "Day 1": 2,
    "Day 2": 5,
    "Day 3": 0,
  },
  {
    team: "Virtus.Pro",
    "Day 1": 3,
    "Day 2": 2,
    "Day 3": 1,
  },
  {
    team: "MOUZ",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
  },
  {
    team: "TheMongolz",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
  },
  {
    team: "FURIA",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
  },
  {
    team: "ECSTATIC",
    "Day 1": 2,
    "Day 2": 3,
    "Day 3": 0,
  },
  {
    team: "Spirit",
    "Day 1": 3,
    "Day 2": 0,
    "Day 3": 0,
  },
  {
    team: "Cloud9",
    "Day 1": 1,
    "Day 2": 3,
    "Day 3": 0,
  },
  {
    team: "Imperial",
    "Day 1": 1,
    "Day 2": 3,
    "Day 3": 0,
  },
];

export default function Teams() {
  const theme = {
    axis: {
      ticks: {
        text: {
          // Change font color for axis ticks here
          fill: "#ffffff", // Example: Red color for the axis font
          fontSize: 12, // You can also change the font size
        },
      },
      legend: {
        text: {
          // Change font color for the axis legend (title) here
          fill: "#3498db", // Example: Blue color for the legend font
          fontSize: 16, // You can also change the font size
        },
      },
    },
    // You can also customize other parts of the chart (e.g., grid, labels)
  };
  return (
    <div className="h-96">
      {/* <Divider>Total Team Picks</Divider>
      <BarList data={teamDataTotal} className="max-w-md m-auto font-medium" /> */}
      <ResponsiveBar
        theme={theme}
        data={teamData}
        keys={["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"]}
        indexBy="team"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "Day 1",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 6,
        }}
        enableGridY={false}
        labelSkipWidth={10}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 4,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.9,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        isInteractive={false}
        role="application"
      />
    </div>
  );
}
