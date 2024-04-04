import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({title, stats}) {

return (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage}) => {
        return (
          <li className={styles.item}
              key={id}
              style={{backgroundColor: randomHexColor()}}
              >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage} %</span>
          </li>
        );
      })}
    </ul>
  </section>
);
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
  })
  ).isRequired,
};

export default Statistics;