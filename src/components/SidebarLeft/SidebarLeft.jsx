import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

const blueLogo = "/assets/images/blue.logo.png";
const blackLogo = "/assets/images/black.logo.png";

const SidebarLeft = () => {
  const { pagename } = useContext(AppContext);

  const isProloguePage = pagename === "prologue";
  const isCaseStudyPage = pagename === "case-study";
  const isInquiryPage = pagename === "inquiry";

  const customClasses = `sidebar-left ${
    isProloguePage
      ? "prologue-page-left"
      : isCaseStudyPage
      ? "case-study-page-left"
      : isInquiryPage
      ? "inquiry-page-left"
      : ""
  }`;

  return (
    <div className={customClasses}>
      <Link to="/">
        <img
          className="logo-img"
          src={isCaseStudyPage ? blackLogo : blueLogo}
          alt="logo-img"
        />
      </Link>
      <div className="nav-group">
        <div className="wrap-nav-item bounce-2">
          <Link className="nav-item" to="/prologue">
            <span className="nav-name">prologue</span>
          </Link>
        </div>
        <div className="wrap-nav-item bounce-2">
          <Link className="nav-item" to="/case-study">
            <span className="nav-name">case study 000</span>
          </Link>
        </div>
        <div className="wrap-nav-item bounce-2">
          <Link className="nav-item" to="/exclusive-series">
            <span className="nav-name">exclusive series</span>
          </Link>
        </div>
        <div className="wrap-nav-item bounce-2">
          <Link className="nav-item" to="/inquiry">
            <span className="nav-name">inquiry</span>
          </Link>
        </div>
      </div>
      <div className="contact">
        <span>
          ig | <a href="https://www.instagram.com/at.yeoubi">@at.yeoubi</a>
          <br />
          fb | <a href="https://www.facebook.com/at.yeoubi">/at.yeoubi</a>
          <br />
          tel | +84 908 03 98 98 <br />
          contact@atyeoubi.com <br />
          mon to fri | 9am to 6pm <br />© 2022, yeoubi
        </span>
      </div>
    </div>
  );
};

export default SidebarLeft;
