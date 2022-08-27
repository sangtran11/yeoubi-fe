import React, { useContext, useState } from "react";
import { Col, Row, Drawer } from "antd";
import "./index.scss";
import { AppContext } from "../Context/AppProvider";
import { Link } from "react-router-dom";

const blueLogo = "/assets/images/blue.logo.png";
const blackLogo = "/assets/images/black.logo.png";
const sidebarBlack = "/assets/images/sidebar_black.png";
const sidebarBlue = "/assets/images/sidebar_blue.png";
const x_black = "/assets/images/x_black.png";
const x_blue = "/assets/images/x_blue.png";

const NavigationMobile = () => {
  const { pagename } = useContext(AppContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const isProloguePage = pagename === "prologue";
  const isCaseStudyPage = pagename === "case-study";
  const isInquiryPage = pagename === "inquiry";
  const isExclusivePage = pagename === "exclusive-series";

  const customClasses = `navigation ${
    isProloguePage
      ? "prologue-page-navigation"
      : isCaseStudyPage
      ? "case-study-page-navigation"
      : isInquiryPage
      ? "inquiry-page-navigation"
      : isExclusivePage
      ? "exclusive-page-navigation"
      : ""
  }`;

  const drawerClasses = `drawer-section-${
    isProloguePage
      ? "prologue"
      : isCaseStudyPage
      ? "case-study"
      : isInquiryPage
      ? "inquiry"
      : "home"
  }`;

  const customHeaderClasses = `header-mobile ${
    isProloguePage
      ? "prologue-page-header-mobile"
      : isCaseStudyPage
      ? "case-study-page-header-mobile"
      : isInquiryPage
      ? "inquiry-page-header-mobile"
      : ""
  }`;

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <div className="fixed-navigation">
        <div className={customHeaderClasses}>(your reserved hideout)</div>
        <Row className={customClasses}>
          <Col span={24}>
            <div className="split-section">
              <Link to="/">
                <img
                  className="logo-img"
                  src={isCaseStudyPage ? blackLogo : blueLogo}
                  alt="logo-img"
                />
              </Link>
            </div>
            <div className=" split-section text-right">
              <span type="primary" onClick={showDrawer}>
                <img
                  className="sidebar-icon"
                  src={isCaseStudyPage ? sidebarBlack : sidebarBlue}
                  alt="sidebar-img"
                />
              </span>
              <Drawer
                className={drawerClasses}
                placement="right"
                visible={openDrawer}
              >
                <div className="close-icon text-right" onClick={onClose}>
                  <img
                    className="x-icon"
                    src={isCaseStudyPage ? x_black : x_blue}
                    alt="x-img"
                  />
                </div>
                <div className="nav-group-mobile">
                  <div className="wrap-nav-item-mobile bounce-2-mobile">
                    <Link className="nav-item" to="/prologue">
                      <span className="nav-name">prologue</span>
                    </Link>
                  </div>
                  <div className="wrap-nav-item-mobile bounce-2-mobile">
                    <Link className="nav-item" to="/case-study">
                      <span className="nav-name">case study 000</span>
                    </Link>
                  </div>
                  <div className="wrap-nav-item-mobile bounce-2-mobile">
                    <Link className="nav-item" to="/exclusive-series">
                      <span className="nav-name">exclusive series</span>
                    </Link>
                  </div>
                  <div className="wrap-nav-item-mobile bounce-2-mobile">
                    <Link className="nav-item" to="/inquiry">
                      <span className="nav-name">inquiry</span>
                    </Link>
                  </div>
                  <div className="wrap-nav-item-mobile bounce-2-mobile">
                    <Link className="nav-item" to="/candle-care-inquiry">
                      <span className="nav-name">candle care</span>
                    </Link>
                  </div>
                </div>
              </Drawer>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NavigationMobile;
