import { React, useState } from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import EditProfile from "./EditProfile/EditProfile";

function MyProfilePage() {
  const [toggle, setToggle] = useState("profile");

  const handleEditProfile = () => {
    if (toggle === "profile") {
      setToggle("edit");
    } else {
      setToggle("profile");
    }
  };

  return (
    <div>
      {toggle === "profile" && <ProfileCard setToggle={handleEditProfile} />}
      {toggle === "edit" && <EditProfile setToggle={handleEditProfile} />}
    </div>
  );
}

export default MyProfilePage;
