import { React } from "react";
// import axios from "axios";

function ProfileCard({ setToggle }) {
  // const getData = async () => {};
  return (
    <div className="profile-card">
      <button onClick={setToggle}>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;
