import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  SidebarLeft,
  SidebarRight,
  Home,
  Prologue,
  CaseStudy,
  CandleCareModal,
  ExclusiveSeries,
  Inquiry,
  SubmitModal,
  ContactMobile,
  ContentRightMobile,
  NavigationMobile,
  SubmitInquiryPage,
  CandleCarePage,
} from "./index";
import { Col, Row } from "antd";
import AppProvider from "./Context/AppProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Row className="desktop">
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row className="desktop">
          <Col span={6}>
            <SidebarLeft />
          </Col>
          <Col span={12}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/prologue" element={<Prologue />}></Route>
              <Route exact path="/case-study" element={<CaseStudy />}></Route>
              <Route
                exact
                path="/exclusive-series"
                element={<ExclusiveSeries />}
              ></Route>
              <Route exact path="/inquiry" element={<Inquiry />}></Route>
            </Routes>
          </Col>
          <Col span={6}>
            <SidebarRight />
          </Col>
        </Row>
        <Row className="mobile">
          <Col span={24}>
            <NavigationMobile />
          </Col>
          <Col className="mt-to-fixed-header" span={24}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/prologue" element={<Prologue />}></Route>
              <Route exact path="/case-study" element={<CaseStudy />}></Route>
              <Route
                exact
                path="/exclusive-series"
                element={<ExclusiveSeries />}
              ></Route>
              <Route exact path="/inquiry" element={<Inquiry />}></Route>
              <Route
                exact
                path="/submit-inquiry"
                element={<SubmitInquiryPage />}
              ></Route>
              <Route
                exact
                path="/candle-care-inquiry"
                element={<CandleCarePage />}
              ></Route>
            </Routes>
          </Col>
          <Col span={24} lg={6}>
            <ContentRightMobile />
          </Col>
          <Col span={24}>
            <ContactMobile />
          </Col>
        </Row>
        <CandleCareModal />
        <SubmitModal />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
