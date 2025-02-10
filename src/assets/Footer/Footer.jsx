import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer
      id="footer"
      className="bg-tertiary flex flex-col justify-center items-center mx-auto px-2 py-3"
    >
      <p className="text-white text-sm sm:text-base lg:text-base">
        &copy; {currentYear} Aflah Agus Rizkika. All Rights Reserved.
      </p>
    </footer>
  );
}
