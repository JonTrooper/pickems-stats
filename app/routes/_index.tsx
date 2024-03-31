import Countdown from "~/components/Countdown";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex-col text-center">
        <img
          src="img/waiting.png"
          className="w-max m-auto p-2 opacity-90 h-24"
        />
        <div className="text-3xl text-[#E1C16E]">Scores are being tallied!</div>
        <Countdown />
      </div>
    </div>
  );
}
