import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Flag from "react-world-flags";
import WebsiteLogo from "./../assets/logos/WebsiteLogo";

import { DataContext } from "./../dataprovider/NaviData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = (props) => {
  const { state, actions } = useContext(DataContext);
  let nextLang = "eng";
  let flagCode = "gb";
  if (state.language == "eng") {
    nextLang = "pl";
    flagCode = "pol";
  }
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-slate-100 fixed w-full z-20 top-0 start-0 shadow-sm"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-center">
            <div className="flex items-center">
              {/* LOGO */}
              <div className="flex items-center">
                <div className="mx-2">
                  <WebsiteLogo
                    fill1="fill-cyan-800"
                    fill2="fill-slate-800"
                    className="h-8 w-full"
                  />
                </div>
              </div>
              {/* Links */}
              <div className="hidden md:block lg:mx-8 xl:mx-32 2xl:mx-40">
                <div className="mx-10 flex items-baseline space-x-4">
                  {state.navigation.map((item) => (
                    <a
                      key={item.id}
                      href={"#"}
                      onClick={() => actions.handlerNavigation(item.id)}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800 text-slate-100"
                          : "text-slate-800 hover:bg-slate-800 hover:text-slate-100 transition duration-700 ease-in-out",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      <div>{item[state.language]}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* MOBILE */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-100 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>{" "}
            {/* Flag */}
            <div className="hover:bg-slate-800 rounded-md ml-3">
              <div className="rounded m-1 flex">
                <a
                  href={"#"}
                  onClick={() => actions.handlerLanguage(nextLang)}
                  className=""
                >
                  <Flag
                    code={flagCode}
                    width="51.205"
                    height="24"
                    className="rounded-sm"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  MOBILE */}
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {state.navigation.map((item) => (
              <DisclosureButton
                key={item.id}
                as="a"
                href={item.href}
                onClick={() => actions.handlerNavigation(item.id)}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-cyan-800 text-slate-100"
                    : "text-slate-800 hover:bg-slate-800 hover:text-slate-100 hover:cursor-pointer",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item[state.language]}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default Navigation;
