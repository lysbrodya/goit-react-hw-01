// src/App.jsx
import { Profile } from "../Profile/Profile.jsx";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import { username, tag, location, avatar, stats } from "../../userData.json";
import { FriendList } from "../FriendList/FriendList.jsx";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory.jsx";

export const App = () => {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};