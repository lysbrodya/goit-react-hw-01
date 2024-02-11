export const TransactionHistory = (items) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.items.map((item) => {
          return (
            <tr key={item.id}>
              <td key={item.id + item.tipe}>{item.type}</td>
              <td key={item.id + item.amount}>{item.amount}</td>
              <td key={item.id + item.currency}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
