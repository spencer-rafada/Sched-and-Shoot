import { React } from "react";
// import axios from "axios";

function ProfileCard({ setToggle, data }) {
  return (
    <div className="profile-card">
      {data.img && (
        <img className="profile-img" src={data.img} alt="profile"></img>
      )}
      <p>
        {data.first} {data.last}
      </p>
      <p>{data.email}</p>
      <button onClick={setToggle}>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;
