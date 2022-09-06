import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UsersIcon,
  XIcon,
  MenuIcon,
  FlagIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Races", href: "/", icon: HomeIcon, current: true },
  // { name: "Drivers", href: "/drivers", icon: UsersIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const updateActiveTab = (e) => {
  navigation.forEach((tab) => {
    if (tab.name == e.target.innerText) {
      tab.current = true;
    } else {
      tab.current = false;
    }
  });
};

const MainMenu = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4"></div>
                    <nav className="mt-5 px-2 space-y-1">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            onClick={(e) => updateActiveTab(e)}
                            className={classNames(
                              item.current
                                ? "bg-gray-800 text-white"
                                : "text-white hover:bg-gray-600 hover:bg-opacity-75",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className="mr-4 flex-shrink-0 h-6 w-6 text-gray-300"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 bg-gray-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <FlagIcon className="h-8 w-8 text-white" />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a
                      onClick={(e) => updateActiveTab(e)}
                      className={classNames(
                        item.current
                          ? "bg-gray-800 text-white"
                          : "text-white hover:bg-gray-600 hover:bg-opacity-75",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <main> {children} </main>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
