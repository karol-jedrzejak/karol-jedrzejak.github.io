import { useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { DataContext } from "./../dataprovider/NaviData";

import about_me_data from "./../data/aboutme.json";

import background_photo from "./../assets/photos/about_1.jpg";

import CVENG from "./../assets/CV/Karol Jędrzejak - CV - ENG - WD.pdf";
import CVPL from "./../assets/CV/Karol Jędrzejak - CV - PL - WD.pdf";

const AboutMe = () => {
  const { state, actions } = useContext(DataContext);

  return (
    <>
      <BrowserView>
        <div
          className="min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 bg-cover bg-center bg-top"
          style={{ backgroundImage: `url(${background_photo})` }}
        >
          <div className="h-full lg:bg-cover lg:bg-center lg:bg-my-background-mobile">
            <div className="h-full flex flex-col justify-between bg-slate-100/90 p-8">
              <div className="mt-16 mb-8 text-4xl font-extrabold text-cyan-800 text-center animate-opacity">
                {state.language == "eng" ? "ABOUT ME" : "O MNIE"}
              </div>
              <div className="animate-opacity animate-delay-0_5">
                {about_me_data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="my-8
                      indent-4
                      text-lg
                      lg:text-lg
                      xl:text-lg
                      2xl:text-2xl
                      "
                    >
                      {item[state.language]}
                    </div>
                  );
                })}
              </div>
              <div className="text-center mb-16 animate-opacity animate-delay-1">
                <a
                  className="font-bold bg-cyan-800 hover:bg-slate-800 text-slate-100 rounded-full px-4 py-2 mr-4 transition duration-700 ease-in-out"
                  href={CVENG}
                >
                  CV ENG
                </a>
                <a
                  className="font-bold bg-cyan-800 hover:bg-slate-800 text-slate-100 rounded-full px-4 py-2 ml-4 transition duration-700 ease-in-out"
                  href={CVPL}
                >
                  CV PL
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${background_photo})` }}
            className="bg-slate-100/90 bg-cover bg-center bg-top hidden lg:block lg:row-start-1"
          ></div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          className="min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 bg-cover bg-center bg-top"
          style={{ backgroundImage: `url(${background_photo})` }}
        >
          <div className="h-full lg:bg-cover lg:bg-center lg:bg-top lg:bg-my-background-mobile">
            <div className="h-full flex flex-col justify-between bg-slate-100/90 p-8">
              <div className="mt-16 mb-8 text-4xl font-extrabold text-cyan-800 text-center animate-opacity">
                {state.language == "eng" ? "ABOUT ME" : "O MNIE"}
              </div>
              <div className="animate-opacity animate-delay-0_5">
                {about_me_data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="my-8
                      indent-4
                      text-lg
                      lg:text-xl
                      xl:text-xl
                      2xl:text-2xl
                      "
                    >
                      {item[state.language]}
                    </div>
                  );
                })}
              </div>
              <div className="text-center mb-16 animate-opacity animate-delay-1">
                <a
                  className="font-bold bg-cyan-800 hover:bg-slate-800 text-slate-100 rounded-full px-4 py-2 mr-4 transition duration-700 ease-in-out"
                  href={CVENG}
                >
                  CV ENG
                </a>
                <a
                  className="font-bold bg-cyan-800 hover:bg-slate-800 text-slate-100 rounded-full px-4 py-2 ml-4 transition duration-700 ease-in-out"
                  href={CVPL}
                >
                  CV PL
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${background_photo})` }}
            className="bg-cover bg-center bg-top hidden lg:block lg:row-start-1"
          ></div>
        </div>
      </MobileView>
    </>
  );
};

export default AboutMe;
