import { useEffect, useState } from "react";
import { format, utcToZonedTime } from "date-fns-tz";
import styles from "./App.module.scss";

function Clock({ timezone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const zonedDate = utcToZonedTime(date, timezone);
      setTime(zonedDate);
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  // Rozbijamy strefę czasową na dwie części
  const [region, city] = timezone.split("/");

  return (
    <div className={styles.clock}>
      <div className={styles.zoneWrapper}>
        <h3>{region}</h3>
        <h2>{city}</h2>
      </div>
      <p>{format(time, "HH:mm:ss")}</p>
    </div>
  );
}
export default Clock;
