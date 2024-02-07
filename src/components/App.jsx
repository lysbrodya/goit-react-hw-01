// src/App.jsx
import { Profile } from "./Profile";

import { username, tag, location, avatar, stats } from "../userData.json";
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
    </>
  );
};
