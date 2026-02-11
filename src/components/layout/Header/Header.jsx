import { useState } from "react";
import logo from "../../../assets/images/common/logo.png";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  // Mobile menu toggle
  const onClickMenuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-white z-999 shadow-sm">
      <div className="inner p-5 flex items-center justify-between">
        <div>
          <a className="flex items-center" href="#">
            <img className="w-27.25 h-auto" src={logo} alt="로고" />
          </a>
        </div>
        <nav
          className={`nav ${isActive ? 'active' : ''}`}
          onClick={onClickMenuToggle}
        >
          <ul className="flex items-center gap-0 lg:gap-20 flex-col lg:flex-row bg-white lg:bg-transparent">
            <li className="p-6 lg:p-0 text-center w-full lg:w-auto">
              <a className="font-medium hover:text-blue-500" href="#css-animation-sec">CSS Animation</a>
            </li>
            <li className="p-6 lg:p-0 text-center w-full lg:w-auto">
              <a className="font-medium hover:text-blue-500" href="#accordion-menu-sec">Accordion Menu</a>
            </li>
            <li className="p-6 lg:p-0 text-center w-full lg:w-auto">
              <a className="font-medium hover:text-blue-500" href="#slide-sec">Slide</a>
            </li>
            <li className="p-6 lg:p-0 text-center w-full lg:w-auto">
              <a className="font-medium hover:text-blue-500" href="#form-sec">Form</a>
            </li>
            <li className="p-6 lg:p-0 text-center w-full lg:w-auto">
              <a className="font-medium hover:text-blue-500" href="#contact-sec">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          className={`menu-toggle ${isActive ? 'active' : ''}`}
          type="button"
          onClick={onClickMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
