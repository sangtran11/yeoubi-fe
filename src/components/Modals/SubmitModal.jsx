import React, { useContext } from "react";
import { Modal, Col, Row } from "antd";
import { AppContext } from "../Context/AppProvider";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const loadingUrl = "/assets/images/loading-icon.gif";
const imgUrl =
  "https://lh3.googleusercontent.com/3nFwnBrbGR3UYkcQOuiGC3HBOY0spTsiCDnRdEZ0ycfJnuaF5n-eZ-m4LMC_qrS4SRhEI4_CdFUbZzSOVJqNc7XsF3niI5CE5Hf71LMVja6jjxdUwQLUjqi66CgoO1hhCLxSZR4gzQ=w2400";
const SubmitModal = () => {
  const { isOpenSubmitModal, setIsOpenSubmitModal, setIsResetForm, isLoading } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsOpenSubmitModal(false);
  };
  const handleBackToHome = () => {
    handleCancel();
    navigate("/");
  };
  const handleSubmitAnother = () => {
    handleCancel();
    setIsResetForm(true);
  };
  return (
    <>
      <Modal
        visible={isOpenSubmitModal}
        footer={null}
        keyboard
        width={1200}
        closable={false}
        className="submit-modal"
      >
        {isLoading ? (
          <div className="loading-section">
            <img src={loadingUrl} alt="loading" />
          </div>
        ) : (
          <div>
            <Row>
              <Col span={24}>
                <p className="name">thank you</p>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p className="description">
                  for your interest in our humble business!
                  <br />
                  your response has been recorded.
                  <br />
                  we will return to you very soon.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="button-section" lg={16} span={24}>
                <button className="btn mr-10" onClick={handleBackToHome}>
                  back to home
                </button>
                <button className="btn" onClick={handleSubmitAnother}>
                  submit another
                </button>
              </Col>
              <Col className="img-sign" lg={8} span={24}>
                <img className="img-submit" src={imgUrl} alt="img-submit" />
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </>
  );
};

export default SubmitModal;
