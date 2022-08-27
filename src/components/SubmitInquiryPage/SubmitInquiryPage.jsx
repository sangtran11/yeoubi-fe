import React, { useContext } from "react";
import "./index.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppProvider";

const loadingUrl = "/assets/images/loading-icon.gif";

const imgUrl =
  "https://lh3.googleusercontent.com/3nFwnBrbGR3UYkcQOuiGC3HBOY0spTsiCDnRdEZ0ycfJnuaF5n-eZ-m4LMC_qrS4SRhEI4_CdFUbZzSOVJqNc7XsF3niI5CE5Hf71LMVja6jjxdUwQLUjqi66CgoO1hhCLxSZR4gzQ=w2400";

const SubmitInquiryPage = () => {
  const { isLoading } = useContext(AppContext);
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  const handleSubmitAnother = () => {
    navigate("/inquiry");
  };
  if (isLoading) {
    return (
      <div className="loading-section">
        <img src={loadingUrl} alt="loading" />
      </div>
    );
  }
  return (
    <Row className="submit-inquiry-page">
      <Col span={24}>
        <div className="title">thank you</div>
        <div className="description">
          for your interest in our humble business!
          <br />
          your response has been recorded.
          <br />
          we will return to you very soon.
        </div>
        <div className="button-wrapper">
          <button className="btn mr-10" onClick={handleBackToHome}>
            back to home
          </button>
          <button className="btn" onClick={handleSubmitAnother}>
            submit another
          </button>
        </div>
      </Col>
      <Col className="img-wrapper" span={24}>
        <img className="img-submit" src={imgUrl} alt="img-submit" />
      </Col>
    </Row>
  );
};
export default SubmitInquiryPage;
