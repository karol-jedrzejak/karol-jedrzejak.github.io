import React from "react";
import { useContext } from "react";

import { DataContext } from "./dataprovider/NaviData";

import Navigation from "./components/Navigation";
import Start from "./components/Start";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GenerateCV from "./components/GenerateCV";
import GenerateMotivationLetter from "./components/GenerateMotivationLetter";

const App = () => {
  const { state, actions } = useContext(DataContext);

  const current = state.navigation.find((element) => element.current === true);

  const componentsMap = {
    Start,
    AboutMe,
    Projects,
    Qualification,
    Skills,
    Contact,
  };

  const DynamicComponent = componentsMap[current.component];

  let languages = [null, "pl", "eng"];
  let types = [null, "programmer", "robotics", "manager", "panasonic"];

  let apptype = 1;
  let language = languages[1];
  let type = types[1];

  return (
    <div>
      {apptype == 1 ? (
        <div>
          <Navigation />
          <div className="bg-slate-100 mt-[64px] min-h-[calc(100vh-64px)] bg-cover bg-center bg-top bg-my-background-mobile lg:bg-my-background-browser">
            <DynamicComponent />
          </div>
        </div>
      ) : (
        <div>
          {apptype == 3 ? (
            <div>
              <GenerateMotivationLetter language={language} type={type} />
            </div>
          ) : (
            <div>
              <GenerateCV language={language} type={type} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
