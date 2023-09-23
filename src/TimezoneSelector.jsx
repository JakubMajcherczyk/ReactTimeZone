import { useState } from "react";
import styles from "./App.module.scss";

function TimezoneSelector({ addTimezone, timezones }) {
  const [selectedTimezone, setSelectedTimezone] = useState("");

  const allTimezones = [
    "America/Los_Angeles",
    "Europe/Warsaw",
    "Asia/Tokyo",
    "America/New_York",
    "Australia/Sydney",
    "Europe/London",
    "Europe/Paris",
    "Asia/Kolkata",
    "Asia/Shanghai",
    "America/Sao_Paulo",
    "Africa/Johannesburg",
    "Asia/Dubai",
    "Pacific/Auckland",
    "Europe/Moscow",
    "America/Argentina/Buenos_Aires",
  ];

  const handleAddTimezone = () => {
    if (selectedTimezone && timezones.length < timezones.length + 1) {
      addTimezone(selectedTimezone);
      setSelectedTimezone("");
    }
  };

  const availableTimezones = allTimezones.filter(
    (tz) => !timezones.includes(tz)
  );

  return (
    <div className={styles.timezoneSelector}>
      <select
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}
      >
        <option value="">Dodaj strefę czasową</option>
        {availableTimezones.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
      <button className={styles.addButton} onClick={handleAddTimezone}>
        Dodaj
      </button>
    </div>
  );
}
export default TimezoneSelector;
