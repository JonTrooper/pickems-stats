export default function RecentResults({
  isElementHovered,
}: {
  isElementHovered: any;
}) {
  return (
    <div className="flex-col w-max m-auto">
      <div className="flex mb-2">
        <div
          className={`flex transition-opacity duration-300 ${
            isElementHovered("spirit-faze")
              ? "opacity-30"
              : isElementHovered("ef-navi")
              ? "opacity-30"
              : isElementHovered("mouz-g2")
              ? "opacity-30"
              : isElementHovered("navi-g2")
              ? "opacity-30"
              : "opacity-100"
          }`}
        >
          <div className="w-28 grayscale opacity-50">
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/c9.png" alt="C9" width={24} />
                  <p>
                    <span className="text-green-500">2</span> -{" "}
                    <span className="text-red-500">1</span>
                  </p>
                  <img src="img/x32/navi.png" alt="Na'Vi" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/c9.png" alt="C9" width={24} />
                  <p>
                    <span className="text-green-500">1</span> -{" "}
                    <span className="text-red-500">0</span>
                  </p>
                  <img src="img/x32/g2.png" alt="G2" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/c9.png" width={24} />
                  <p>
                    <span className="text-green-500">1</span> -{" "}
                    <span className="text-red-500">0</span>
                  </p>
                  <img src="img/x32/esc.png" alt="ESC" width={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 ml-1.5 grayscale opacity-50">
            <div className="border rounded-md border-zinc-800 mb-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/vit.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/c9.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/vit.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">1</span>
                  </p>
                  <img src="img/x32/comp.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/vit.png" width={24} />
                  <p>
                    <span className="text-green-400">1</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/imp.png" width={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex transition-opacity duration-300 ${
            isElementHovered("c9-vit")
              ? "opacity-30"
              : isElementHovered("ef-navi")
              ? "opacity-30"
              : isElementHovered("mouz-g2")
              ? "opacity-30"
              : isElementHovered("navi-g2")
              ? "opacity-30"
              : "opacity-100"
          }`}
        >
          <div className="w-28 mx-1.5 grayscale opacity-50">
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/ts.png" width={24} />
                  <p>
                    <span className="text-green-500">2</span> -{" "}
                    <span className="text-red-500">1</span>
                  </p>
                  <img src="img/x32/c9.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/ts.png" width={24} />
                  <p>
                    <span className="text-green-500">1</span> -{" "}
                    <span className="text-red-500">0</span>
                  </p>
                  <img src="img/x32/imp.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/ts.png" width={24} />
                  <p>
                    <span className="text-green-500">1</span> -{" "}
                    <span className="text-red-500">0</span>
                  </p>
                  <img src="img/x32/navi.png" width={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-28">
            <div className="border rounded-md border-zinc-800 mb-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/faze.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">1</span>
                  </p>
                  <img src="img/x32/vit.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/faze.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">1</span>
                  </p>
                  <img src="img/x32/ts.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/faze.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/comp.png" width={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div
          className={`flex transition-opacity duration-300 ${
            isElementHovered("spirit-faze")
              ? "opacity-30"
              : isElementHovered("c9-vit")
              ? "opacity-30"
              : isElementHovered("mouz-g2")
              ? "opacity-30"
              : isElementHovered("vit-faze")
              ? "opacity-30"
              : "opacity-100"
          }`}
        >
          <div className="w-28 grayscale opacity-50">
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/et.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">1</span>
                  </p>
                  <img src="img/x32/vp.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/et.png" width={24} />
                  <p>
                    <span className="text-green-400">1</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/faze.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#211d1d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/et.png" width={24} />
                  <p>
                    <span className="text-red-400">0</span> -{" "}
                    <span className="text-green-400">1</span>
                  </p>
                  <img src="img/x32/mouz.png" width={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 ml-1.5">
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/navi.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">1</span>
                  </p>
                  <img src="img/x32/g2.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/navi.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/et.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/navi.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/pain.png" width={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex transition-opacity duration-300 ${
            isElementHovered("spirit-faze")
              ? "opacity-30"
              : isElementHovered("ef-navi")
              ? "opacity-30"
              : isElementHovered("c9-vit")
              ? "opacity-30"
              : isElementHovered("vit-faze")
              ? "opacity-30"
              : "opacity-100"
          }`}
        >
          <div className="w-28 ml-1.5 grayscale opacity-50">
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/mouz.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/comp.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/mouz.png" width={24} />
                  <p>
                    <span className="text-green-400">1</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/et.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/mouz.png" width={24} />
                  <p>
                    <span className="text-green-400">1</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/esc.png" width={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 ml-1.5 grayscale opacity-50">
            <div className="border rounded-md border-zinc-800">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/g2.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">0</span>
                  </p>
                  <img src="img/x32/mouz.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/g2.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">1</span>
                  </p>
                  <img src="img/x32/vp.png" width={24} />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-zinc-800 my-1">
              <div className="bg-[#1d211d] rounded-b-md p-1">
                <div className="flex gap-1.5 items-center m-auto w-max">
                  <img src="img/x32/g2.png" width={24} />
                  <p>
                    <span className="text-green-400">2</span> -{" "}
                    <span className="text-red-400">1</span>
                  </p>
                  <img src="img/x32/esc.png" width={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
