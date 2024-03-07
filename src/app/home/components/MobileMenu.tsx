import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
// import { Scrollbar } from "react-scrollbars-custom";

type MobileMenuProps = {
  menuVisible: boolean;
  toggleMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ menuVisible, toggleMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const handleDropdownClick = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <div className={`${menuVisible ? "mobile-menu-visible" : ""}`}>
      <div className="mobile-menu ">
        <div className="menu-backdrop"></div>
        <div className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times" />
        </div>
        {/* <Scrollbar elementRef={myRef} style={{ height: "100%" }}> */}
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/home">
              <img src="/assets/images/rwenaa-logo.png" alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse show clearfix"
            >
              <ul className="navigation clearfix">
                <li className="current">
                  <Link href="/home">Home</Link>
                </li>
                <li>
                  <Link href="/about">About US</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/contact">Contact US</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>L2-14, Realty Plaza, Ja-Ela, Sri Lanka</li>
              <li>
                <Link href="tel:+8801682648101">(074) 3020154</Link>
              </li>
              <li>
                <Link href="mailto:info@renewaa.com">info@renewaa.com</Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/home">
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/home">
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="/home">
                  <span className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="/home">
                  <span className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/home">
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* </Scrollbar> */}
      </div>
    </div>
  );
};

export default MobileMenu;
