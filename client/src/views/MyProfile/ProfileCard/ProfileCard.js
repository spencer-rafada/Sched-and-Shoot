import { React } from "react";
// import axios from "axios";

function ProfileCard({ setToggle, email }) {
  // const [profile, setProfile] = useState();

  // const getData = async () => {
  //   await axios("");
  // };
  return (
    <div className="profile-card">
      {/* <img src={} alt="profile_img"></img> */}
      <p>FirstName LastName</p>
      <button onClick={setToggle}>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;
