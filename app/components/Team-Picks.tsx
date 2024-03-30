import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  {
    name: "G2",
    "Day 1": 6,
    "Day 2": 4,
    "Day 3": 6,
    "Day 4-5": 3,
    "Day 6-7": 4,
    icon: "img/x32/g2.png",
    fill: "#bc3131",
  },
  {
    name: "Vitality",
    "Day 1": 6,
    "Day 2": 4,
    "Day 3": 0,
    "Day 4-5": 5,
    "Day 6-7": 4,
    icon: "img/x32/vit_dark.png",
    fill: "#bcbc31",
    placing: "4th",
  },
  {
    name: "Na'Vi",
    "Day 1": 4,
    "Day 2": 4,
    "Day 3": 3,
    "Day 4-5": 3,
    "Day 6-7": 3,
    icon: "img/x32/navi.png",
    fill: "#bca331",
  },
  {
    name: "FaZe",
    "Day 1": 5,
    "Day 2": 4,
    "Day 3": 2,
    "Day 4-5": 1,
    "Day 6-7": 3,
    icon: "img/x32/faze_light.png",
    fill: "#bc3141",
  },
  {
    name: "Eternal Fire",
    "Day 1": 2,
    "Day 2": 5,
    "Day 3": 0,
    "Day 4-5": 4,
    icon: "img/x32/et_dark.png",
    fill: "#b6b4a8",
    placing: "6th",
  },
  {
    name: "Complexity",
    "Day 1": 2,
    "Day 2": 3,
    "Day 3": 5,
    icon: "img/x32/comp.png",
    fill: "#3141bc",
    placing: "11th",
  },
  {
    name: "Spirit",
    "Day 1": 3,
    "Day 2": 0,
    "Day 3": 0,
    "Day 4-5": 6,
    icon: "img/x32/ts.png",
    fill: "#3189bc",
    placing: "7th",
  },
  {
    name: "MOUZ",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
    "Day 4-5": 4,
    icon: "img/x32/mouz_light.png",
    fill: "#bc3131",
    placing: "5th",
  },
  {
    name: "Heroic",
    "Day 1": 4,
    "Day 2": 5,
    "Day 3": 0,
    icon: "img/x32/heroic.png",
    fill: "#252a2f",
    placing: "12th",
  },
  {
    name: "paiN",
    "Day 1": 2,
    "Day 2": 2,
    "Day 3": 4,
    icon: "img/x32/pain.png",
    fill: "#7931bc",
    placing: "9th",
  },
  {
    name: "Cloud9",
    "Day 1": 1,
    "Day 2": 3,
    "Day 3": 0,
    "Day 4-5": 2,
    icon: "img/x32/c9.png",
    fill: "#316bbc",
    placing: "8th",
  },
  {
    name: "Virtus.Pro",
    "Day 1": 3,
    "Day 2": 2,
    "Day 3": 1,
    icon: "img/x32/vp.png",
    fill: "#bc5f31",
    placing: "10th",
  },
  {
    name: "TheMongolz",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
    icon: "img/x32/mongolz.png",
    fill: "#312e30",
    placing: "16th",
  },
  {
    name: "FURIA",
    "Day 1": 5,
    "Day 2": 0,
    "Day 3": 0,
    icon: "img/x32/furia.png",
    fill: "#403f3f",
    placing: "15th",
  },
  {
    name: "ECSTATIC",
    "Day 1": 2,
    "Day 2": 3,
    "Day 3": 0,
    icon: "img/x32/esc.png",
    fill: "#5a4930",
    placing: "13th",
  },
  {
    name: "Imperial",
    "Day 1": 1,
    "Day 2": 3,
    "Day 3": 0,
    icon: "img/x32/imp.png",
    fill: "#194a2a",
    placing: "14th",
  },
];

const renderCustomBar = (props: any) => {
  const { payload, x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={payload.fill}
        opacity={0.95}
      />
      <image
        xlinkHref={payload.icon}
        x={90}
        y={y + height / 2 - 12}
        width="24"
        height="24"
      />
      {/* <text
        x={90 + 30}
        y={y + 18}
        fill={"#e0e0e0"}
        fontSize={14}
        opacity={0.25}
      >
        {payload.placing}
      </text> */}
    </g>
  );
};

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;
  if (active && payload && payload.length) {
    const total = payload.reduce(
      (acc: any, item: { value: any }) => acc + item.value,
      0
    );
    return (
      <div className="bg-neutral-950 p-2 rounded border border-neutral-800">
        <p className="label">{`${label}`}</p>
        <hr className="w-full opacity-10 my-1"></hr>
        {payload.map((item: any) => (
          <div className="flex gap-2">
            <div className="text-amber-200 pr-2">{item.dataKey}</div>
            <div className="ml-auto">{item.value}</div>
          </div>
        ))}
        <hr className="w-full opacity-10 my-1"></hr>
        <div className="flex">
          <div>Total</div>
          <div className="ml-auto">{total}</div>
        </div>
      </div>
    );
  }

  return null;
};

const renderCustomizedLabel = (props: any) => {
  const { payload, x, y, width, value } = props;
  const radius = 12;

  return (
    <g>
      <text
        x={124}
        y={y + radius + 3}
        fill="#fff"
        textAnchor="left"
        dominantBaseline="middle"
        opacity={0.6}
      >
        {value}
      </text>
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
        margin={{ top: 0, right: 20, left: 22, bottom: 10 }}
      >
        <Tooltip content={<CustomTooltip />} />
        <XAxis type="number" fontSize={12} />
        <YAxis type="category" dataKey="name" fontSize={12} />
        <Bar dataKey="Day 1" shape={renderCustomBar} stackId="a"></Bar>
        <Bar dataKey="Day 2" shape={renderCustomBar} stackId="a"></Bar>
        <Bar dataKey="Day 3" shape={renderCustomBar} stackId="a"></Bar>
        <Bar dataKey="Day 4-5" shape={renderCustomBar} stackId="a"></Bar>
        <Bar dataKey="Day 6-7" shape={renderCustomBar} stackId="a">
          <LabelList dataKey="placing" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
