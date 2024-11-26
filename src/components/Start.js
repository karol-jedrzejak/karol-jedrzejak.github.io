import { useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { DataContext } from "./../dataprovider/NaviData";

import FacebookLogo from "./../assets/logos/Facebook";
import LinkedinLogo from "./../assets/logos/Linkedin";

import portret from "./../assets/photos/portret_1.jpg";

//import background_code from "./../assets/backgrounds/coding.jpg";

const Start = () => {
  const { state, actions } = useContext(DataContext);
  return (
    <>
      <BrowserView>
        <div className="min-h-[calc(100vh-64px)] lg:grid grid-cols-1 lg:grid-cols-2 gap-4 bg-slate-100/90">
          <div className="flex justify-center align-center flex-col">
            <div className="my-8 text-4xl lg:text-5xl font-extrabold text-center animate-opacity  animate-delay-0_5">
              <span className="text-slate-800">KAROL</span>{" "}
              <span className="text-cyan-800">JĘDRZEJAK</span>
            </div>
            <div className="my-8 text-3xl font-extrabold text-center animate-opacity animate-delay-1">
              WEB DEVELOPER
            </div>
            <div className="m-8 flex justify-center align-center animate-opacity animate-delay-1_5">
              <ul
                className="list-inside list-disc
                text-lg
                lg:text-xl
                xl:text-xl
                2xl:text-2xl
                w-fit"
              >
                <li>BackEnd (Laravel, Symfony, PHP)</li>
                <li>FrontEnd (React, JavaScipt, Bootstrap, Tailwind, SCSS)</li>
                <li>
                  {state.language == "eng" ? "Databases" : "Bazy Danych"}{" "}
                  (MYSQL)
                </li>
                <li>
                  {state.language == "eng"
                    ? "Graphics processing"
                    : "Obróbka grafiki"}{" "}
                  (Corel Draw, Photo Paint)
                </li>
                <li>
                  {state.language == "eng"
                    ? "Video processing"
                    : "Obróbka video"}{" "}
                  (Sony Vegas, Resolve)
                </li>
              </ul>
            </div>
            <div className="my-4 flex justify-center animate-opacity animate-delay-2">
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
          <div
            className="lg:h-[calc(100vh-64px)] bg-top bg-center bg-cover animate-opacity"
            style={{ backgroundImage: `url(${portret})` }}
          ></div>
          <img
            className="p-8 w-screen rounded-full block lg:hidden"
            src={require(`./../assets/photos/portret_mobile_1.jpg`)}
          />
        </div>
      </BrowserView>
      <MobileView>
        <div className="bg-slate-100/90">
          <div className="flex justify-center align-center flex-col">
            <div className="my-8 text-5xl font-extrabold text-center animate-opacity animate-delay-0_5">
              <span className="text-slate-800">KAROL</span>{" "}
              <span className="text-cyan-800">JĘDRZEJAK</span>
            </div>
            <div className="my-8 text-3xl font-extrabold text-center animate-opacity animate-delay-1">
              WEB DEVELOPER
            </div>
            <div className="m-8 flex justify-center align-center animate-opacity animate-delay-1_5">
              <ul
                className="list-inside list-disc
                text-lg
                lg:text-xl
                xl:text-xl
                2xl:text-2xl
                w-fit"
              >
                <li>BackEnd (Laravel, Symfony, PHP)</li>
                <li>FrontEnd (React, JavaScipt, Bootstrap, Tailwind, SCSS)</li>
                <li>
                  {state.language == "eng" ? "Databases" : "Bazy Danych"}{" "}
                  (MYSQL)
                </li>
                <li>
                  {state.language == "eng"
                    ? "Graphics processing"
                    : "Obróbka grafiki"}{" "}
                  (Corel Draw, Photo Paint)
                </li>
                <li>
                  {state.language == "eng"
                    ? "Video processing"
                    : "Obróbka video"}{" "}
                  (Sony Vegas, Resolve)
                </li>
              </ul>
            </div>
            <div className="my-4 flex justify-center animate-opacity animate-delay-2">
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

          {/* IMAGE */}
          <img
            className="p-4 w-screen rounded-full"
            src={require(`./../assets/photos/portret_mobile_1.jpg`)}
          />
        </div>
      </MobileView>
    </>
  );
};

export default Start;
