import { React, useState, useEffect } from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import EditProfile from "./EditProfile/EditProfile";
import axios from "axios";

function MyProfilePage() {
  const [toggle, setToggle] = useState("profile");
  const [data, setData] = useState("");
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log(email);
    // POST request with email data to receive data about the user
    await axios({ method: "post", url: "/profile", data: [{ email: email }] })
      .then((response) => {
        console.log(response.data[0]);
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => {
        console.log("Success");
      });
  };

  const handleEditProfile = () => {
    if (toggle === "profile") {
      setToggle("edit");
    } else {
      setToggle("profile");
    }
  };

  return (
    <div>
      {toggle === "profile" && (
        <ProfileCard setToggle={handleEditProfile} data={data} />
      )}
      {toggle === "edit" && (
        <EditProfile setToggle={handleEditProfile} data={data} />
      )}
    </div>
  );
}

export default MyProfilePage;
