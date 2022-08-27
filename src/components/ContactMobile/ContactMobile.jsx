import React, { useContext } from "react";
import { Col, Row } from "antd";
import "./index.scss";
import { AppContext } from "../Context/AppProvider";

const ContactMobile = () => {
  const { pagename } = useContext(AppContext);
  const isProloguePage = pagename === "prologue";
  const isCaseStudyPage = pagename === "case-study";
  const isInquiryPage = pagename === "inquiry";
  const isExclusivePage = pagename === "exclusive-series";

  const customClasses = `contact-mobile ${
    isProloguePage
      ? "prologue-page-contact"
      : isCaseStudyPage
      ? "case-study-page-contact"
      : isInquiryPage
      ? "inquiry-page-contact"
      : isExclusivePage
      ? "exclusive-page-contact"
      : ""
  }`;
  return (
    <Row className={customClasses}>
      <Col span={24} className="contact-wrapper">
        <span>
          ig | <a href="https://www.instagram.com/at.yeoubi">@at.yeoubi</a>
          <br />
          fb | <a href="https://www.facebook.com/at.yeoubi">/at.yeoubi</a>
          <br />
          tel | +84 908 03 98 98 <br />
          contact@atyeoubi.com <br />
          mon to fri | 9am to 6pm
        </span>
      </Col>
      <Col span={24} className="copy-right-wrapper">
        <span>© 2022, yeoubi</span>
      </Col>
    </Row>
  );
};

export default ContactMobile;
