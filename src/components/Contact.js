import { useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { DataContext } from "./../dataprovider/NaviData";

import FacebookLogo from "./../assets/logos/Facebook";
import LinkedinLogo from "./../assets/logos/Linkedin";

const Contact = () => {
  const { state, actions } = useContext(DataContext);
  return (
    <>
      <div className="flex flex-col align-center justify-center text-center min-h-[calc(100vh-64px)] bg-slate-100/90">
        <div className="text-5xl text-cyan-800 my-4 font-extrabold animate-opacity">
          {state.language == "eng" ? "CONTACT" : "KONTAKT"}
        </div>
        <div className="animate-opacity">
          <div className="my-4">
            <div className="text-2xl text-cyan-800 my-2 font-bold">
              {state.language == "eng" ? "PHONE" : "TELEFON"}
            </div>
            <div>
              <a href="tel:+48693462163">+48 693 462 163</a>
            </div>
          </div>
          <div className="my-4">
            <div className="text-2xl text-cyan-800 my-2 font-bold">E-MAIL</div>
            <div>
              <a href="mailto:karol.jedrzejak@gmail.com">
                karol.jedrzejak@gmail.com
              </a>
            </div>
          </div>
          <div className="my-4">
            <div className="text-2xl text-cyan-800 my-2 font-bold">
              {state.language == "eng" ? "HOME CITY" : "MIASTO"}
            </div>
            <div>Poznań, {state.language == "eng" ? "POLAND" : "POLSKA"}</div>
          </div>
        </div>
        <div className="flex justify-center my-4 animate-opacity">
          <a
            className="opacity-60 hover:opacity-100 mx-4 transition duration-500 ease-in-out"
            href="https://www.facebook.com/kjzlo"
          >
            <FacebookLogo fill="fill-cyan-800" className="h-16 w-16" />
          </a>
          <a
            className="opacity-60 hover:opacity-100 mx-4 transition duration-500 ease-in-out"
            href="https://www.linkedin.com/in/karol-jedrzejak/"
          >
            <LinkedinLogo fill="fill-cyan-800" className="h-16 w-16" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
