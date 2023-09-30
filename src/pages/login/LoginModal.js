import React, { useEffect, useState } from "react";
// import "./loginmodal.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  loginShowModal,
  loginHideModal,
} from "../../features/user/openLoginModalSlice";

const LoginModal = () => {
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  // const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated);
  const toggleModal = useSelector((state) => state.LoginModal.loginModalShow);
  useEffect(() => {
    console.log(toggleModal);
  }, [toggleModal]);

  const dispatch = useDispatch();

  return (
    <div>
      {toggleModal && (
        <div
          id="defaultModal"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.56)" }}
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100%] max-h-full"
        >
          <div class="cursor-default select-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-2xl max-h-full bg-red">
            <div className="flex justify-center">
              <div
                className="bg-[#F5F9F9] mt-[20px] text-2xl p-[40px] rounded-[10px] relative"
                style={{
                  "box-shadow": "rgba(21, 1, 1, 0.2)0px 20px 18px 10px",
                }}
              >
                <div className="md:text-[35px] mb-2 mt-3">
                  Welcome to Nitin Test Portal
                </div>
                <div className="detail_line text-lg">
                  Please enter you email & password correctly
                </div>
                <RiCloseFill
                  className="absolute top-3 right-3 cursor-pointer text-[30px] text-red-600"
                  onClick={() => dispatch(loginHideModal())}
                />
                <div className="mt-8">
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                      placeholder="john.doe@company.com"
                      required
                    />
                  </div>

                  <div class="mb-6">
                    <label
                      for="password"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                      placeholder="•••••••••"
                      required
                    />
                    <div className="text-right text-sm hover:text-blue-600">
                      Forget Password?
                    </div>
                  </div>
                </div>

                <button
                  className="bg-[#50A150] pt-1 pb-2 px-10 text-white font-sans tracking-tight mb-3 rounded-[30px] translate-x-[94%] md:translate-x-[129%] text-lg"
                  style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px]" }}
                >
                  Log in
                </button>

                <div className="text-center text-xl">
                  <div>-----------OR------------</div>
                  <div>
                    New User?{" "}
                    <span className="text-blue-700 font-medium tracking-tighter hover:underline">
                      Create Account/SignUp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
