import logo from "../../assets/img/common/logo.png";

export default function Header() {
  return (
    <header id="header">
      <div className="inner">
        <div className="left">
          <div id="logo">
            <a href="#">
              <img src={logo} alt="로고" />
            </a>
          </div>
        </div>
        <div className="right">
          <nav id="nav">
            <ul>
              <li>
                <a href="#animation">Animation</a>
              </li>
              <li>
                <a href="#accordion-menu">Accordion Menu</a>
              </li>
              <li>
                <a href="#form">Form</a>
              </li>
              <li>
                <a href="#slide">Slide</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <button className="menu-toggle" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
