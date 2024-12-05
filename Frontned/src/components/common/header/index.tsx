

// import { useState, useContext } from "react";
// import { FaTimes, FaBars, FaUserCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../../../context";

// const HeaderComponent = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const { loggedInUser } = useContext(AuthContext);
//   const navigate = useNavigate();

 
//   const toggleSidebar = () => {
//     setSidebarOpen((prevState) => !prevState);
//     console.log(`Sidebar state toggled: ${!isSidebarOpen}`);
//   };


//   const handleNavigation = (path: string) => {
//     navigate(path);
//     setSidebarOpen(false); 
//     console.log("Closing sidebar");
//   };

//   return (
//     <div className="relative">
  
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col items-start p-6 space-y-6">
     
//           <button
//             onClick={() => setSidebarOpen(false)} 
//             className="self-end text-3xl text-white hover:text-red-500 transition-colors duration-200"
//             aria-label="Close Sidebar"
//           >
//             <FaTimes />
//           </button>

        
//           <button
//             onClick={() => handleNavigation("/")}
//             className="w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
//           >
//             HOME
//           </button>
//           <button
//             onClick={() => handleNavigation("/stocks")}
//             className="w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
//           >
//             STOCKS
//           </button>
//           <button
//             onClick={() => handleNavigation("/watchlist")}
//             className="w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
//           >
//        WATCHLIST
//           </button>

//           {!loggedInUser ? (
//             <>
//               <button
//                 onClick={() => handleNavigation("/login")}
//                 className="flex items-center gap-2 w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
//               >
//                 <FaSignInAlt /> Login
//               </button>
//               <button
//                 onClick={() => handleNavigation("/register")}
//                 className="flex items-center gap-2 w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
//               >
//                 <FaUserPlus /> Register
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() =>
//                 handleNavigation(`/${loggedInUser._id}/${loggedInUser.name}`)
//               }
//               className="flex items-center gap-2 w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
//             >
//               <FaUserCircle size={28} /> {loggedInUser.name || "Profile"}
//             </button>
            
       
            
//           )}
//         </div>
//       </aside>

//       <header className="w-full flex justify-between items-center p-6 bg-gray-100 shadow-md">
   
//         <button
//           onClick={toggleSidebar}
//           className="text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-200 md:hidden"
//           aria-label="Toggle Sidebar"
//         >
//           {isSidebarOpen ? <FaTimes /> : <FaBars />}
//         </button>

      
  
//       </header>
//     </div>
//   );
// };

// export default HeaderComponent;


import { useState, useContext } from "react";
import { FaTimes, FaBars, FaUserCircle, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context";
import axios from "axios";

const HeaderComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
    console.log(`Sidebar state toggled: ${!isSidebarOpen}`);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setSidebarOpen(false); 
    console.log("Closing sidebar");
  };

  const handleLogout = async () => {
    try {
      const authToken = localStorage.getItem("accessToken");
      console.log("Auth Token:", authToken);
  
      const config = authToken
        ? { headers: { Authorization: `Bearer ${authToken}` } }
        : {};
      console.log("Config:", config);
  
      const response = await axios.post(
        "http://localhost:9006/auth/logout",
        {},
        config
      );
      console.log("Logout response:", response);
  
      setLoggedInUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      console.log("User data cleared");
  
      navigate("/login");
      console.log("Navigated to /login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  
  

  return (
    <div className="relative">
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <button
            onClick={() => setSidebarOpen(false)} 
            className="self-end text-3xl text-white hover:text-red-500 transition-colors duration-200"
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>

          <button
            onClick={() => handleNavigation("/")}
            className="w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
          >
            HOME
          </button>
          <button
            onClick={() => handleNavigation("/stocks")}
            className="w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
          >
            STOCKS
          </button>
          <button
            onClick={() => handleNavigation("/watchlist")}
            className="w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
          >
            WATCHLIST
          </button>
          <button
            onClick={() => handleNavigation("/table")}
            className="w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
          >
         TABLE
          </button>


          {!loggedInUser ? (
            <>
              <button
                onClick={() => handleNavigation("/login")}
                className="flex items-center gap-2 w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
              >
                <FaSignInAlt /> Login
              </button>
              <button
                onClick={() => handleNavigation("/register")}
                className="flex items-center gap-2 w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
              >
                <FaUserPlus /> Register
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  handleNavigation(`/${loggedInUser._id}/${loggedInUser.name}`)
                }
                className="flex items-center gap-2 w-full text-left p-2 text-lg font-bold hover:bg-gray-700 rounded transition-all duration-200"
              >
                <FaUserCircle size={28} /> {loggedInUser.name || "Profile"}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full text-left p-2 text-lg font-bold hover:bg-red-700 rounded transition-all duration-200"
              >
                <FaSignOutAlt size={28} /> Logout
              </button>
            </>
          )}
        </div>
      </aside>

      <header className="w-full flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-200 md:hidden"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
    </div>
  );
};

export default HeaderComponent;
