import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CogIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Features", href: "/" },
  { name: "Blog", href: "https://blog.ytuong.me/" },
  {
    name: "Facebook Group",
    href: "https://www.facebook.com/groups/552601465720500",
  },
];
const features = [
  {
    name: "Automatic collect",
    description:
      "Save Your Time will collect ads / Posts autonomously while you're using facebook.",
    icon: RefreshIcon,
  },
  {
    name: "Filter ads / Post by Reactions",
    description:
      "To catch Posts quickly, SAVE MY TIMES allows you to filter your facebook news/watch feed to show sponsored posts, group Post, Fan page posts, newfeed posts",
    icon: CogIcon,
  },
  {
    name: "Save and organize",
    description:
      "You can easily track, sort posts by reactions, and store them in the local area of ​​the Extension easily",
    icon: ServerIcon,
  },
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

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="pt-6 bg-gray-900">
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
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center lg:flex-col">
                  <div className="lg:py-20">
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                      <span className="block">
                        The Extension Allow to Saves your time on Socical,{" "}
                      </span>
                      <span className="block pb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        Spy Your Compertitors Faster
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Auto collect & save ads, Posts on your facebook news feed
                    </p>
                  </div>
                  <div className="w-full ">
                    <label className="block text-base font-bold text-center text-gray-300">
                      Download
                    </label>
                    <div className="flex justify-center col-span-1 mt-4 md:col-span-2 lg:col-span-1">
                      <a
                        href="https://chrome.google.com/webstore/detail/save-my-time-extension/kopgookbfibohjgejadkhnndfemajbec"
                        target="_blank" rel="noreferrer"
                      >
                        <img
                          className="h-12"
                          src="https://res.cloudinary.com/vk1ng/image/upload/v1621681623/ytuong/chrome_1chrome_n2sxxg.png"
                          alt="Chrome Extention"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://res.cloudinary.com/vk1ng/image/upload/v1636791448/ytuong/2_zxyh1n.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature section with screenshot */}
          <div className="relative pt-16 bg-gray-50">
            <div className="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                <img
                  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src="https://res.cloudinary.com/vk1ng/image/upload/v1636791448/ytuong/3_aezwkb.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Feature section with grid */}
          <div className="relative py-16 bg-white sm:py-24 lg:py-32">
            <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                FEARTURES
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600">
                              <feature.icon
                                className="w-6 h-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
