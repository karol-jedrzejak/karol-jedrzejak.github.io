import "./generatecv.css";

import IconPhone from "./../assets/logos/IconPhone";
import IconMail from "./../assets/logos/IconMail";
import IconWebsite from "./../assets/logos/IconWebsite";
import Linkedin from "./../assets/logos/Linkedin";

const GenerateMotivationLetter = (props) => {
  let language = props.language;
  let type = props.type;

  return (
    <>
      <div className="h-[297mm] w-[210mm] flex flex-col flex-wrap">
        <div className="h-[297mm] w-[75mm]">
          <div className="bg-slate-200 p-4 h-[135mm] rounded-br-[12mm]">
            <img
              className="h-[80mm] w-[80mm] absolute top-[5mm] rounded-[40mm] border-white border-8"
              src={require(`./../assets/photos/portret_mobile_1.jpg`)}
            />
            <ul className="pl-2">
              <li className="pt-[85mm] mb-1">
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
              <li className="my-2">
                <div className="flex items-center">
                  <Linkedin fill="fill-cyan-800" className="h-8 w-8 mr-2 " />
                  <a
                    href="https://www.linkedin.com/in/karol-jedrzejak/"
                    className="text-sm"
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
                    className="text-sm"
                  >
                    karol-jedrzejak.github.io/
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="h-[297mm] w-[135mm] ">
          <div className="text-5xl font-extrabold text-right py-8 px-7">
            <span className="text-slate-800">KAROL </span>
            <span className="text-cyan-800">JĘDRZEJAK</span>
          </div>
          <div className="text-3xl text-slate-800 font-bold text-right py-8 px-7">
            {language == "eng" ? "COVER LETTER" : "LIST MOTYWACYJNY"}
          </div>
          {type == "programmer" ? (
            <div>
              {language == "eng" ? (
                /* PROGRAMISTA ENG */
                <div className="py-8 px-6 text-sm">
                  <div className="indent-8 text-justify">
                    Dear Sirs. I am interested in your job offer. I am a
                    graduate of the Poznań University of Technology in
                    Automation and Robotics and currently i work as a "Head of
                    Programming Department" at Technika Spawalnicza.
                  </div>
                  <div className="indent-8 text-justify">
                    My adventure with programming began in high school, where I
                    attended a class with an IT profile. Then, after graduating,
                    I began my studies in Automation and Robotics at the Faculty
                    of Computer Science at the Poznań University of Technology.
                    During my studies, I worked at "Mały Inżynier", where I
                    taught programming and robotics for children. After
                    graduating and obtaining a Master of Science in Engineering,
                    I started working at Pebos IT as an IT technician. In this
                    job, I was programming AVR microcontrollers, developing
                    sales application (in PHP) and do IT helpdesk. The next
                    stage of my professional career is the company "Technika
                    spawalnicza" where I currently work. During the first years
                    of my work I was mainly involved in robotics - programming
                    robots, conducting programming training, robots service,
                    developing application for offline programming of robots by
                    creating scripts (C++). After some time in the company,
                    there was a need to implement a CRM application which I
                    designed and implemented. I wrote the back-end using Laravel
                    and PHP and MYSQL and the front-end using Bootstrap and
                    JavaScript. I also added integration with the Leaflet Open
                    Street Maps api and the NBP api. The application also
                    includes preparation of price offer files in PDF. Since
                    2024, I have also been working as a volunteer at the
                    "Fundacji Kompetencji cyfrowych" creating websites in
                    Wordpress. Outside of work, I try to expand my knowledge of
                    programming by participating in courses and learning at home
                    (Symfony, React){" "}
                  </div>
                  <div className="indent-8 text-justify">
                    I am interested in working both full-time and part-time
                    (additional work). I can start working full-time 3 months
                    after the decision to hire me (I am subject to a 3-month
                    notice period with my current employer with the option of
                    potentially shortening it). I can start working part-time
                    (additional work) immediately. I would be grateful for the
                    opportunity to present my candidacy during a direct
                    interview.
                  </div>
                  <div className="p-6 ml-[70mm] text-base">
                    <div>Best regards</div>
                    <div className="font-bold">Karol Jędrzejak</div>
                  </div>
                </div>
              ) : (
                /* PROGRAMISTA PL */
                <div className="py-8 px-6 text-sm">
                  <div className="indent-8 text-justify">
                    Szanowni Państwo. Jestem zainteresowany Państwa ofertą
                    pracy. Jestem absolwentem Politechniki Poznańskiej na
                    kierunku Automatyka i Robotyka i aktualnie pracuje na
                    stanowisku „Kierownik Działu Programowania” w firmie
                    Technika Spawalnicza.
                  </div>
                  <div className="indent-8 text-justify">
                    Moja przygoda z programowaniem rozpoczęła się w Liceum
                    Ogólnokształcącym gdzie uczęszczałem do klasy o profilu
                    informatycznym. Następnie po jej ukończeniu rozpocząłem
                    studia na kierunku Automatyka i Robotka na wydziale
                    informatyki Politechniki Poznańskiej. W trakcie studiów
                    pracowałem w firmie Mały Inżynier gdzie prowadziłem zajęcia
                    z programowania i robotyki dla dzieci. Po ukończeniu studiów
                    i uzyskaniu tytułu magistra inżyniera rozpocząłem pracę w
                    firmie Pebos IT na stanowisku technika informatyka. W tej
                    pracy zajmowałem się min. programowaniem mikrokontrolerów
                    AVR, rozwijaniem aplikacji sprzedażowej (w PHP) oraz
                    helpdeskiem IT. Kolejnym etapem mojej kariery zawodowej jest
                    firma Technika spawalnicza w której obecnie pracuję. Przez
                    pierwsze lata pracy zajmowałem się głównie robotyką -
                    programowanie robotów, prowadzenie szkoleń z programowania,
                    serwis robotów, rozwijanie aplikacji do programowania
                    offline robotów przez tworzenie skryptów (C++). Po czasie w
                    firmie pojawiała się potrzeba wdrożenia aplikacji CRM którą
                    zaprojektowałem i wdrożyłem. Back-End napisałem z
                    wykorzystaniem Laravela, PHP i MYSQL a Front-end z użyciem
                    Bootstrapa i JavaScript. Do tego dołożyłem integrację z api
                    Leaflet Open Street Maps i api NBP. Aplikacja obejmuje
                    również przygotowanie przygotowaniem plików wyceny ofert w
                    PDF. Od 2024 roku pracuję również jako wolantariusz w
                    "Fundacji Kompetencji cyfrowych" tworząć strony w
                    Wordpressie. Poza czasem pracy staram się poszerzyć swoją
                    wiedzę z zakresu programowania przez uczestnictwo w kursach
                    i naukę w domu (min, Symfony, React).
                  </div>
                  <div className="indent-8 text-justify">
                    Interesuje mnie praca zarówno w pełnym wymiarze godzin jak i
                    jako część etatu (praca dodatkowa). Pracę w pełnym wymiarze
                    mogę rozpocząć po 3 miesiącach od decyzji o przyjęciu mojej
                    osoby (obowiązuje mnie 3 miesięczny okres wypowiedzenia u
                    obecnego pracodawcy z opcją potencjalnego skrócenia). Pracę
                    jako część etatu (praca dodatkowa) mogę zacząć od zaraz.
                    Będę wdzięczny za umożliwienie mi przedstawienia swojej
                    kandydatury w trakcie bezpośredniej rozmowy kwalifikacyjnej.
                  </div>
                  <div className="p-6 ml-[70mm] text-base">
                    <div>Z Poważaniem</div>
                    <div className="font-bold">Karol Jędrzejak</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
          {type == "robotics" ? (
            <div>
              {language == "eng" ? (
                /* ROBOTYK ENG */
                <div className="py-8 px-6 text-sm">
                  <div className="indent-8 text-justify">
                    Dear Sirs. I am interested in your job offer. I am a
                    graduate of the Poznań University of Technology in
                    Automation and Robotics and currently work as "Head of
                    Programming Department" at Technika Spawalnicza.
                  </div>
                  <div className="indent-8 text-justify">
                    My adventure with programming and robotics began in High
                    School where I attended a class with an IT profile. Then,
                    after graduation, I began studies in the field of Automation
                    and Robotics at the Faculty of Computer Science at the
                    Poznań University of Technology. During my studies, I worked
                    at Mały Inżynier, where I taught programming and robotics
                    classes for children. After graduating and obtaining a
                    Master of Science degree in engineering, I started working
                    at Pebos IT as an IT technician. In this job, I was
                    responsible for, among other things, programming AVR
                    microcontrollers, developing a sales application (in PHP)
                    and IT helpdesk. The next stage of my professional career is
                    the company Technika spawalnicza where I currently work. My
                    duties at work include, among others, programming offline
                    and online of robots, conducting training in offline and
                    online programming, calibration of robotic systems for
                    offline programming, robot service, developing application
                    for offline robot programming (DTPS) by creating scripts
                    (C++). Currently, in addition to the robotics, I am involved
                    in writing and implementing CRM web application. I wrote the
                    back-end using Laravel, PHP and MYSQL and the front-end
                    using Bootstrap and JavaScript.
                  </div>
                  <div className="indent-8 text-justify">
                    I am interested in full-time work. I can start working 3
                    months after the decision to hire me (I am subject to a
                    3-month notice period with the option of potential
                    shortening at my current employer). I would be grateful for
                    allowing me to present my candidacy during a direct job
                    interview.{" "}
                  </div>
                  <div className="p-6 ml-[70mm] text-base">
                    <div>Best regards</div>
                    <div className="font-bold">Karol Jędrzejak</div>
                  </div>
                </div>
              ) : (
                /* ROBOTYK PL */
                <div className="py-8 px-6 text-sm">
                  <div className="indent-8 text-justify">
                    Szanowni Państwo. Jestem zainteresowany Państwa ofertą
                    pracy. Jestem absolwentem Politechniki Poznańskiej na
                    kierunku Automatyka i Robotyka i aktualnie pracuje na
                    stanowisku „Kierownik Działu Programowania” w firmie
                    Technika Spawalnicza.
                  </div>
                  <div className="indent-8 text-justify">
                    Moja przygoda z programowaniem i robotyką rozpoczęła się w
                    Liceum Ogólnokształcącym gdzie uczęszczałem do klasy o
                    profilu informatycznym. Następnie po jej ukończeniu
                    rozpocząłem studia na kierunku Automatyka i Robotka na
                    wydziale informatyki Politechniki Poznańskiej. W trakcie
                    studiów pracowałem w firmie Mały Inżynier gdzie prowadziłem
                    zajęcia z programowania i robotyki dla dzieci. Po ukończeniu
                    studiów i uzyskaniu tytułu magistra inżyniera rozpocząłem
                    pracę w firmie Pebos IT na stanowisku technika informatyka.
                    W tej pracy zajmowałem się min. programowaniem
                    mikrokontrolerów AVR, rozwijaniem aplikacji sprzedażowej (w
                    PHP) oraz helpdeskiem IT. Kolejnym etapem mojej kariery
                    zawodowej jest firma Technika spawalnicza w której obecnie
                    pracuję. Do obowiązków w mojej pracy należy min.
                    programowanie robotów offline i online, prowadzenie szkoleń
                    z programowania offline i online, kalibracja stanowisk
                    zrobotyzowanych do oprogramowania offline, serwis robotów,
                    rozwijanie aplikacji do programowania offline robotów (DTPS)
                    przez tworzenie skryptów (C++). Obecnie oprócz robotki
                    zajmuje się w firmie pisaniem i wdrożeniem aplikacji webowej
                    CRM. Back-End napisałem z wykorzystaniem Laravela, PHP i
                    MYSQL a Front-end z użyciem Bootstrapa i JavaScript.
                  </div>
                  <div className="indent-8 text-justify">
                    Interesuje mnie praca w pełnym wymiarze godzin. Pracę mogę
                    rozpocząć po 3 miesiącach od decyzji o przyjęciu mojej osoby
                    (obowiązuje mnie 3 miesięczny okres wypowiedzenia u obecnego
                    pracodawcy z opcją potencjalnego skrócenia). Będę wdzięczny
                    za umożliwienie mi przedstawienia swojej kandydatury w
                    trakcie bezpośredniej rozmowy kwalifikacyjnej.
                  </div>
                  <div className="p-6 ml-[70mm] text-base">
                    <div>Z Poważaniem</div>
                    <div className="font-bold">Karol Jędrzejak</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
          {type == "manager" ? (
            <div>
              {language == "eng" ? (
                /* MANAGER ENG */
                <div className="py-8 px-6 text-sm">
                  <div className="indent-8 text-justify">
                    Dear Sirs. I am interested in your job offer. I am a
                    graduate of the Poznań University of Technology in
                    Automation and Robotics and currently i work as "Head of
                    Programming Department" at Technika Spawalnicza.
                  </div>
                  <div className="indent-8 text-justify">
                    My adventure with programming & robotics began in High
                    School where I attended a class with an IT profile. Then,
                    after graduating, I began my studies in the field of
                    Automation and Robotics at the Faculty of Computer Science
                    of the Poznań University of Technology. During my studies, I
                    worked at Mały Inżynier, where I taught programming and
                    robotics classes for children. After graduating and
                    obtaining a Master of Science in Engineering, I started
                    working at Pebos IT as an IT technician. In this job, I was
                    involved in programming AVR microcontrollers, developing
                    sales applications (in PHP) and IT helpdesk. The next stage
                    of my professional career is Technika spawalnicza, where I
                    currently work. During the first years of my work, I was
                    mainly involved in robotics - programming robots, conducting
                    programming training, servicing robots, developing
                    applications for offline programming of robots by creating
                    scripts (C++). After some time in the company, my role in
                    the company changed. There was a need to implement a CRM
                    application, which I designed and implemented. Back-End was
                    written using Laravel, PHP and MYSQL and Front-End using
                    Bootstrap and JavaScript. Additionally, due to my
                    experience, I coordinate and supervise the robot programming
                    department as a senior programmer. Additionally, I also sell
                    and supervise the implementation of robotic welding stations
                    - business talks, offering, preparation of 3D layouts,
                    reference visits, project management, supervision of the
                    work of individual departments.
                  </div>
                  <div className="indent-8 text-justify">
                    I am interested in full-time work. I can start working 3
                    months after the decision to hire me (I am subject to a
                    3-month notice period with the option of potential
                    shortening at my current employer). I would be grateful for
                    allowing me to present my candidacy during a direct job
                    interview.{" "}
                  </div>
                  <div className="p-6 ml-[70mm] text-base">
                    <div>Best regards</div>
                    <div className="font-bold">Karol Jędrzejak</div>
                  </div>
                </div>
              ) : (
                /* MANAGER PL */
                <div className="py-8 px-6 text-sm">
                  <div className="indent-8 text-justify">
                    Szanowni Państwo. Jestem zainteresowany Państwa ofertą
                    pracy. Jestem absolwentem Politechniki Poznańskiej na
                    kierunku Automatyka i Robotyka i aktualnie pracuje na
                    stanowisku „Kierownik Działu Programowania” w firmie
                    Technika Spawalnicza.
                  </div>
                  <div className="indent-8 text-justify">
                    Moja przygoda z programowaniem i robotyką rozpoczęła się w
                    Liceum Ogólnokształcącym gdzie uczęszczałem do klasy o
                    profilu informatycznym. Następnie po jej ukończeniu
                    rozpocząłem studia na kierunku Automatyka i Robotka na
                    wydziale informatyki Politechniki Poznańskiej. W trakcie
                    studiów pracowałem w firmie Mały Inżynier gdzie prowadziłem
                    zajęcia z programowania i robotyki dla dzieci. Po ukończeniu
                    studiów i uzyskaniu tytułu magistra inżyniera rozpocząłem
                    pracę w firmie Pebos IT na stanowisku technika informatyka.
                    W tej pracy zajmowałem się min. programowaniem
                    mikrokontrolerów AVR, rozwijaniem aplikacji sprzedażowej (w
                    PHP) oraz helpdeskiem IT. Kolejnym etapem mojej kariery
                    zawodowej jest firma Technika spawalnicza w której obecnie
                    pracuję. Przez pierwsze lata pracy zajmowałem się głównie
                    robotyką - programowanie robotów, prowadzenie szkoleń z
                    programowania, serwis robotów, rozwijanie aplikacji do
                    programowania offline robotów przez tworzenie skryptów
                    (C++). Po czasie w moja rola w firmie się zmieniła.
                    Pojawiała się potrzeba wdrożenia aplikacji CRM którą
                    zaprojektowałem i wdrożyłem. Back-End napisałem z
                    wykorzystaniem Laravela, PHP i MYSQL a Front-end z użyciem
                    Bootstrapa i JavaScript. Dodatkowo z racji mojego
                    doświadczenia koordynuję i pełnię nadzór nad działem
                    programowania robotów jako starszy programista. Dodatkowo
                    prowadzę też sprzedaż i nadzoruję realizację zrobotyzowanych
                    stanowisk spawalniczych - rozmowy biznesowe, ofertowanie,
                    przygotowanie layoutów 3D, wizyty referencyjne, prowadzenie
                    projektu, nadzór nad pracą poszczególnych działów.
                  </div>
                  <div className="indent-8 text-justify">
                    Interesuje mnie praca w pełnym wymiarze godzin. Pracę mogę
                    rozpocząć po 3 miesiącach od decyzji o przyjęciu mojej osoby
                    (obowiązuje mnie 3 miesięczny okres wypowiedzenia u obecnego
                    pracodawcy z opcją potencjalnego skrócenia). Będę wdzięczny
                    za umożliwienie mi przedstawienia swojej kandydatury w
                    trakcie bezpośredniej rozmowy kwalifikacyjnej.
                  </div>
                  <div className="p-6 ml-[70mm] text-base">
                    <div>Z Poważaniem</div>
                    <div className="font-bold">Karol Jędrzejak</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
          {type == "panasonic" ? (
            <div>
              {language == "eng" ? (
                <div className="py-8 px-6 text-sm"></div>
              ) : (
                /* ROBOTYK PANASONIC PL */
                <div className="py-4 px-6 text-sm">
                  <div className="indent-8 text-justify">
                    Szanowni Państwo. Moja przygoda z programowaniem i robotyką
                    rozpoczęła się w Liceum Ogólnokształcącym gdzie uczęszczałem
                    do klasy o profilu informatycznym. Następnie po jej
                    ukończeniu rozpocząłem studia na kierunku Automatyka i
                    Robotka na wydziale informatyki Politechniki Poznańskiej. W
                    trakcie studiów pracowałem w firmie Mały Inżynier gdzie
                    prowadziłem zajęcia z programowania i robotyki dla dzieci.
                    Po ukończeniu studiów i uzyskaniu tytułu magistra inżyniera
                    rozpocząłem pracę w firmie Pebos IT na stanowisku technika
                    informatyka. W tej pracy zajmowałem się min. programowaniem
                    mikrokontrolerów AVR, rozwijaniem aplikacji sprzedażowej (w
                    PHP) oraz helpdeskiem IT. Kolejnym etapem mojej kariery
                    zawodowej jest firma Technika spawalnicza w której obecnie
                    pracuję. Do obowiązków w mojej pracy należy min:
                  </div>
                  <div className="ml-6">
                    <ul className="list-disc ">
                      <li>
                        Programowanie i kalibracja stanowisk zrobotyzowanych
                        offline (w środowisku DTPS) jako główny programista
                        offline,
                      </li>
                      <li>
                        Tworzenie skryptów i makr rozszerzających możliwości
                        pakietu programów DTPS do programowania robotów offline,
                      </li>
                      <li>
                        Zaprojektowanie i wdrożenie systemu CRM na potrzeby
                        firmy - Automatyczne generowanie ofert i wycen stanowisk
                        do pdf, baza danych stanowisk, baza klientów,
                        interaktywne mapy. Wykorzystane technologie: PHP,
                        Laravel, MYSQL, Bootstrap, JavaScript, HTML, CSSS.
                        Integracja z api google i NBP
                      </li>
                      <li>
                        Sprzedaż - Kontakt z klientem, prezentacje, wizyty
                        referencyjne, tworzenie wizualizacji 3D nowych systemów
                        zrobotyzowanych oraz ich wycena,
                      </li>
                      <li>
                        Programowanie Online robotów - spawalniczych
                        MAG/MIG/TIG, manipulacyjnych, z wykorzystaniem sensorów
                        dotyku i łuku,
                      </li>
                      <li>
                        Prowadzenie szkoleń z programowania robotów offline /
                        online,
                      </li>
                      <li>
                        Organizacja i uczestnictwo w targach branżowych w całej
                        Polsce i za granicą,
                      </li>
                      <li>
                        Przygotowywanie materiałów promocyjnych (prezentacje,
                        filmy, katalogi),
                      </li>
                    </ul>
                  </div>
                  <div className="indent-8 text-justify">
                    Wiem że poszukują państwo osób które miszkają w rejonie
                    śląska ponieważ siedzibę mają państwo w czechach ale czy
                    była by możliwość częściowej pracy zdalnej ? I jak
                    procentowo to wygląda u państwa jeśli chodzi o delgacje a
                    czas w biurze ? Jeśli czas pracy w delegacji byłby poniżej
                    50% a zamiast pracy w biurze mógłbym pracować zdalnie to był
                    bym zainteresowany państwa ofertą. Mam małe dziecko także
                    relokacja niestety nie wchodzi wgrę.
                  </div>
                  <div className="indent-8 text-justify">
                    Interesuje mnie praca w pełnym wymiarze godzin. Pracę mogę
                    rozpocząć po 3 miesiącach od decyzji.
                  </div>
                  <div className="p-3 ml-[70mm] text-base">
                    <div>Z Poważaniem</div>
                    <div className="font-bold">Karol Jędrzejak</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default GenerateMotivationLetter;
