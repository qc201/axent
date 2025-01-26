"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const productLinks = [
  {
    href: "/intelligent",
    label: "intelligent toilet",
    imgsrc: "/nav_img/intelligent.jpg",
    imgalt: "intelligent",
    title: "Intelligent Toilets & Seats",
    pagelink: "/intelligent",
  },
  {
    href: "/reguar",
    label: "regular toilet",
    imgsrc: "/nav_img/regular.jpg",
    imgalt: "regular toilet",
    title: "Toilets",
    pagelink: "/reguar",
  },
  {
    href: "/mint",
    label: "mint line",
    imgsrc: "/nav_img/mint.png",
    imgalt: "mint line",
    title: "MINT",
    pagelink: "/mint",
  },
  {
    href: "/basin",
    label: "basins",
    imgsrc: "/nav_img/basins.jpg",
    imgalt: "",
    title: "Washbasins & Vanities",
    pagelink: "/basin",
  },
  {
    href: "/parts",
    label: "parts",
    imgsrc: "/nav_img/parts.jpg",
    imgalt: "parts",
    title: "Parts & Seats",
    pagelink: "/parts",
  },
];

const supporttLinks = [
  {
    href: "/support/dealer",
    label: "Find a dealer",
    pagelink: "/support/dealer",
  },
  {
    href: "/support/download",
    label: "Download center",
    pagelink: "/support/download",
  },
  {
    href: "/support/tutorials",
    label: "Video tutorials",
    pagelink: "/support/tutorials",
  },
  {
    href: "/support/questions",
    label: "FAQ Intelligent toilets",
    pagelink: "/support/questions",
  },
  {
    href: "/support/contact",
    label: "Get tech support",
    pagelink: "/support/contact",
  },
];

const companyLinks = [
  {
    href: "/company/about",
    label: "About us",
    pagelink: "/company/about",
  },
  {
    href: "/company/news",
    label: "News room",
    pagelink: "/company/news",
  },
  {
    href: "/company/contact",
    label: "Contact us",
    pagelink: "/company/contact",
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]); // Reference for each menu component
  // Toggle logic for opening/closing menus
  const handleMenuToggle = (menuId: number) => {
    setActiveMenu((prev) => (prev === menuId ? null : menuId)); // Close the menu if it's already open, otherwise open it
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRefs.current.every(
        (ref) => ref && !ref.contains(event.target as Node)
      )
    ) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    // Set up event listener for clicks outside
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className=" z-50 fixed top-0 left-0 bg-white w-screen max-h-[60px] p-5">
      <div className="flex flex-row justify-around items-center text-sm text-primary font-custom font-extralight">
        <Link href="/" className="p-0 m-0">
          LOGO
        </Link>
        {/* PRODUCT SUPPORT ABOUT US WILL HIDDEN ON CELLPHONE SCREEN */}
        <div className="hidden sm:flex flex-row justify-between gap-4 text-sm text-primary font-custom font-extralight">
          {/* PRODUCTS dropdown */}
          <Menu
            as="div"
            open={activeMenu === 1}
            onClose={() => setActiveMenu(null)}
          >
            {({ open }) => (
              <div ref={(el) => (menuRefs.current[0] = el)}>
                <MenuButton
                  onClick={() => handleMenuToggle(1)}
                  className={`${
                    open ? "font-thin" : ""
                  } data-[active]:font-extrabold`}
                >
                  PRODUCTS
                </MenuButton>
                <AnimatePresence>
                  {open && (
                    <MenuItems
                      anchor="bottom"
                      className="w-screen bg-white bg-opacity-70 flex flex-wrap justify-around"
                      static
                      as={motion.div}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                    >
                      {productLinks.map((link) => (
                        <MenuItem key={link.href}>
                          <Link href={link.href}>
                            <Thumbnail
                              imgsrc={link.imgsrc}
                              imgalt={link.imgalt}
                              title={link.title}
                              pagelink={link.pagelink}
                            />
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu>

          {/* SUPPORT DROPDOWN */}
          <Menu
            as="div"
            open={activeMenu === 2}
            onClose={() => setActiveMenu(null)}
          >
            {({ open }) => (
              <div ref={(el) => (menuRefs.current[1] = el)}>
                <MenuButton
                  onClick={() => handleMenuToggle(2)}
                  className={`${
                    open ? "font-thin" : ""
                  } data-[active]:font-extrabold`}
                >
                  SUPPORT
                </MenuButton>
                <AnimatePresence>
                  {open && (
                    <MenuItems
                      anchor="bottom"
                      className="w-screen text-primary bg-white bg-opacity-70 flex flex-wrap justify-around py-5"
                      static
                      as={motion.div}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                    >
                      {supporttLinks.map((link) => (
                        <MenuItem key={link.href}>
                          <div className="group font-thin">
                            <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                              <a href={link.href}>{link.label}</a>
                            </span>
                          </div>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu>

          {/* COMPANY */}
          <Menu
            as="div"
            open={activeMenu === 2}
            onClose={() => setActiveMenu(null)}
          >
            {({ open }) => (
              <div ref={(el) => (menuRefs.current[1] = el)}>
                <MenuButton
                  onClick={() => handleMenuToggle(2)}
                  className={`${
                    open ? "font-thin" : ""
                  } data-[active]:font-extrabold`}
                >
                  COMPANY
                </MenuButton>
                <AnimatePresence>
                  {open && (
                    <MenuItems
                      anchor="bottom"
                      className="w-screen text-primary bg-white bg-opacity-70 flex flex-wrap justify-around py-5"
                      static
                      as={motion.div}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                    >
                      {companyLinks.map((link) => (
                        <MenuItem
                          key={link.href}
                          className="font-thin duration-1000"
                        >
                          <div className="group font-thin">
                            <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                              <a href={link.href}>{link.label}</a>
                            </span>
                          </div>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu>
        </div>
        {/* end of product support about */}

        <div className="flex flex-reverse gap-1 sm:gap-4 items-baseline">
          {/* LOCATION ICON */}
          <div className="hidden sm:flex">
            <Link href="/support/dealer">
              <Image
                src="/icons/location-svgrepo-com.svg"
                alt="Example Icon"
                width={25}
                height={25}
                loading="eager"
              />
            </Link>
          </div>

          {/* SEARCH ICON */}
          <div>
            <Link href="/support/search">
              <Image
                src="/icons/search-svgrepo-com.svg"
                alt="Example Icon"
                width={25}
                height={25}
                loading="eager"
              />
            </Link>
          </div>

          {/* MENU ICON */}
          <div>
            <Image
              src="/icons/menu-hamburger-svgrepo-com.svg"
              alt="Example Icon"
              width={25}
              height={25}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
