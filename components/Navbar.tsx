"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useOutsideClick from "@/lib/useOutsideClick";

const productLinks = [
  {
    href: "/bathroom/intelligent",
    label: "intelligent toilet",
    imgsrc: "/nav_img/intelligent_infinity-200_100.png",
    imgalt: "intelligent",
    title: "Intelligent Toilets",
    pagelink: "/bathroom/intelligent",
  },
  {
    href: "/bathroom/regular",
    label: "regular toilet",
    imgsrc: "/nav_img/regular-200_100.png",
    imgalt: "regular toilet",
    title: "Toilets",
    pagelink: "/bathroom/regular",
  },
  {
    href: "/bathroom/mint",
    label: "mint line",
    imgsrc: "/nav_img/bathtub-200_100.png",
    imgalt: "mint line",
    title: "Bathtub",
    pagelink: "/bathroom/mint",
  },
  {
    href: "/bathroom/basin",
    label: "basins",
    imgsrc: "/nav_img/basins-200_100.png",
    imgalt: "basins",
    title: "Washbasins & Vanities",
    pagelink: "/bathroom/basin",
  },
  {
    href: "/bathroom/parts",
    label: "parts",
    imgsrc: "/nav_img/seats-200_100.png",
    imgalt: "parts",
    title: "Toilet Seats",
    pagelink: "/bathroom/parts",
  },
];

const supportLinks = [
  {
    href: "/support/contact",
    label: "Find a dealer",
    pagelink: "/support/contact",
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
    href: "/support/tech",
    label: "Get tech support",
    pagelink: "/support/tech",
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
    href: "/company/reference",
    label: "Reference",
    pagelink: "/company/reference",
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]); // Reference for each menu component
  const mobileMenuRef = useRef<HTMLDivElement>(null!); //ref for mobil navbar
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
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // function close mobil navbar
  const handleClickOutsideMobil = () => {
    setIsOpen(false);
  };
  useOutsideClick(mobileMenuRef, handleClickOutsideMobil);
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
  const [isProductLinksVisible, setIsProductLinksVisible] = useState(false);

  const handleProductClick = () => {
    setIsProductLinksVisible(!isProductLinksVisible);
  };
  const [isSupportLinksVisible, setIsSupportLinksVisible] = useState(false);

  const handleSupportClick = () => {
    setIsSupportLinksVisible(!isSupportLinksVisible);
  };

  const [isCompanyLinksVisible, setIsCompanyLinksVisible] = useState(false);

  const handleCompanyClick = () => {
    setIsCompanyLinksVisible(!isCompanyLinksVisible);
  };

  return (
    <div ref={mobileMenuRef}>
      <div className=" z-50 fixed top-0 left-0 bg-white w-screen h-12 px-5 pt-5 pb-12">
        <div className="flex flex-row justify-around items-center text-sm text-primary font-custom font-extralight">
          <Link href="/" className="p-0 m-0 hover:scale-90 duration-500">
            <Image
              src="/icons/axent_switzerland_logo.svg"
              alt="brand logo"
              width={100}
              height={100}
              loading="eager"
            />
          </Link>
          {/* PRODUCT SUPPORT ABOUT US WILL HIDDEN ON CELLPHONE SCREEN */}
          <div className="hidden  sm:flex sm:flex-row justify-between gap-4 text-sm text-primary font-custom font-extralight">
            {/* PRODUCTS dropdown */}
            <Menu as="div">
              {({ open }) => (
                <div
                  ref={(el) => {
                    menuRefs.current[0] = el;
                  }}
                >
                  <MenuButton
                    onClick={() => handleMenuToggle(1)} // Toggle the products menu with id 1
                    className={`${
                      open ? "font-thin" : ""
                      } data-[active]:underline`}
                  >
                    PRODUCTS
                  </MenuButton>
                  <AnimatePresence>
                    {open && (
                      <Menu.Items
                        anchor="bottom"
                        className="pt-5 px-[10vw] w-screen bg-white bg-opacity-70 flex flex-wrap justify-around"
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0, transition: { type: "tween", duration: 0.5, ease: "easeOut" } }}
                        exit={{ opacity: 0, y: -50 }}

                      >
                        {productLinks.map((link) => (
                          <Menu.Item key={link.href}>
                            <Link href={link.pagelink}>
                              <Thumbnail
                                imgsrc={link.imgsrc}
                                imgalt={link.imgalt}
                                title={link.title}
                                pagelink={link.pagelink}
                              />
                            </Link>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Menu>

            {/* SUPPORT DROPDOWN */}
            <Menu as="div">
              {({ open }) => (
                <div
                  ref={(el) => {
                    menuRefs.current[0] = el;
                  }}
                >
                  <Menu.Button
                    onClick={() => handleMenuToggle(1)} // Toggle support menu with id 1
                    className={`${
                      open ? "font-thin" : ""
                      } data-[active]:underline`}
                  >
                    SUPPORT
                  </Menu.Button>
                  <AnimatePresence>
                    {open && (
                      <Menu.Items
                        anchor="bottom"
                        className="pt-10 w-screen text-primary bg-white bg-opacity-70 flex flex-wrap justify-around py-5"
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0, transition: { type: "tween", duration: 0.5, ease: "easeOut" } }}
                        exit={{ opacity: 0, y: -50 }}
                      >
                        {supportLinks.map((link) => (
                          <Menu.Item key={link.label}>
                            <div className="group font-thin">
                              <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                <a href={link.href}>{link.label}</a>
                              </span>
                            </div>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Menu>

            {/* COMPANY DROPDOWN */}
            <Menu as="div">
              {({ open }) => (
                <div
                  ref={(el) => {
                    menuRefs.current[0] = el;
                  }}
                >
                  <Menu.Button
                    onClick={() => handleMenuToggle(2)} // Toggle company menu with id 2
                    className={`${
                      open ? "font-thin" : ""
                      } data-[active]:underline`}
                  >
                    COMPANY
                  </Menu.Button>
                  <AnimatePresence>
                    {open && (
                      <Menu.Items
                        anchor="bottom"
                        className="pt-10 w-screen text-primary bg-white bg-opacity-70 flex flex-wrap justify-around py-5"
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0, transition: { type: "tween", duration: 0.5, ease: "easeOut" } }}
                        exit={{ opacity: 0, y: -50 }}
                      >
                        {companyLinks.map((link) => (
                          <Menu.Item key={link.href}>
                            <div className="group font-thin duration-1000">
                              <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                <a href={link.href}>{link.label}</a>
                              </span>
                            </div>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
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
              <Link href="/support/contact">
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

            <div>
              {/* Hamburger/Close Icon */}
              <div className="sm:hidden" onClick={toggleMenu}>
                {isOpen ? (
                  <Image
                    src="/icons/close-circle-svgrepo-com.svg"
                    alt="Close"
                    width={25}
                    height={25}
                    loading="eager"
                  />
                ) : (
                  <Image
                    src="/icons/menu-hamburger-svgrepo-com.svg"
                    alt="Hamburger"
                    width={25}
                    height={25}
                    loading="eager"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View Menu */}

      <AnimatePresence> {isOpen && (
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ type: "tween" }}
          className="fixed w-1/2 h-screen top-14 right-0 text-start bg-white  opacity-90 z-50"
        >
          <div className="flex flex-col pl-3 pt-5 font-custom text-primary text-lg">
            <div
              className="font-black pt-2"
              onClick={handleProductClick}
              style={{ cursor: "pointer" }}
            >
              Products
            </div>
            <AnimatePresence>
            {isProductLinksVisible &&
              productLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ type: "tween" }}
                >
                  <Link
                    onClick={toggleMenu}
                    className="font-thin py-2"
                    href={link.pagelink}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}</AnimatePresence>
            <div
              className="font-black pt-2"
              onClick={handleSupportClick}
              style={{ cursor: "pointer" }}
            >
              Support
            </div>
            <AnimatePresence>
            {isSupportLinksVisible &&
              supportLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ type: "tween" }}
                >
                  <Link
                    onClick={toggleMenu}
                    className="font-thin py-2"
                    href={link.pagelink}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}</AnimatePresence>
            <div
              className="font-black pt-2"
              onClick={handleCompanyClick}
              style={{ cursor: "pointer" }}
            >
              Company
            </div> <AnimatePresence>
            {isCompanyLinksVisible &&
              companyLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ type: "tween" }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  <Link
                    onClick={toggleMenu}
                    className="font-thin py-2"
                    href={link.pagelink}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}</AnimatePresence>
          </div> 
        </motion.div>
      )}</AnimatePresence>
    </div>
  );
}
