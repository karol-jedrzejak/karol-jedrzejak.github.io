import "./generatecv.css";

import about_me_data from "./../data/aboutme.json";
import skills_data from "./../data/skills.json";
import education_data from "./../data/education.json";
import work_data from "./../data/work.json";
import courses_data from "./../data/courses.json";

import IconPhone from "./../assets/logos/IconPhone";
import IconMail from "./../assets/logos/IconMail";
import IconLocation from "./../assets/logos/IconLocation";
import IconWebsite from "./../assets/logos/IconWebsite";

import Linkedin from "./../assets/logos/Linkedin";

const GenerateCV = (props) => {
  let language = props.language;
  let type = props.type;

  return (
    <>
      <div className="h-[297mm] w-[210mm] flex flex-col flex-wrap">
        <aside className="h-[297mm] w-[60mm] rounded-t-[45mm] rounded-b-[5mm] m-[3mm] p-[2mm]">
          <div>
            <img
              className="h-[58mm] w-[58mm] relative rounded-[35mm] border-white"
              src={require(`./../assets/photos/portret_mobile_1.jpg`)}
            />
            <ul className="mt-2">
              <li className="my-1">
                <div className="flex items-center">
                  <IconPhone fill="fill-cyan-800" className="h-8 w-8 mr-2" />
                  <a href="tel:+48 693 462 163">+48 693 462 163</a>
                </div>
              </li>
              <li className="my-1">
                <div className="flex items-center">
                  <IconMail fill="fill-cyan-800" className="h-8 w-8 mr-2" />
                  <a href="mailto:karol.jedrzejak@gmail.com">
                    karol.jedrzejak@gmail.com
                  </a>
                </div>
              </li>
              <li className="my-1">
                <div className="flex items-center">
                  <IconLocation fill="fill-cyan-800" className="h-8 w-8 mr-2" />
                  Os. Tysiąclecia, Poznań
                </div>
              </li>
            </ul>
            <hr className="my-2 border-t-slate-800 border-t-1" />
            <div className="my-2">
              {language == "eng"
                ? "Date Of Birth – 1988"
                : "Rok Urodzenia – 1988"}
            </div>
            <div className="my-2">
              {language == "eng"
                ? "Citizenshih – Polish"
                : "Obywatelstwo – Polskie"}
            </div>
            <hr className="my-2 border-t-slate-800 border-t-1" />

            {/*  SKILLS */}
            <div>
              {skills_data.map((item) => {
                return (
                  <div key={item.id} className="">
                    {item["eng"] == "ROBOTICS MANAGER" ? (
                      <div className="text-sm font-bold text-cyan-800 mt-2">
                        {language == "eng" ? "SKILLS" : "UMIEJĘTNOŚCI"}:
                      </div>
                    ) : (
                      ""
                    )}
                    {item["eng"] == "BACK END" ? (
                      <div className="text-sm font-bold text-cyan-800 mt-2">
                        {language == "eng" ? "SKILLS" : "UMIEJĘTNOŚCI"}:
                      </div>
                    ) : (
                      ""
                    )}
                    {item["eng"] == "LANGUAGES" ? (
                      <div className="text-sm font-bold text-cyan-800 mt-2">
                        {item[language]}:
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="">
                      {item.data.map((data) => {
                        if (data[type]) {
                          let percentage = data.scale_10 * 10 + "%";
                          return (
                            <div
                              key={data.id}
                              className="py-1 px-1 flex items-center justify-between"
                            >
                              <div className="">{data.name[language]}</div>
                              <div className="w-16 bg-slate-300 rounded-full h-2 dark:bg-gray-700">
                                <div
                                  className="bg-cyan-800 h-2 rounded-full"
                                  style={{ width: percentage }}
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
            {/*  SKILLS */}
          </div>
          <div>
            <ul className="mb-2">
              <li className="my-2">
                <div className="flex items-center">
                  <Linkedin fill="fill-cyan-800" className="h-8 w-8 mr-2 " />
                  <a
                    href="https://www.linkedin.com/in/karol-jedrzejak/"
                    className="text-xs"
                  >
                    linkedin.com/in/karol-jedrzejak/
                  </a>
                </div>
              </li>
              <li className="mt-2">
                <div className="flex items-center">
                  <IconWebsite fill="fill-cyan-800" className="h-8 w-8 mr-2" />
                  <a
                    href="https://karol-jedrzejak.github.io/"
                    className="text-xs"
                  >
                    karol-jedrzejak.github.io/
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <header>
          <h1 className="text-3xl">KAROL JĘDRZEJAK</h1>
        </header>
        <main>
          <div className="font-extrabold text-cyan-800">
            {language == "eng" ? "EDUCATION" : "EDUKACJA"}
          </div>
          <hr className="border-t-slate-800 border-t-1" />
          {education_data.map((item) => {
            return (
              <div key={item.id} className="flex items-center py-1">
                <div className="text-center text-slate-500 font">
                  {item.date_start} - {item.date_end}
                </div>
                <div className="ml-3">
                  <span className="font-bold">{item.name[language]}</span>
                  <br />
                  {item.title[language]}
                </div>
              </div>
            );
          })}
          <div className="font-extrabold text-cyan-800 mt-2">
            {language == "eng"
              ? "EMPLOYMENT EXPERIENCE"
              : "DOŚWIADCZENIE ZAWODOWE"}
          </div>
          <hr className="border-t-slate-800 border-t-1" />
          {work_data.map((item) => {
            let end = item.date_end;
            if (!item.date_end) {
              if (language == "eng") {
                end = "Now";
              } else {
                end = "Dziś";
              }
            }
            return (
              <div>
                <div key={item.id} className="flex items-center py-1">
                  <div className="text-center text-slate-500">
                    {item.date_start} - {end}
                  </div>
                  <div className="ml-3">
                    <span className="font-bold">"{item.company}"</span>
                    <br />
                    <span>{item.position[language]}</span>
                  </div>
                </div>

                <div>
                  <ul className="list-outside list-disc ml-4 mt-2 marker:text-cyan-800">
                    {item.duties.map((data, index) => {
                      if (data[type]) {
                        return (
                          <li key={index} className="text-sm">
                            {data[language]}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
          <div className="font-extrabold text-cyan-800 mt-2">
            {language == "eng" ? "COURSES" : "KURSY"}
          </div>
          <hr className="border-t-slate-800 border-t-1" />
          {courses_data.map((item) => {
            return (
              <div key={item.id} className="flex items-center">
                <div className="text-center text-slate-500 font">
                  {item.date_end}
                </div>
                <div className="ml-2 text-sm">
                  <span className="">{item.name[language]}</span>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default GenerateCV;
