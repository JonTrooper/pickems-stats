import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "G2",
    "Day 1": 5,
    "Day 2": 4,
    "Day 3": 2,
    icon: "img/x32/g2.png",
    fill: "#582224",
  },
  {
    name: "FaZe",
    "Day 1": 5,
    "Day 2": 4,
    "Day 3": 2,
    icon: "img/x32/faze.png",
    fill: "#3c1316",
  },
  {
    name: "Na'Vi",
    "Day 1": 4,
    "Day 2": 4,
    "Day 3": 3,
    icon: "img/x32/navi.png",
    fill: "#594c12",
  },
  {
    name: "Vitality",
    "Day 1": 6,
    "Day 2": 4,
    "Day 3": 0,
    icon: "img/x32/vit.png",
    fill: "#5b5222",
  },
  {
    name: "Complexity",
    "Day 1": 2,
    "Day 2": 3,
    "Day 3": 5,
    icon: "img/x32/comp.png",
    fill: "#39495c",
  },
  {
    name: "Heroic",
    "Day 1": 4,
    "Day 2": 5,
    "Day 3": 0,
    icon: "img/x32/heroic.png",
    fill: "#252a2f",
  },
  {
    name: "paiN",
    "Day 1": 2,
    "Day 2": 2,
    "Day 3": 4,
    icon: "img/x32/pain.png",
    fill: "#572640",
  },
  {
    name: "Eternal Fire",
    "Day 1": 2,
    "Day 2": 5,
    "Day 3": 0,
    icon: "img/x32/et.png",
    fill: "#5a5752",
  },
  {
    name: "Virtus.Pro",
    "Day 1": 3,
    "Day 2": 2,
    "Day 3": 1,
    icon: "img/x32/vp.png",
    fill: "#5f3716",
  },
  {
    name: "MOUZ",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
    icon: "img/x32/mouz.png",
    fill: "#501a18",
  },
  {
    name: "TheMongolz",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
    icon: "img/x32/mongolz.png",
    fill: "#312e30",
  },
  {
    name: "FURIA",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
    icon: "img/x32/furia.png",
    fill: "#403f3f",
  },
  {
    name: "ECSTATIC",
    "Day 1": 2,
    "Day 2": 3,
    "Day 3": 0,
    icon: "img/x32/esc.png",
    fill: "#5a4930",
  },
  {
    name: "Imperial",
    "Day 1": 1,
    "Day 2": 3,
    "Day 3": 0,
    icon: "img/x32/imp.png",
    fill: "#194a2a",
  },
  {
    name: "Cloud9",
    "Day 1": 1,
    "Day 2": 3,
    "Day 3": 0,
    icon: "img/x32/c9.png",
    fill: "#223459",
  },
  {
    name: "Spirit",
    "Day 1": 3,
    "Day 2": 0,
    "Day 3": 0,
    icon: "img/x32/ts.png",
    fill: "#5a585b",
  },
];

const renderCustomBar = (props: any) => {
  const { payload, x, y, width, height } = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={payload.fill} />
      <image
        xlinkHref={payload.icon}
        x={94}
        y={y + height / 2 - 12}
        width="24"
        height="24"
      />
    </g>
  );
};

export default function TestBars() {
  return (
    <ResponsiveContainer width="99%" height={560}>
      <BarChart
        barCategoryGap={2}
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 20, left: 30, bottom: 10 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Bar dataKey="Day 1" shape={renderCustomBar} stackId="a"></Bar>
        <Bar dataKey="Day 2" shape={renderCustomBar} stackId="a"></Bar>
        <Bar dataKey="Day 3" shape={renderCustomBar} stackId="a"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
