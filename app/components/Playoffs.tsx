interface PlayoffsProps {
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
}

export default function Playoffs({
  handleMouseEnter,
  handleMouseLeave,
}: PlayoffsProps) {
  return (
    <div className="flex w-max m-auto">
      <div className="w-34">
        <h1 className="text-yellow-100 text-center p-1 mb-1">Quarter-finals</h1>
        <div className="border rounded-t-md border-zinc-800">
          <h2 className="rounded-t text-center bg-neutral-900 border-b border-zinc-800">
            March 28th
          </h2>
          <div
            id="c9-vit"
            className="bg-[#1d1d21] p-1 hover:bg-neutral-900 transition-all cursor-default"
            onMouseEnter={() => handleMouseEnter("c9-vit")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-1.5 items-center">
              <div className="flex gap-1.5 opacity-45">
                <img src="img/x32/c9.png" alt="C9" width={22} />
                <p>Cloud9</p>
              </div>
              <span className="text-red-400 ml-auto pr-0.5">0</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <img src="img/x32/vit.png" alt="Vitality" width={22} />
              <p>Vitality</p>
              <span className="text-green-400 ml-auto pr-0.5">2</span>
            </div>
          </div>
        </div>
        <div
          className="rounded-b-md text-center bg-[#1d1d21] border border-t-[#101010] border-zinc-800 p-1 hover:bg-neutral-900 transition-all cursor-default"
          onMouseEnter={() => handleMouseEnter("spirit-faze")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-1.5 items-center">
            <div className="flex gap-1.5 opacity-45">
              <img src="img/x32/ts.png" alt="Spirit" width={22} />
              <p>Spirit</p>
            </div>
            <span className="text-red-400 ml-auto pr-1">1</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src="img/x32/faze.png" alt="Faze" width={22} />
            <p>FaZe</p>
            <span className="text-green-400 ml-auto pr-0.5">2</span>
          </div>
        </div>
        <div className="border rounded-t-md border-zinc-800 mt-2">
          <h2 className="rounded-t text-center bg-neutral-900 border-b border-zinc-800">
            March 29th
          </h2>
          <div
            className="bg-[#1d1d21] p-1 hover:bg-neutral-900 transition-all cursor-default"
            onMouseEnter={() => handleMouseEnter("ef-navi")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-1.5 items-center">
              <div className="flex gap-1.5 opacity-45">
                <img src="img/x32/et.png" alt="Eternal Fire" width={22} />
                <p>Eternal Fire</p>
              </div>
              <span className="text-red-400 ml-auto pr-0.5">0</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <img src="img/x32/navi.png" alt="Na'Vi" width={22} />
              <p>Na'Vi</p>
              <span className="text-green-400 ml-auto pr-0.5">2</span>
            </div>
          </div>
        </div>
        <div
          className="rounded-b-md text-center bg-[#1d1d21] border border-t-[#101010] border-zinc-800 p-1 hover:bg-neutral-900 transition-all cursor-default"
          onMouseEnter={() => handleMouseEnter("mouz-g2")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-1.5 items-center">
            <div className="flex gap-1.5 opacity-45">
              <img src="img/x32/mouz.png" alt="MOUZ" width={22} />
              <p>MOUZ</p>
            </div>
            <span className="text-red-400 ml-auto pr-0.5">0</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src="img/x32/g2.png" alt="G2" width={22} />
            <p>G2</p>
            <span className="text-green-400 ml-auto pr-0.5">2</span>
          </div>
        </div>
      </div>
      <div className="w-32 my-auto ml-4">
        <h1 className="text-yellow-200 text-center p-1 mb-1">Semi-finals</h1>
        <div className="border rounded-t-md border-zinc-800">
          <h2 className="rounded-t text-center bg-neutral-900 border-b border-zinc-800">
            March 30th
          </h2>
          <div
            className="bg-[#1d1d21] p-1 hover:bg-neutral-900 transition-all cursor-default"
            onMouseEnter={() => handleMouseEnter("vit-faze")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-1.5 items-center">
              <img src="img/x32/vit.png" alt="Vitality" width={22} />
              <p>Vitality</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <img src="img/x32/faze.png" alt="FaZe" width={22} />
              <p>FaZe</p>
            </div>
          </div>
        </div>
        <div className="rounded-b-md text-center bg-[#1d1d21] border border-t-[#101010] border-zinc-800 p-1 hover:bg-neutral-900 transition-all">
          <div
            className="bg-[#1d1d21] hover:bg-neutral-900 transition-all cursor-default"
            onMouseEnter={() => handleMouseEnter("navi-g2")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-1.5 items-center">
              <img src="img/x32/navi.png" alt="Na'Vi" width={22} />
              <p>Na'Vi</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <img src="img/x32/g2.png" alt="G2" width={22} />
              <p>G2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-32 my-auto ml-4 grayscale opacity-20">
        <h1 className="text-amber-300 text-center p-1 mb-1">Grand final</h1>
        <h2 className="bg-red-950 rounded p-1">March 31st</h2>
        <div className="bg-green-900 rounded p-1">
          <p>-</p>
          <p>-</p>
        </div>
      </div>
    </div>
  );
}
