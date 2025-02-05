// import logo from "../../assets/images/main_logo3.png";
// import { useContext, useEffect, useRef } from "react";
// import { BiMenu } from "react-icons/bi";
// import { AuthContext } from "../../context/AuthContext.jsx";
// import { NavLink, Link } from "react-router-dom";
// import "../../assets/css/header.css"
// const navLinks = [
//   {
//     path: "/home",
//     display: "Home",
//   },
//   {
//     path: "/services",
//     display: "Services",
//   },
// ];
// const Header = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);

//   const { user, role, token } = useContext(AuthContext);

//   console.log("user : "<< user?.name);

//   const handleStickyHeader = () => {
//     console.log("user : "<< user?.name)
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("sticky__header");
//       } else {
//         headerRef.current.classList.remove("sticky__header");
//       }
//     });
//   };


//   useEffect(() => {
//     handleStickyHeader();

//     return window.removeEventListener("scroll", handleStickyHeader);
//   }, []);

//   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

//   return (
//     <header className="header flex items-center h-25 " ref={headerRef}>
//       <div className="container">
//         <div className="flex items-center justify-between">
//           {/* logo */}

//           <div className="header_logo"> 
//             <img  src={logo} alt="logo" />
//           </div>

//           {/* menu */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <ul className="menu flex items-center gap-[2.5rem]">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     className={(navClass) =>
//                       navClass.isActive
//                         ? "text-[#1bcc20 ] font-[600] text-[16px] leading-7"
//                         : "text-textColor font-[500] text-[16px] leading-7 hover:text-lime-500"
//                     }
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* nav right */}

//           <div className="flex items-center gap-4">
//             {token && user ? (
//         //  {     <div>
//         //         <Link
//         //           to={`${
//         //             role === "doctor"
//         //               ? "/doctors/profile/me"
//         //               : "/users/profile/me"
//         //           }`}
//         //         >
//         //           {user?.photo ? (
//         //             <figure className="w-[35px] h-[35px] rounded-full">
//         //               <img
//         //                 src={user?.photo}
//         //                 alt=""
//         //                 className="w-full rounded-full"
//         //               />
//         //             </figure>
//         //           ) : (
//         //             <h3>{user?.name}</h3>
//         //           )}
//         //         </Link>
//         //       </div>
//         //      }



//         <div className="show_name">
//           <h1>Welcome {user.name}  </h1>
          
//         </div>

//             ) : (
//               <Link to="login">
//                 <button className="bg-lime-500 text-white py-2 px-6 rounded-[50px] font-[600] h-[44px] flex items-center justify-center">
//                   Log In
//                 </button>
//               </Link>
//             )}

//             <span className="md:hidden" onClick={toggleMenu}>
//               <BiMenu className="w-6 h-6 cursor-pointer" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;












// ----------- above is awesome , ---- belwo is test for adding logout button and funcaitnllity -------

// import logo from "../../assets/images/main_logo3.png";
// import { useContext, useEffect, useRef } from "react";
// import { BiMenu } from "react-icons/bi";
// import { AuthContext } from "../../context/AuthContext.jsx";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import "../../assets/css/header.css";

// const navLinks = [
//   {
//     path: "/home",
//     display: "Home",
//   },
//   {
//     path: "/services",
//     display: "Services",
//   },
// ];

// const Header = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);
//   const navigate = useNavigate();

//   const { user, role, token } = useContext(AuthContext);

//   console.log("user : " + user?.name);

//   const handleStickyHeader = () => {
//     console.log("user : " + user?.name);
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("sticky__header");
//       } else {
//         headerRef.current.classList.remove("sticky__header");
//       }
//     });
//   };

//   useEffect(() => {
//     handleStickyHeader();
//     return () => window.removeEventListener("scroll", handleStickyHeader);
//   }, []);

//   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

//   // Logout handler to clear local storage and navigate to login
//   const logoutHandler = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <header className="header flex items-center h-25 " ref={headerRef}>
//       <div className="container">
//         <div className="flex items-center justify-between">
//           {/* logo */}
//           <div className="header_logo">
//             <img src={logo} alt="logo" />
//           </div>

//           {/* menu */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <ul className="menu flex items-center gap-[2.5rem]">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     className={(navClass) =>
//                       navClass.isActive
//                         ? "text-[#1bcc20 ] font-[600] text-[16px] leading-7"
//                         : "text-textColor font-[500] text-[16px] leading-7 hover:text-lime-500"
//                     }
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* nav right */}
//           <div className="flex items-center gap-4">
//             {token && user ? (
//               <div className="flex items-center">
//                 <div className="show_name mr-4">
//                   <h1>Welcome {user.name}</h1>
//                 </div>
//                 <button
//                   className="bg-red-500 text-white py-2 px-6 rounded-[50px] font-[600] h-[40px] flex items-center justify-center"
//                   onClick={logoutHandler}
//                 >
//                   Log Out
//                 </button>
//               </div>
//             ) : (
//               <Link to="login">
//                 <button className="bg-lime-500 text-white py-2 px-6 rounded-[50px] font-[600] h-[44px] flex items-center justify-center">
//                   Log In
//                 </button>
//               </Link>
//             )}

//             <span className="md:hidden" onClick={toggleMenu}>
//               <BiMenu className="w-6 h-6 cursor-pointer" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



// --- belwo is test to add loader between logout to navigate to login ------
import React, { useContext, useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";  
import { AuthContext } from "../../context/AuthContext.jsx";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../assets/images/illness.png";
import "../../assets/css/header.css";
import Loading from "../Loader/Loading.jsx";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current path using useLocation()

  const { user, token } = useContext(AuthContext);

  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  // Logout handler
  const logoutHandler = () => {
    setLoading(true); // Show loading spinner

    // Simulate a delay before logging out and navigating
    setTimeout(() => {
      localStorage.clear();
      setLoading(false);
      navigate("/login");
      window.location.reload();
    }, 3000); // 3-second delay before redirecting
  };

  // If loading is true, show the loading spinner
  if (loading) {
    return <Loading />;
  }

  return (
    <header className="header flex items-center h-25" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="header_logo w-32 h-32 overflow-hidden items-center flex content-center">
            <img src={logo} alt="logo" className="object-cover"/>
          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.5rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-[#1bcc20] font-[600] text-[16px] leading-7"
                        : "text-textColor font-[500] text-[16px] leading-7 hover:text-lime-500"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center">
                <div className="show_name mr-4">
                  <h1>Welcome {user.name}</h1>
                </div>
                <button
                  className="bg-red-500 text-white py-2 px-6 rounded-[50px] font-[600] h-[44px] flex items-center justify-center"
                  onClick={logoutHandler}
                >
                  Log Out
                </button>
              </div>
            ) : (
              // Only show the "Log In" button if not on the login page
              location.pathname !== "/login" && (
                <Link to="login">
                  <button className="bg-lime-500 text-white py-2 px-6 rounded-[50px] font-[600] h-[44px] flex items-center justify-center">
                    Log In
                  </button>
                </Link>
              )
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
