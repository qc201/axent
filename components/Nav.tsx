"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const sliLinks: string[][] = [
    ["SLI", "/products/sli"],
    ["5400", "/products/sli/sli5400"],
    ["5200", "/products/sli/sli5200"],
    ["4000", "/products/sli/sli4000"],
    ["3000", "/products/sli/sli3000"],
    ["2000", "/products/sli/sli2000"],
    ["1010", "/products/sli/sli1010"],
    ["1000", "/products/sli/sli1000"],
  ];
  const sltLinks: string[][] = [
    ["SLT", "/products/slt"],
    ["700", "/products/slt/slt700"],
    ["600", "/products/slt/slt600"],
    ["500", "/products/slt/slt500"],
  ];
  const slsLinks: string[][] = [
    ["SLS", "/products/sls"],
    ["803", "/products/sls/sls803"],
    ["802", "/products/sls/sls802"],
    ["800", "/products/sls/sls800"],
  ];
  const supportLinks: string[][] = [
    ["Warranty registration", "/support/warranty"],
    ["Download center", "/support/manuals"],
    ["Contact us", "/about/contact"],
  ];
  const aboutLinks: string[][] = [
    ["About STUDIOLUX", "/about/company"],
    ["Contact us", "/about/contact"],
    ["Blogs", "/about/blogs"],
  ];
  return (
    <div className=" z-50 fixed top-0 left-0 bg-white w-screen max-h-[60px]">
      <div className="flex flex-row justify-around items-center">
        <Link href="/" className="p-0 m-0">
          <svg
            className="stroke-2 fill-primary h-[55px] hover:scale-90 duration-300"
            id="Layer_1_Image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2083 2083"
          >
            <path d="M696.2,346.28h693.34v694.08H696.93c-1.92-7.53-2.64-677.99-.72-694.08Zm8.62,684.7h675.74V356.4c-11.55-2.3-668.3-1.75-675.74,.57v674.01Z" />
            <path d="M834.54,1353.95v-144.13c8.38,0,16.27-.14,24.15,.03,23.36,.49,46.65,2.26,68.84,9.99,10.56,3.68,21.23,8.31,30.35,14.66,34.27,23.85,34.84,70.59,1.77,96.16-12.05,9.32-25.93,14.86-40.55,18.54-27.07,6.8-54.66,7.06-82.32,5.92-.57-.02-1.13-.56-2.25-1.16Zm8.65-136.15c-.2,43.72-.25,86.44-.01,128.98,19.49,2.31,48.2,.1,69.77-4.82,14.76-3.37,28.75-8.44,40.79-17.87,26.9-21.07,27.61-58.56,1.62-80.52-8.78-7.41-18.91-12.38-29.74-15.92-26.27-8.59-53.33-10.63-82.43-9.84Z" />
            <path d="M1152.32,1206.32c18.69-.24,36.46,3.51,52.54,13.29,24.74,15.04,38.02,36.87,36.98,66.22-1.02,28.57-15.29,49.52-40.39,62.01-32.46,16.16-65.64,15.82-97.82-1.26-20.04-10.64-33.63-27.11-38.17-49.85-6.1-30.58,7.59-60.94,34.34-76.96,16.16-9.68,33.83-13.58,52.52-13.45Zm-1.52,144.92c22.65-.09,40.97-5.69,54.66-15.57,34.26-24.71,40.37-82.19-4.37-108.41-30.77-18.03-63.12-18.54-94.28-1.24-43.15,23.96-44.92,82.6-4.1,110.36,15.38,10.46,32.6,14.66,48.08,14.86Z" />
            <path d="M635.32,1210.51h8.14c0,4.03,0,7.61,0,11.2,0,24.3,0,48.59,.04,72.89,0,3.99-.03,8,.36,11.97,1.64,16.94,9.45,29.62,25.8,35.98,25.19,9.8,50.69,10.26,76.05,1.09,18.17-6.57,27.84-20.24,28.2-39.53,.51-26.95,.26-53.91,.33-80.87,.01-3.95,0-7.9,0-12.51,3.16-.24,5.58-.43,7.99-.61,.51,1.54,1.08,2.46,1.08,3.39,.03,29.62,.56,59.25-.17,88.85-.61,24.45-12.86,41.53-36.35,49.55-27.84,9.5-55.56,8.97-82.8-2.43-16.76-7.01-26.21-19.84-28.62-37.86-.35-2.64-1.04-5.27-1.04-7.91-.06-30.28-.03-60.56,.02-90.84,0-.6,.48-1.19,.99-2.36Z" />
            <path d="M1416.54,1210.42c1.93-.09,4.11-.2,7.42-.36,.17,3.94,.45,7.46,.46,10.98,.05,23.64,.3,47.29,0,70.93-.42,32.74,7.79,49.99,48.8,56.72,16.16,2.65,32.55,1.9,48.44-3.09,22.48-7.06,33.42-21.33,33.69-44.98,.3-26.31,.1-52.62,.11-78.93,0-3.6,0-7.19,0-11.26h8.61c.15,3.39,.43,6.6,.42,9.81-.03,25.31-.05,50.62-.22,75.93-.04,5.31-.22,10.71-1.15,15.92-2.62,14.87-9.89,27.15-23.5,34.09-8.77,4.48-18.34,8.19-27.97,10.02-21.59,4.1-43.05,2.71-63.81-5.41-20.14-7.88-31.32-22.88-31.95-44.08-.93-31.27-.28-62.59-.26-93.89,0-.61,.45-1.22,.91-2.41Z" />
            <path d="M1743.18,1209.2c2.18,1.88,3.62,3.12,5.5,4.74-23.76,22.75-46.33,44.37-69.67,66.73,23.8,23.23,47.28,46.14,71.01,69.31-1.5,2.03-2.62,3.56-4.54,6.15-24.23-23.23-48.12-46.14-72.64-69.65-24.31,23.23-48.06,45.94-72.93,69.71-1.51-1.66-2.77-3.05-4.82-5.31,24.41-23.47,48.02-46.18,72.37-69.6-22.74-21.87-44.95-43.23-67.58-64.99,1.91-2.21,3.56-4.12,5.88-6.79,22.7,22.1,44.98,43.79,67.86,66.06,23.28-22.21,45.86-43.75,69.57-66.36Z" />
            <path d="M433.45,1209.41v6.35c-1.21,.35-2.13,.82-3.06,.84-14.27,.33-28.6-.12-42.78,1.17-7.74,.7-15.53,3.65-22.7,6.9-4.61,2.09-8.89,6-12.01,10.09-6.89,9.01-5.41,20.64,3.64,27.48,5.21,3.94,11.34,6.99,17.49,9.27,10.26,3.81,21.09,6.13,31.27,10.13,7.94,3.12,16.15,6.74,22.67,12.06,16.91,13.79,15.56,36.77-2.28,49.33-4.02,2.83-8.61,5.14-13.26,6.76-24.72,8.62-50.16,8.18-76.23,6.2v-6.77c10.48,0,20.41,.48,30.28-.13,11.25-.69,22.62-1.51,33.59-3.89,7.25-1.57,14.65-4.93,20.63-9.33,13.09-9.64,13.26-26.81,.36-36.66-6.46-4.94-14.31-8.35-21.96-11.36-8.63-3.4-17.92-5.11-26.58-8.44-7.38-2.84-14.84-6.15-21.26-10.67-15.06-10.62-16.51-29.62-2.79-42.06,6.2-5.62,14.31-9.59,22.17-12.81,11.82-4.84,24.63-5.39,37.3-5.44,8.26-.03,16.52,.62,25.49,1Z" />
            <path d="M535.96,1354.88h-8.86c-.55-15.16,.11-30.35,.09-45.52-.01-14.98,.07-29.96,.09-44.93,.02-15.21,0-30.42,0-46.46h-71.35v-7.57h151.58c.15,2.37,.28,4.44,.45,7.27h-71.31c-1.44,11.75-.52,22.96-.68,34.11-.17,11.65-.04,23.3-.04,34.95,0,11.32,.02,22.63,.03,33.95,0,11.27,0,22.54,0,34.21Z" />
            <path d="M1280.14,1354.85v-144.28h9.04v136.67h98.13v7.61h-107.17Z" />
            <path d="M1025.63,1354.77c-1.78,.2-3.04,.47-4.3,.44-.92-.02-1.84-.43-3.29-.81v-143.93c2.44-.12,4.58-.22,7.59-.37v144.67Z" />
            <path d="M785.86,735.84h19.3c.77,3.32,1.69,6.75,2.37,10.23,6.62,34.13,28.37,53.34,63.29,55.83,17.74,1.27,35.38,.88,52.1-5.95,6.69-2.73,13.46-6.11,19-10.65,18.41-15.09,19.59-42.08,3.2-59.48-7-7.44-15.59-12.62-25.1-15.85-16.68-5.67-33.57-10.68-50.35-16.03-12.35-3.94-24.71-7.86-36.99-12.01-4.08-1.38-8.02-3.24-11.87-5.19-41.26-20.81-35.82-74.69-5.73-94.42,11.6-7.61,23.9-13.14,37.56-15.38,21.93-3.6,43.81-3.77,65.21,3.04,32.11,10.21,52.79,37.77,53.55,71.58h-19.76c-.56-1.61-1.39-3.39-1.82-5.27-7-31.01-23.33-46.91-54.43-51.59-16.23-2.44-32.66-2.05-48.44,3.06-6.86,2.22-13.61,5.49-19.62,9.48-16.74,11.1-22.99,43.41-.12,59.15,5.68,3.91,12.03,7.25,18.54,9.46,18.58,6.28,37.45,11.68,56.1,17.75,11.06,3.6,22.03,7.5,32.82,11.83,5.82,2.34,11.37,5.53,16.68,8.91,35.69,22.75,34.1,73.41,4.86,95.83-7.8,5.98-16.71,11.32-25.95,14.46-28.79,9.77-58.25,10.37-87.38,1.46-35.1-10.74-57.29-42.15-57.01-80.28Z" />
            <path d="M1052.78,488.04v414.82h-19.61V488.04h19.61Z" />
            <path d="M1130.96,569.95h20.33v227.79c25.4,1.09,49.88,.37,74.34,.5,24.25,.13,48.49,.03,73.57,.03v18.49h-168.25v-246.81Z" />
          </svg>
        </Link>
        {/* products */}
        <Menu as="div" className="inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full text-sm font-custom text-primary">
              PRODUCTS
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className=" absolute pt-10 left-0 w-screen origin-top-right bg-white opacity-60">
              <div className="flex flex-row w-full items-start justify-around mt-2">
                <div className="flex flex-col justify-start items-start">
                  {sliLinks.map(([label, href], index) => (
                    <Menu.Item key={index}>
                      {({ active, close }) => (
                        <div className="relative">
                          <Link
                            href={href}
                            onClick={() => {
                              close();
                            }}
                            className={classNames(
                              active ? "text-black" : "text-primary",
                              "font-custom"
                            )}
                          >
                            {label}
                          </Link>
                          {active && (
                            <span className="absolute top-0 left-full ml-1 mt-0 inline-block">
                              <svg
                                className="fill-primary h-6 w-6"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
                {/* slt */}
                <div className="flex flex-col justify-start items-start">
                  {sltLinks.map(([label, href], index) => (
                    <Menu.Item key={index}>
                      {({ active, close }) => (
                        <div className="relative">
                          <Link
                            href={href}
                            onClick={() => {
                              close();
                            }}
                            className={classNames(
                              active ? "text-black" : "text-primary",
                              "font-custom"
                            )}
                          >
                            {label}
                          </Link>
                          {active && (
                            <span className="absolute top-0 left-full ml-1 mt-0 inline-block">
                              <svg
                                className="fill-primary h-6 w-6"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
                {/* sls */}
                <div className="flex flex-col justify-start items-start">
                  {slsLinks.map(([label, href], index) => (
                    <Menu.Item key={index}>
                      {({ active, close }) => (
                        <div className="relative">
                          <Link
                            href={href}
                            onClick={() => {
                              close();
                            }}
                            className={classNames(
                              active ? "text-black" : "text-primary",
                              "font-custom"
                            )}
                          >
                            {label}
                          </Link>
                          {active && (
                            <span className="absolute top-0 left-full ml-1 mt-0 inline-block">
                              <svg
                                className="fill-primary h-6 w-6"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* support */}
        <Menu as="div" className="inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full text-sm font-custom text-primary">
              SUPPORT
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className=" absolute pt-10 left-0 w-screen origin-top-right bg-white opacity-60">
              <div className="flex flex-row w-full items-start justify-around mt-2">
                {supportLinks.map(([label, href], index) => (
                  <Menu.Item key={index}>
                    {({ active, close }) => (
                      <div className="relative">
                        <Link
                          href={href}
                          onClick={() => {
                            close();
                          }}
                          className={classNames(
                            active ? "text-black" : "text-primary",
                            "font-custom"
                          )}
                        >
                          {label}
                        </Link>
                        {active && (
                          <span className="absolute top-0 left-full ml-1 mt-0 inline-block">
                            <svg
                              className="fill-primary h-6 w-6"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* about */}
        <Menu as="div" className="inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full text-sm font-custom text-primary">
              ABOUT US
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className="absolute pt-10 left-0 w-screen origin-top-right bg-white opacity-60">
              <div className="flex flex-row w-full items-start justify-around mt-2">
                {aboutLinks.map(([label, href], index) => (
                  <Menu.Item key={index}>
                    {({ active, close }) => (
                      <div className="relative">
                        <Link
                          href={href}
                          onClick={() => {
                            close();
                          }}
                          className={classNames(
                            active ? "text-black" : "text-primary",
                            "font-custom"
                          )}
                        >
                          {label}
                        </Link>
                        {active && (
                          <span className="absolute top-0 left-full ml-1 mt-0 inline-block">
                            <svg
                              className="fill-primary h-6 w-6"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
