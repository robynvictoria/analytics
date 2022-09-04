import { useEffect, useState } from "react";
import { FlagIcon } from "@heroicons/react/outline";

const Races = () => {
  const [raceData, setRaceData] = useState(null);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/2022.json")
      .then((res) => res.json())
      .then((data) => setRaceData(data));
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">2022 Season Races</h1>
      <ul>
        {raceData &&
          raceData.MRData.RaceTable.Races.map((race) => (
            <li key={race.raceName} className="my-2 flex items-center">
              <FlagIcon className="h-5 w-5 mr-2" />
              <a className="text-blue-600" href={`/races/${race.round}`}>
                {race.raceName}{" "}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Races;
