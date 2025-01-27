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
    imgsrc: "/nav_img/intelligent.jpg",
    imgalt: "intelligent",
    title: "Intelligent Toilets & Seats",
    pagelink: "/bathroom/intelligent",
  },
  {
    href: "/bathroom/reguar",
    label: "regular toilet",
    imgsrc: "/nav_img/regular.jpg",
    imgalt: "regular toilet",
    title: "Toilets",
    pagelink: "/bathroom/reguar",
  },
  {
    href: "/bathroom/mint",
    label: "mint line",
    imgsrc: "/nav_img/mint.png",
    imgalt: "mint line",
    title: "MINT",
    pagelink: "/bathroom/mint",
  },
  {
    href: "/bathroom/basin",
    label: "basins",
    imgsrc: "/nav_img/basins.jpg",
    imgalt: "",
    title: "Washbasins & Vanities",
    pagelink: "/bathroom/basin",
  },
  {
    href: "/bathroom/parts",
    label: "parts",
    imgsrc: "/nav_img/parts.jpg",
    imgalt: "parts",
    title: "Parts & Seats",
    pagelink: "/bathroom/parts",
  },
];

const supportLinks = [
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
    label: "Reference",
    pagelink: "/company/reference",
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]); // Reference for each menu component
  const mobileMenuRef = useRef(null); //ref for mobil navbar
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
      <div className=" z-50 fixed top-0 left-0 bg-white w-screen max-h-[60px] p-5">
        <div className="flex flex-row justify-around items-center text-sm text-primary font-custom font-extralight">
          <Link href="/" className="p-0 m-0">
            LOGO
          </Link>
          {/* PRODUCT SUPPORT ABOUT US WILL HIDDEN ON CELLPHONE SCREEN */}
          <div className="hidden  sm:flex sm:flex-row justify-between gap-4 text-sm text-primary font-custom font-extralight">
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
                        {supportLinks.map((link) => (
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

      {isOpen && (
        <div className="absolute w-1/2 h-screen top-14 right-0 text-start bg-white  opacity-70 z-50">
          <div className="flex flex-col pl-3 pt-5 font-custom text-primary text-lg">
            <div
              className="font-black"
              onClick={handleProductClick}
              style={{ cursor: "pointer" }}
            >
              Products
            </div>
            {isProductLinksVisible &&
              productLinks.map((link) => (
                <Link
                  onClick={toggleMenu}
                  className="font-thin"
                  href={link.pagelink}
                  key={link.label}
                >
                  {link.title}
                </Link>
              ))}
            <div
              className="font-black"
              onClick={handleSupportClick}
              style={{ cursor: "pointer" }}
            >
              Support
            </div>
            {isSupportLinksVisible &&
              supportLinks.map((link) => (
                <Link
                  onClick={toggleMenu}
                  className="font-thin"
                  href={link.pagelink}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            <div
              className="font-black"
              onClick={handleCompanyClick}
              style={{ cursor: "pointer" }}
            >
              Company
            </div>
            {isCompanyLinksVisible &&
              companyLinks.map((link) => (
                <Link
                  onClick={toggleMenu}
                  className="font-thin"
                  href={link.pagelink}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
