// React Components
import { useState } from "react";
import { createContext } from "react";

// Create Context
export const DataContext = createContext({ state: {}, actions: {} });

function NaviData({ children }) {
  const [navigation, setNavigation] = useState([
    {
      id: 1,
      pl: "Start",
      eng: "Start",
      component: "Start",
      current: true,
    },
    {
      id: 2,
      pl: "O Mnie",
      eng: "About Me",
      component: "AboutMe",
      current: false,
    },
    {
      id: 3,
      pl: "Umiejętności",
      eng: "Skills",
      component: "Skills",
      current: false,
    },
    {
      id: 4,
      pl: "Kwalifikacje",
      eng: "Qualification",
      component: "Qualification",
      current: false,
    },
    {
      id: 5,
      pl: "Projekty",
      eng: "Projects",
      component: "Projects",
      current: false,
    },
    {
      id: 6,
      pl: "Kontakt",
      eng: "Contact",
      component: "Contact",
      current: false,
    },
  ]);
  const [language, setLanguage] = useState("eng");

  const handlerLanguage = (data) => {
    setLanguage(data);
  };

  const handlerNavigation = (current) => {
    const changedNavigation = [...navigation];
    changedNavigation.forEach((element) => {
      if (element.id === current) {
        element.current = true;
      } else {
        element.current = false;
      }
    });
    setNavigation(changedNavigation);
    window.scrollTo(0, 0);
  };

  const value = {
    state: { language, navigation },
    actions: { handlerLanguage, handlerNavigation },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default NaviData;
