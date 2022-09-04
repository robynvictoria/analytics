import { useEffect, useState } from "react";

const DriverSelector = ({ setDriver, race, setLapInfo }) => {
  const [drivers, setDrivers] = useState(null);
  useEffect(() => {
    fetch(`http://ergast.com/api/f1/2022/${race}/drivers.json`)
      .then((res) => res.json())
      .then((data) =>
        setDrivers(
          data.MRData.DriverTable.Drivers.map((driver) => driver.familyName)
        )
      );
  }, []);
  return (
    <div>
      <h2 className="my-5 text-xl font-bold">Select a Driver</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        {drivers &&
          drivers.map((driverName) => (
            <li
              key={driverName}
              className=" text-blue-600 my-2 cursor-pointer"
              onClick={() => setDriver(driverName.toLowerCase())}
            >
              {driverName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DriverSelector;
