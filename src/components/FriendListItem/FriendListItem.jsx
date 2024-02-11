import clsx from "clsx";
import css from "./FriendListItem.module.css";
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOfline)}>
        {isOnline ? "isOnline" : "isOfline"}
      </p>
      {/* {isOnline ? <p>isOnline</p> : <p>isOfline</p>} */}
    </div>
  );
};
