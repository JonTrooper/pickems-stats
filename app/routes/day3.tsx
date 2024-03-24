import Navbar from "~/components/Navbar";

const scoreThree = [
  {
    name: "Start",
    tttslr: 130,
    bill: 130,
    rabbit: 120,
    b0sskit: 110,
    ujei: 120,
    lils: 90,
    jontrooper: 120,
  },
  {
    name: "Match 1",
    tttslr: 150,
    bill: 130,
    rabbit: 120,
    b0sskit: 130,
    ujei: 120,
    lils: 90,
    jontrooper: 120,
  },
];

const teamData = [
  {
    name: "MOUZ",
    value: 6,
    icon: function Icon() {
      return <img src="img/mouz.png" width={19} alt="" className="mr-2" />;
    },
    color: "red-600",
  },
  {
    name: "G2",
    value: 6,
    icon: function Icon() {
      return <img src="img/g2.png" width={21} alt="" className="mr-1" />;
    },
    color: "red-500",
  },
  {
    name: "Vitality",
    value: 6,
    icon: function Icon() {
      return <img src="img/vitality.png" width={20} alt="" className="mr-1" />;
    },
    color: "yellow-300",
  },
  {
    name: "FaZe",
    value: 5,
    icon: function Icon() {
      return <img src="img/faze.png" width={31} alt="" className="mr-1" />;
    },
    color: "red-800",
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
    name: "Heroic",
    value: 4,
    icon: function Icon() {
      return <img src="img/heroic.png" width={26} alt="" className="mr-1" />;
    },
    color: "slate-600",
  },
  {
    name: "NAVI",
    value: 3,
    icon: function Icon() {
      return <img src="img/navi.png" width={26} alt="" className="mr-1" />;
    },
    color: "yellow-400",
  },
  {
    name: "VP",
    value: 3,
    icon: function Icon() {
      return <img src="img/vp.png" width={21} alt="" className="mr-1" />;
    },
    color: "orange-500",
  },
  {
    name: "Complexity",
    value: 2,
    icon: function Icon() {
      return <img src="img/comp.png" width={24} alt="" className="mr-1" />;
    },
    color: "blue-300",
  },
  {
    name: "EF",
    value: 2,
    icon: function Icon() {
      return <img src="img/eternal.png" width={38} alt="" className="mr-1" />;
    },
    color: "orange-100",
  },
  {
    name: "Paingaming",
    value: 2,
    icon: function Icon() {
      return <img src="img/pain.png" width={31} alt="" className="mr-1" />;
    },
    color: "pink-500",
  },
  {
    name: "Esc",
    value: 2,
    icon: function Icon() {
      return <img src="img/esc.png" width={21} alt="" className="mr-1" />;
    },
    color: "orange-300",
  },
  {
    name: "C9",
    value: 1,
    icon: function Icon() {
      return <img src="img/c9.png" width={30} alt="" className="mr-1" />;
    },
    color: "blue-500",
  },
  {
    name: "Imperial",
    value: 1,
    icon: function Icon() {
      return <img src="img/imp.png" width={20} alt="" className="mr-1" />;
    },
    color: "green-500",
  },
];

export default function Day3() {
  return (
    <div className="max-w-2xl m-auto p-2">
      <Navbar data={scoreThree} day={"Day 3"} />

      {/* <Divider>Team Picks</Divider>
        <BarList data={teamData} /> */}
    </div>
  );
}
