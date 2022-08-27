import React, { useContext } from "react";
import { Modal, Col, Row } from "antd";
import { AppContext } from "../Context/AppProvider";
import "./index.scss";

const imageIcon1 =
  "https://lh3.googleusercontent.com/_bs_eH30G4fju-C3j0ZN544V10RLLwo200w0mnOhmKe1Jmjq1vH74I4MWN4unT3c0xxI21fPHuZjPdROvD-97qNTUVWbtQgqoyiPLf4R5hONzQU8NyBEn5zgvvimV1diMbKkpPfpzA=w2400";
const imageIcon2 =
  "https://lh3.googleusercontent.com/mVo4PpModVtIMsKW_lum49E_XaOtGfWW0maCSk9Dyt8ijO4d0w4RhSn1NDMBMWSNrTDJT5G6v_l3sYy9AhIABPiZVVb4xAFWpfQvNZXo8TYu0fyOSeFy8B9KwQ6GHA0Ut5yF2mvtAA=w2400";
const imageIcon3 =
  "https://lh3.googleusercontent.com/9xXIjRSFMhDfKoUBEqubGjO6haJSwtc7y539P5XiPs5Bvd77Ub3iSEtIGpzlsQebdEpGgcr1slCQC9cQHf6XwGc6C3WWandUi4LamhHwWEVqCf-p_jEHP3HGdhVxNM2e5SYreiiK4A=w2400";
const x_black = "/assets/images/x_black.png";

const CandleCareModal = () => {
  const { isOpenCandleCareModal, setIsOpenCandleCareModal } =
    useContext(AppContext);
  const handleCancel = () => {
    setIsOpenCandleCareModal(false);
  };
  return (
    <>
      <Modal
        visible={isOpenCandleCareModal}
        footer={null}
        keyboard
        destroyOnClose
        width={1200}
        closable={false}
      >
        <Row className="candle-care-modal">
          <div className="close-icon" onClick={handleCancel}>
            <img src={x_black} alt="x_black" />
          </div>
          <Col className="left-side" span={17}>
            <div className="title">candle care</div>
            <div className="sub-title">
              (you cannot practice self-love <br />
              if you cannot take care of what you love)
            </div>
            <div className="content-container">
              <div className="item">
                <p className="sub-title">(trim off the irrelevance)</p>
                <p className="description">
                  for a clean,
                  <br />
                  smoke-free burn,
                  <br /> trim wick to 5mm
                  <br /> before each lighting.
                </p>
              </div>
              <div className="item">
                <p className="sub-title">(set flame, not self-blame)</p>
                <p className="description">
                  be mindful
                  <br />
                  on that first light.
                  <br />
                  at least 2-hour-meltdown
                  <br /> to avoid tunneling.
                </p>
              </div>
              <div className="item">
                <p className="sub-title">(repurpose what’s yours)</p>
                <p className="description">
                  don’t hold on to
                  <br />
                  what’s left.
                  <br />
                  when remain 1cm of wax,
                  <br />
                  upcycle the can.
                </p>
              </div>
              <div className="item">
                <p className="mid-image">
                  <span>(</span>
                  <img
                    className="img-icon"
                    src={imageIcon1}
                    alt="img-1"
                    width="100"
                  />
                  <span>)</span>
                </p>
                <p className="description mb-0">
                  wherever
                  <br />
                  you sit your piece,
                  <br />
                  watch out the surface,
                  <br />
                  for a fulfilled inner peace.
                </p>
              </div>
              <div className="item">
                <p className="mid-image">
                  <span>(</span>
                  <img
                    className="img-icon"
                    src={imageIcon2}
                    alt="img-2"
                    width="100"
                  />
                  <span>)</span>
                </p>
                <p className="description mb-0">
                  always good times,
                  <br />
                  not long time.
                  <br />4 hours at max.
                  <br />
                  don’t let the burns go on.
                </p>
              </div>
              <div className="item">
                <p className="mid-image mb-0">
                  <span>(</span>
                  <img
                    className="img-icon"
                    src={imageIcon3}
                    alt="img-3"
                    width="100"
                  />
                  <span>)</span>
                </p>
                <p className="description">
                  remove
                  <br />
                  the remaining,
                  <br />
                  frozen it,
                  <br />
                  pop wax out.
                </p>
              </div>
            </div>
          </Col>
          <Col className="mid-side" span={2}>
            <div className="color-transparent">
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
            <div>
              <i>( )</i>
            </div>
          </Col>
          <Col className="right-side" span={5}>
            <div className="title">warning!</div>
            <div className="sub-title sub-text">(do's & don'ts)</div>
            <div className="wrap-content-right-side">
              <div className="item burn-text">burn within sight.</div>
              <div className="item  mb-32">
                keep away from children, beloved pets, flammables.
              </div>
              <div className="item  mb-32">
                to extinguish the candle, simply set the lid on top of its jar.
                no pressing down or further securing is needed. blowing out is
                not recommended.
              </div>
              <div className="item">
                beware of hot surfaces while lighting & burning.
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CandleCareModal;
