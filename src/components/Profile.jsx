export const Profile = ({
  username,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats,
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
