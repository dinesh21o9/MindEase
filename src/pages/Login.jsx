import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../config";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 md:px-0">
      <div className=" w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10">
        <div>
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ">
            Hello! <span className="text-[#0067FF]">Welcome</span>
          </h3>

          <form className="py-4 md:py-0">
            <div className="mb-5 px-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor focus:outline-none placeholder:text-textColor
                cursor-pointer"
              />
            </div>

            <div className="mb-5 px-5">
              <input
                type="password"
                placeholder="Enter Your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor focus:outline-none placeholder:text-textColor
              cursor-pointer"
              />
            </div>

            <div className="mt-7 px-5">
              <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                Login
              </button>
            </div>

            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account?
              <Link
                to="/register"
                className="text-primaryColor font-medium ml-1"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
