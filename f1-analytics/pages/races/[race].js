import { useEffect, useState } from "react";
import DriverSelector from "../../components/DriverSelector";
import LineChart from "../../components/LineChart";

export async function getServerSideProps({ req, query, params }) {
  return {
    props: {
      race: query.race,
    },
  };
}

const Race = ({ race }) => {
  const [raceData, setRaceData] = useState(null);
  const [lapTimes, setLapTimes] = useState(null);
  const [laps, setLaps] = useState(null);
  const [driver, setDriver] = useState(null);

  const convertToSeconds = (time) => {
    const a = time.split(":");
    const seconds = a[0] * 60 + +a[1];
    return seconds;
  };

  useEffect(() => {
    if (driver) {
      fetch(
        `https://ergast.com/api/f1/2022/${race}/drivers/${driver}/laps.json`
      )
        .then((res) => res.json())
        .then((data) => {
          setRaceData(data);
          console.log(raceData);
          console.log(data);
          if (raceData && raceData.MRData.RaceTable.Races[0].Laps) {
            setLapInfo();
          }
        });
    }
  }, [driver]);

  const setLapInfo = () => {
    const lapTimesArr = [];

    raceData.MRData.RaceTable.Races[0].Laps.map((lap) =>
      lap.Timings.map((time) => lapTimesArr.push(convertToSeconds(time.time)))
    );
    setLapTimes(lapTimesArr);

    setLaps(raceData.MRData.RaceTable.Races[0].Laps.map((lap) => lap.number));
  };

  return (
    <div>
      <h1 className="my-5 text-2xl font-bold">Race number: {race}</h1>
      {raceData && (
        <LineChart xAxisData={laps} yAxisData={lapTimes} driver={driver} />
      )}
      <DriverSelector race={race} setDriver={setDriver} />
    </div>
  );
};

export default Race;
