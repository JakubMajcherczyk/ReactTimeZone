import Clock from "./Clock";
import styles from "./App.module.scss";

function ClockList({ timezones, removeTimezone }) {
  return (
    <div className={styles.clockListWrapper}>
      {timezones.map((timezone) => (
        <div className={styles.clockContainer} key={timezone}>
          <Clock timezone={timezone} />
          <button
            className={styles.closeButton}
            onClick={() => removeTimezone(timezone)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}
export default ClockList;
