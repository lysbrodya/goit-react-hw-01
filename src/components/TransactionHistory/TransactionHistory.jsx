import css from "../TransactionHistory/TransactionHistory.module.css";
import clsx from "clsx";
export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.stringColor}>
        {items.map(function fn(item) {
          return (
            <tr key={item.id} className={css.stringColor}>
              <td key={item.id + item.type} className={css.firstLatter}>
                {item.type}
              </td>
              <td key={item.id + item.amount}>{item.amount}</td>
              <td key={item.id + item.currency}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
