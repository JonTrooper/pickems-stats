import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

export default function Matches() {
  const matches = useLoaderData<typeof loader>();
  return (
    <div className="w-96 m-auto text-center p-2">
      <h1 className="font-medium text-lg">Recent Matches</h1>
      <div className="flex flex-col p-1 rounded-md">
        {Array.isArray(matches) ? (
          [...matches].reverse().map(
            (match: any, index: number) =>
              match.bestOf === 3 && (
                <div
                  key={index}
                  className="flex justify-between items-center p-1"
                >
                  {match.status.type === "notstarted" && (
                    <div className="bg-green-900 w-full rounded-md flex justify-between items-center p-1 hidden">
                      <div className="flex-1 text-right flex items-center">
                        <div className="pr-1">{match.homeTeam.name}</div>
                        {match.homeTeam.name === "Complexity" && (
                          <img src="img/comp.png" className="h-5 w-5" />
                        )}
                      </div>
                      <p className="flex-none px-2">vs</p>
                      <p className="flex-1 text-left">{match.awayTeam.name}</p>
                    </div>
                  )}
                  {match.status.type === "finished" && (
                    <div className="hover:bg-neutral-800 w-full rounded-md flex justify-between items-center p-1 transition-colors">
                      <div className="flex-1 text-right flex items-center">
                        {match.homeTeam.name === "Complexity" && (
                          <img src="img/comp.png" className="h-5 w-5" />
                        )}
                        {match.homeTeam.name === "Cloud9" && (
                          <img src="img/c9.png" className="h-4 w-5" />
                        )}
                        {match.homeTeam.name === "Heroic" && (
                          <img src="img/heroic.png" className="h-4 w-5" />
                        )}
                        {match.homeTeam.name === "ECSTATIC" && (
                          <img src="img/esc.png" className="h-5 w-5" />
                        )}
                        {match.homeTeam.name === "Imperial" && (
                          <img src="img/imp.png" className="h-5 w-5" />
                        )}
                        {match.homeTeam.name === "Eternal Fire" && (
                          <img src="img/eternal.png" className="h-3 w-5" />
                        )}
                        {match.homeTeam.name === "Spirit" && (
                          <img src="img/teamspirit.png" className="h-5 w-5" />
                        )}
                        {match.homeTeam.name === "paiN" && (
                          <img src="img/pain.png" className="h-4 w-5" />
                        )}
                        {match.homeTeam.name === "MOUZ" && (
                          <img src="img/mouz.png" className="h-5 w-5" />
                        )}

                        <div className="pl-1">{match.homeTeam.name}</div>
                      </div>
                      {match.homeScore.current === 2 &&
                        match.awayScore.current === 1 && (
                          <p className="flex-none px-6 font-bold">
                            <span className="text-green-500">
                              {match.homeScore.current}
                            </span>
                            <span className="text-neutral-500">-</span>
                            <span className="text-red-500">
                              {match.awayScore.current}
                            </span>
                          </p>
                        )}
                      {match.awayScore.current === 2 &&
                        match.homeScore.current === 1 && (
                          <p className="flex-none px-6 font-bold">
                            <span className="text-red-500">
                              {match.homeScore.current}
                            </span>
                            <span className="text-neutral-500">-</span>
                            <span className="text-green-500">
                              {match.awayScore.current}
                            </span>
                          </p>
                        )}
                      {match.homeScore.current === 2 &&
                        match.awayScore.current === 0 && (
                          <p className="flex-none px-6 font-bold">
                            <span className="text-green-500">
                              {match.homeScore.current}
                            </span>
                            <span className="text-neutral-500">-</span>
                            <span className="text-red-500">
                              {match.awayScore.current}
                            </span>
                          </p>
                        )}
                      {match.awayScore.current === 2 &&
                        match.homeScore.current === 0 && (
                          <p className="flex-none px-6 font-bold">
                            <span className="text-red-500">
                              {match.homeScore.current}
                            </span>
                            <span className="text-neutral-500">-</span>
                            <span className="text-green-500">
                              {match.awayScore.current}
                            </span>
                          </p>
                        )}
                      <div className="flex-1 text-right pr-1">
                        {match.awayTeam.name}
                      </div>
                      {match.awayTeam.name === "Complexity" && (
                        <img src="img/comp.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "Cloud9" && (
                        <img src="img/c9.png" className="h-4 w-5" />
                      )}
                      {match.awayTeam.name === "Heroic" && (
                        <img src="img/heroic.png" className="h-4 w-5" />
                      )}
                      {match.awayTeam.name === "ECSTATIC" && (
                        <img src="img/esc.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "Imperial" && (
                        <img src="img/imp.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "Eternal Fire" && (
                        <img src="img/eternal.png" className="h-3 w-5" />
                      )}
                      {match.awayTeam.name === "Spirit" && (
                        <img src="img/teamspirit.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "paiN" && (
                        <img src="img/pain.png" className="h-4 w-5" />
                      )}
                      {match.awayTeam.name === "MOUZ" && (
                        <img src="img/mouz.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "Natus Vincere" && (
                        <img src="img/navi.png" className="h-4 w-5" />
                      )}
                      {match.awayTeam.name === "Vitality" && (
                        <img src="img/vitality.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "G2" && (
                        <img src="img/g2.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "FaZe" && (
                        <img src="img/faze.png" className="h-3 w-5" />
                      )}
                      {match.awayTeam.name === "Virtus.pro" && (
                        <img src="img/vp.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "FURIA" && (
                        <img src="img/furia.png" className="h-5 w-5" />
                      )}
                      {match.awayTeam.name === "TheMongolz" && (
                        <img src="img/mongolz.png" className="h-5 w-5" />
                      )}
                    </div>
                  )}
                </div>
              )
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
