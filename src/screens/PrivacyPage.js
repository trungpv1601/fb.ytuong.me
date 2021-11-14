import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const navigation = [
  { name: "Features", href: "/" },
  { name: "Blog", href: "https://blog.ytuong.me/" },
  // {
  //   name: "Facebook Group",
  //   href: "https://www.facebook.com/groups/552601465720500",
  // },
];

const footerNavigation = {
  legal: [{ name: "Privacy Policy", href: "/privacy-policy" }],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/groups/552601465720500",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <ScrollToTopOnMount />
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="py-6 bg-gray-900">
            <nav
              className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">YTuong.me</span>
                    <img
                      className="w-auto h-14"
                      src="https://res.cloudinary.com/vk1ng/image/upload/v1621485451/ytuong/ytuong-light_b1hhqx.png"
                      alt="YTuong.me"
                    ></img>
                  </a>
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="w-auto h-8"
                      src="https://res.cloudinary.com/vk1ng/image/upload/v1621485416/ytuong/ytuong-dark_nk2ss8.png"
                      alt="YTuong.me"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="py-16 bg-white ">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto text-lg ">
                  <h1>
                    <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                      Privacy Policy
                    </span>
                  </h1>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    This Privacy Policy governs how we, SAVE MY TIME EXTENSION,
                    Inc. and its affiliates (“SAVE MY TIME EXTENSION”, “we”,
                    “our” or “us”), use data that we collect and store in
                    connection with your use of our browser extension SAVE MY
                    TIME EXTENSION (the "Extension(s)").
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    The data that we collect in connection with our extension is
                    automatically rendered anonymized and non-personal. We do
                    not collect or store any of your personal data, nor do we
                    ever monitor or track your personal activities.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    This Privacy Policy may be updated from time to time and
                    therefore we ask you to check back periodically for the
                    latest version of the Privacy Policy.
                  </p>

                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    1- The Data that We Collect and Process
                  </p>

                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    We collect the following data:
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    (1)  Collection of Non-Personal. We collect data about
                    sponsored campaigns, sponsored posts or advertisements that
                    target you directly or that have been shared with you. We
                    may complement these data with general demographic
                    information like where you live (by region).
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    (2)  Location Data. We obtain certain location-based data in
                    connection with your use of the extention, transmitted from
                    your Facebook and your IP address. We use such
                    location-based data only to determine high-level region,
                    state and country level location data which we store and
                    use. We never store or use your IP address or any other
                    specific location-based data.
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    (3)  Children’s Privacy. We do not offer our browser
                    extention for use by children. If you are under 18, you may
                    not use the Save my time Extension, or provide us with any information
                    without involvement of a parent or a guardian. We do not
                    knowingly collect personal information from, and/or about
                    children. If you believe that we might have any such
                    personal information, please contact us
                    at: <span className="text-gray-900 underline">ytuongdotme@gmail.com</span>
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500"></p>

                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    2- Why We Collect and Process the Data
                  </p>

                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    We use these data to analyze how companies promote their
                    products and services online and on social networks and to
                    what groups of people (i.e. target groups). We provide our
                    customers with data intelligence and insights into their
                    advertising practices as well as those of their competitors.
                    Therefore, the data we share with them is always aggregated
                    and non-personal.
                  </p>

                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    If you object to these terms of services, please do not
                    download or add the extention to your browser.
                  </p>

                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    For more information or for exercising your rights, please
                    contact us at <span className="text-gray-900 underline">ytuongdotme@gmail.com</span>. Subject to legal and
                    other permissible considerations, we will make every
                    reasonable effort to honor your request promptly or inform
                    you if we require further information in order to fulfil
                    your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <div className="max-w-md px-4 pt-12 mx-auto sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <img
                  className="h-10"
                  src="https://res.cloudinary.com/vk1ng/image/upload/v1621485416/ytuong/ytuong-dark_nk2ss8.png"
                  alt="YTuong.me"
                />
                <p className="text-base text-gray-500">
                  Save My Time Extension allows you to collect, save & hunt
                  trending ads / Post's group automatically from your facebook
                  news feed.
                </p>
                <div className="flex space-x-6">
                  {footerNavigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div></div>
                  <div className="mt-12 md:mt-0"></div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div></div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                      Legal
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 mt-12 border-t border-gray-200">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2022 YTuong.me. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
