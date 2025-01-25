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
                    LOGO
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