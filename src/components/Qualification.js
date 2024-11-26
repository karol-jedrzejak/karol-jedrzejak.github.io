import { useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { DataContext } from "./../dataprovider/NaviData";

import education_data from "./../data/education.json";
import work_data from "./../data/work.json";
import courses_data from "./../data/courses.json";

const Qualification = () => {
  const { state, actions } = useContext(DataContext);
  return (
    <>
      <BrowserView>
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-slate-100/90 lg:min-h-[calc(100vh-64px)]">
          {/* EDUKACJA */}
          <div className="animate-opacity">
            <div className="my-8 text-4xl font-extrabold text-cyan-800 text-center">
              {state.language == "eng" ? "EDUCATION" : "EDUKACJA"}
            </div>
            {education_data.map((item) => {
              return (
                <div key={item.id} className="my-1 flex items-center">
                  <div className="text-center p-2 text-slate-500 font-bold">
                    {item.date_start}
                    <br />|<br />
                    {item.date_end}
                  </div>
                  <div className="ml-4 p-2">
                    <span className="font-bold">
                      {item.name[state.language]}
                    </span>
                    <br />
                    {item.subname[state.language]}
                  </div>
                </div>
              );
            })}
          </div>
          {/* PRACA */}
          <div className="row-span-3 animate-opacity animate-delay-1">
            <div className="my-8 text-4xl font-extrabold text-cyan-800 text-center">
              {state.language == "eng" ? <div>WORK</div> : <div>PRACA</div>}
            </div>
            {work_data.map((item) => {
              let end = item.date_end;
              if (!item.date_end) {
                if (state.language == "eng") {
                  end = "Now";
                } else {
                  end = "Dziś";
                }
              }
              return (
                <div key={item.id} className="flex items-center py-2">
                  <div className="text-center p-2 text-slate-500 font-bold">
                    {item.date_start}
                    <br />|<br />
                    {end}
                  </div>
                  <div className="ml-8 p-2">
                    <div className="text-slate-800 font-bold text-md">
                      "{item.company}" - {item.position[state.language]}
                    </div>
                    <ul className="list-outside list-disc mt-2 marker:text-cyan-800">
                      {item.duties.map((data, index) => {
                        if (data["website"]) {
                          return <li key={index}>{data[state.language]}</li>;
                        }
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          {/* KURSY */}
          <div className="row-span-2 animate-opacity animate-delay-0_5">
            <div className="my-8 text-4xl font-extrabold text-cyan-800 text-center">
              {state.language == "eng" ? "COURSES" : "KURSY:"}
            </div>
            {courses_data.map((item) => {
              return (
                <div key={item.id} className="my-1 flex items-center">
                  <div className="text-center p-2 text-slate-500 font-bold">
                    {item.date_end}
                  </div>
                  <div className="ml-4 p-2 font-bold">
                    {item.name[state.language]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        {" "}
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-slate-100/90 lg:min-h-[calc(100vh-64px)]">
          {/* EDUKACJA */}
          <div className="animate-opacity">
            <div className="my-8 text-4xl font-extrabold text-cyan-800 text-center">
              {state.language == "eng" ? "EDUCATION" : "EDUKACJA"}
            </div>
            {education_data.map((item) => {
              return (
                <div key={item.id} className="my-1">
                  <div className="text-center p-2 text-slate-500 font-bold">
                    {item.date_start} - {item.date_end}
                  </div>
                  <div className="ml-4 p-2">
                    <span className="font-bold">
                      {item.name[state.language]}
                    </span>
                    <br />
                    {item.subname[state.language]}
                  </div>
                </div>
              );
            })}
          </div>
          {/* PRACA */}
          <div className="row-span-3 animate-opacity animate-delay-1">
            <div className="my-8 text-4xl font-extrabold text-cyan-800 text-center">
              {state.language == "eng" ? <div>WORK</div> : <div>PRACA</div>}
            </div>
            {work_data.map((item) => {
              let end = item.date_end;
              if (!item.date_end) {
                if (state.language == "eng") {
                  end = "Now";
                } else {
                  end = "Dziś";
                }
              }
              return (
                <div key={item.id} className="py-2">
                  <div className="text-center p-2 text-slate-500 font-bold">
                    {item.date_start} - {end}
                  </div>
                  <div className="ml-8 p-2">
                    <div className="text-slate-800 font-bold text-md">
                      "{item.company}" - {item.position[state.language]}
                    </div>
                    <ul className="list-outside list-disc mt-2 marker:text-cyan-800">
                      {item.duties.map((data, index) => {
                        if (data["website"]) {
                          return <li key={index}>{data[state.language]}</li>;
                        }
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          {/* KURSY */}
          <div className="row-span-2 animate-opacity animate-delay-0_5">
            <div className="my-8 text-4xl font-extrabold text-cyan-800 text-center">
              {state.language == "eng" ? "COURSES" : "KURSY:"}
            </div>
            {courses_data.map((item) => {
              return (
                <div key={item.id} className="my-1 flex items-center">
                  <div className="text-center p-2 text-slate-500 font-bold">
                    {item.date_end}
                  </div>
                  <div className="ml-4 p-2 font-bold">
                    {item.name[state.language]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default Qualification;
