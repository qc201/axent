export default function Footer() {
  const currentYear: string = new Date().getFullYear().toString();
  return (
    <div className=" mt-auto bg-black text-white font-custom font-thin text-sm flex items-center justify-center sm:py-20 py-5">
      <div>Copyright © {currentYear} 2025 AXENT INTELLIGENCE INC</div>
    </div>
  );
}

// all page should have a minimal height of the screen,
// ensure the main content has flex-grow,
// so that the mt-auto can push the footer down to the end of the screen
