import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";
import "./index.scss";

const Header = () => {
  const { pagename } = useContext(AppContext);
  const headerText = "(your reserved hideout)";
  const isProloguePage = pagename === "prologue";
  const isCaseStudyPage = pagename === "case-study";
  const isInquiryPage = pagename === "inquiry";

  const customClasses = `header ${
    isProloguePage
      ? "prologue-page-header"
      : isCaseStudyPage
      ? "case-study-page-header"
      : isInquiryPage
      ? "inquiry-page-header"
      : ""
  }`;

  return <div className={customClasses}>{headerText}</div>;
};

export default Header;
