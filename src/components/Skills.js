import { useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { DataContext } from "./../dataprovider/NaviData";

import skills_data from "./../data/skills.json";

const Skills = () => {
  const { state, actions } = useContext(DataContext);
  return (
    <>
      <div className="grid  grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4 lg:min-h-[calc(100vh-64px)] bg-slate-100/90">
        {skills_data.map((item, key) => {
          return (
            <div key={item.id} className="animate-opacity">
              <div className="my-3 text-4xl font-extrabold text-cyan-800 text-center">
                {item[state.language]}
              </div>
              <div className="mt-1 py-1 px-8">
                {item.data.map((data, subkey) => {
                  if (data.website) {
                    let percentage = data.scale_10 * 10;
                    let skill_class =
                      "bg-cyan-800 h-3 rounded-full animate-width";
                    skill_class += " fill-" + percentage;
                    percentage += "%";
                    return (
                      <div key={data.id} className="py-2">
                        <div className="font-bold pb-1">
                          {data.name[state.language]}
                        </div>{" "}
                        <div className="w-full bg-slate-300 rounded-full h-3">
                          <div
                            className={skill_class}
                            style={{ width: 0 }}
                          ></div>
                        </div>{" "}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
