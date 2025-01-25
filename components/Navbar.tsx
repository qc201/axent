"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import { useState, useEffect, useRef } from "react";

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

const productLinks = [
  { href: "/settings", label: "Settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
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
  return (
    <div className=" z-50 fixed top-0 left-0 bg-white w-screen max-h-[60px]">
      <div className="hidden md:flex flex-row justify-around items-center text-sm text-primary font-custom font-extralight">
        <Link href="/" className="p-0 m-0">
          LOGO
        </Link>
        {/* PRODUCTS dropdown */}
        {/* Menu 1 */}
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
                  open ? "bg-gray-500" : ""
                } data-[active]:bg-gray-500`}
              >
                MENU 1
              </MenuButton>
              <AnimatePresence>
                {open && (
                  <MenuItems
                    anchor="bottom"
                    className="w-screen bg-gray-500"
                    static
                    as={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                  >
                    {productLinks.map((link) => (
                      <MenuItem
                        key={link.href}
                        className="block data-[focus]:bg-blue-100"
                      >
                        <a href={link.href}>{link.label}</a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                )}
              </AnimatePresence>
            </div>
          )}
        </Menu>

        {/* Menu 2 */}
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
                  open ? "bg-gray-500" : ""
                } data-[active]:bg-gray-500`}
              >
                MENU 2
              </MenuButton>
              <AnimatePresence>
                {open && (
                  <MenuItems
                    anchor="bottom"
                    className="w-screen bg-gray-500"
                    static
                    as={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                  >
                    {productLinks.map((link) => (
                      <MenuItem
                        key={link.href}
                        className="block data-[focus]:bg-blue-100"
                      >
                        <a href={link.href}>{link.label}</a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                )}
              </AnimatePresence>
            </div>
          )}
        </Menu>

        {/* Menu 3 */}
        <Menu
          as="div"
          open={activeMenu === 3}
          onClose={() => setActiveMenu(null)}
        >
          {({ open }) => (
            <div ref={(el) => (menuRefs.current[2] = el)}>
              <MenuButton
                onClick={() => handleMenuToggle(3)}
                className={`${
                  open ? "bg-gray-500" : ""
                } data-[active]:bg-gray-500`}
              >
                MENU 3
              </MenuButton>
              <AnimatePresence>
                {open && (
                  <MenuItems
                    anchor="bottom"
                    className="w-screen bg-gray-500"
                    static
                    as={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                  >
                    {productLinks.map((link) => (
                      <MenuItem
                        key={link.href}
                        className="block data-[focus]:bg-blue-100"
                      >
                        <a href={link.href}>{link.label}</a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                )}
              </AnimatePresence>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
}
