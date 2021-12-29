import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import gmail from "../../assets/images/gmail.png";


export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-800 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-200">Let's get connected!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-200">
                Find us on any of these platforms, we respond in 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href = "https://www.instagram.com/its_vyvaha/" target="_blank">
                    <img src={instagram}></img>
                  </a>
                </button>
                <button
                  className="text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src={facebook}></img>
                </button>
                <button
                  className="text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href = "https://twitter.com/vyvaha" target="_blank">
                    <img src={twitter}></img>
                  </a>
                </button>
                <button
                  className="text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href = "mailto:support@vyvaha.com" target="_blank">
                    <img src={gmail}></img>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="/login"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="/register"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Vyvaha.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}