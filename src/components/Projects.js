import { useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { DataContext } from "./../dataprovider/NaviData";

import projects_data from "./../data/projects.json";

const Projects = () => {
  const { state, actions } = useContext(DataContext);

  let gridLayout = "mx-4 py-4 grid grid-cols-1 gap-8";
  if (isBrowser) {
    gridLayout =
      "mx-4 py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8";
  }
  return (
    <>
      <div className="bg-slate-100/90">
        <div className={gridLayout}>
          {projects_data.toReversed().map((item) => {
            let present = "Teraz";
            let DemoName = "DEMO";
            let CodeName = "KOD";
            if (state.language == "eng") {
              present = "Ongoing";
              CodeName = "CODE";
            }

            let has_link = true;
            let linkUrl = item.demo_link;
            let linkName = DemoName;
            if (item.code_link) {
              linkUrl = item.code_link;
              linkName = CodeName;
            }
            if (!item.code_link && !item.demo_link) {
              has_link = false;
            }

            let dates = item.date_start + " - " + item.date_end;
            if (!item.date_end) {
              dates = item.date_start + " - " + present;
            }
            if (item.date_start == item.date_end) {
              dates = item.date_end;
            }

            return (
              <div
                key={item.id}
                className="border border-cyan-800 border-opacity-20 bg-slate-100 shadow-md p-4 justify-between rounded-lg flex flex-col justify-between"
              >
                <div className="mb-4">
                  <img
                    className="w-full rounded-lg mb-4"
                    src={require(`./../assets/projects/${item.id}.jpg`)}
                  />
                  <h1 className="text-2xl text-cyan-800 font-extrabold mb-2">
                    {item.name[state.language]}
                  </h1>
                  <div>{item.description[state.language]}</div>
                  <div className="text-slate-500 italic my-2">
                    Tech:{" "}
                    {item.tech.map((tech_item, index) => {
                      return <span key={index}>{tech_item}, </span>;
                    })}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {has_link ? (
                    <a
                      className="font-medium bg-cyan-800 hover:bg-slate-800 text-slate-100 rounded-full px-4 py-2 transition duration-700 ease-in-out"
                      href={linkUrl}
                    >
                      {linkName}
                    </a>
                  ) : (
                    <div className="font-medium bg-gray-500 text-slate-100 rounded-full px-4 py-2">
                      {state.language == "eng"
                        ? "NOT AVAILABLE"
                        : "NIEDOSTĘPNE"}
                    </div>
                  )}
                  <div className="text-slate-800 font-medium">{dates}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
