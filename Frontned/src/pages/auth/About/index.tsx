import  { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context";
import axios from "axios";
import { FooterComponent, HeaderComponent } from "../../../components/common";
import {useNavigate} from "react-router-dom"
const UserDetailPage = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [, setUserData] = useState(null);
   const navigate = useNavigate()
  useEffect(() => {
    if (loggedInUser) {
      console.log("Logged-in User Details:", {
        name: loggedInUser.name,
        email: loggedInUser.email,
        address: loggedInUser.address,
        image: loggedInUser.image,
        id: loggedInUser._id,
      });

      axios
        .get(`/api/users/${loggedInUser._id}`)
        .then((response) => {
          setUserData(response.data);
          console.log("Fetched User Data:", response.data);
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [loggedInUser]);

  if (!loggedInUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">No user is logged in.</p>
      </div>
    );
  }

  const baseURL = "http://127.0.0.1:5500/public/uploads/users/";

  return (
    <>
      <HeaderComponent />
      <div className="relative p-6">
    
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          onClick={() => navigate("/watchList")}
        >
        WatchList
        </button>

        <div className="p-6 max-w-lg bg-white shadow-md rounded-md float-left">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">User Details</h1>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-64 h-48 overflow-hidden border-2 border-theme-b-alt">
              <img
                src={`${baseURL}${loggedInUser.image}`}
                alt={`${loggedInUser.name}'s photo`}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-700">
              {loggedInUser.name}
            </h2>
            <h2 className="text-md text-gray-600">
              <strong>Id :</strong> {loggedInUser._id}
            </h2>
            <p className="text-md text-gray-600">
              <strong>Email:</strong> {loggedInUser.email}
            </p>
            <p className="text-md text-gray-600">
              <strong>Address:</strong> {loggedInUser.address}
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default UserDetailPage;
