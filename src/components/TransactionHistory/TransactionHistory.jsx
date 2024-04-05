import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory({ items }) {

  return (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
      <tr className={styles["table-row"]} key={item.id}>
        <td className={styles["data"]}>{item.type}</td>
        <td className={styles["data"]}>{item.amount}</td>
        <td className={styles["data"]}>{item.currency}</td>
      </tr>
    ))}
    </tbody>
  </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;