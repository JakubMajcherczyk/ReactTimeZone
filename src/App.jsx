import { useState } from "react";
import TimezoneSelector from "./TimezoneSelector";
import ClockList from "./ClockList";
import styles from "./App.module.scss";

function App() {
  const startTimeZones = ["America/Los_Angeles", "Europe/Warsaw", "Asia/Tokyo"];
  const [timezones, setTimezones] = useState(startTimeZones);

  const addTimezone = (timezone) => {
    setTimezones([...timezones, timezone]);
  };

  const removeTimezone = (timezone) => {
    setTimezones(timezones.filter((timez) => timez !== timezone));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Zegar Strefowy UTC</h1>
      <TimezoneSelector addTimezone={addTimezone} timezones={timezones} />
      <ClockList timezones={timezones} removeTimezone={removeTimezone} />
    </div>
  );
}

export default App;
