import React from "react";
import "./index.scss";
import { Col, Row } from "antd";

const imageIcon1 =
  "https://lh3.googleusercontent.com/_bs_eH30G4fju-C3j0ZN544V10RLLwo200w0mnOhmKe1Jmjq1vH74I4MWN4unT3c0xxI21fPHuZjPdROvD-97qNTUVWbtQgqoyiPLf4R5hONzQU8NyBEn5zgvvimV1diMbKkpPfpzA=w2400";
const imageIcon2 =
  "https://lh3.googleusercontent.com/mVo4PpModVtIMsKW_lum49E_XaOtGfWW0maCSk9Dyt8ijO4d0w4RhSn1NDMBMWSNrTDJT5G6v_l3sYy9AhIABPiZVVb4xAFWpfQvNZXo8TYu0fyOSeFy8B9KwQ6GHA0Ut5yF2mvtAA=w2400";
const imageIcon3 =
  "https://lh3.googleusercontent.com/9xXIjRSFMhDfKoUBEqubGjO6haJSwtc7y539P5XiPs5Bvd77Ub3iSEtIGpzlsQebdEpGgcr1slCQC9cQHf6XwGc6C3WWandUi4LamhHwWEVqCf-p_jEHP3HGdhVxNM2e5SYreiiK4A=w2400";

const CandleCarePage = () => {
  return (
    <Row className="candle-care-page">
      <Col className="candle-care-content" span={24}>
        <div className="title-wrapper">
          <div className="title">candle care</div>
          <div className="sub-title">
            (you cannot practice self-love
            <br />
            if you cannot take care of what you love)
          </div>
        </div>
        <div className="item-wrapper">
          <p className="item-name">(trim off the irrelevance)</p>
          <p className="item-description">
            for a clean,
            <br />
            smoke-free burn,
            <br />
            trim wick to 5mm
            <br />
            before each lighting.
          </p>
          <p className="item-image">
            <span>(</span>
            <img src={imageIcon1} alt="imageIcon1" width="39px" />
            <span>)</span>
          </p>
          <p className="item-description">
            wherever
            <br />
            you sit your piece,
            <br />
            watch out the surface,
            <br />
            for a fulfilled inner peace.
          </p>
        </div>
        <div className="item-wrapper">
          <p className="item-name">(set flame, not self-blame)</p>
          <p className="item-description">
            be mindful
            <br />
            on that first light.
            <br />
            at least 2-hour-meltdown
            <br />
            to avoid tunneling.
          </p>
          <p className="item-image">
            <span>(</span>
            <img src={imageIcon2} alt="imageIcon2" width="39px" />
            <span>)</span>
          </p>
          <p className="item-description">
            always good times,
            <br />
            not long time.
            <br />
            4 hours at max.
            <br />
            don’t let the burns go on.
          </p>
        </div>
        <div className="item-wrapper margin-b-0">
          <p className="item-name">(repurpose what's yours)</p>
          <p className="item-description">
            don’t hold on to
            <br />
            what’s left.
            <br />
            when remain 1cm of wax,
            <br />
            upcycle the can.
          </p>
          <p className="item-image">
            <span>(</span>
            <img src={imageIcon3} alt="imageIcon3" width="39px" />
            <span>)</span>
          </p>
          <p className="item-description margin-b-0">
            remove
            <br />
            the remaining,
            <br />
            frozen it,
            <br />
            pop wax out.
          </p>
        </div>
      </Col>
      <Col className="candle-care-warning" span={24}>
        <div className="title-wrapper">
          <div className="title">warning!</div>
          <div className="sub-title">(do’s and don’ts)</div>
        </div>
        <div className="item-wrapper">
          <p className="item-description">burn within sight.</p>
          <p className="item-description">
            keep away from children,
            <br />
            beloved pets, flammables.
          </p>
          <p className="item-description">
            to extinguish the candle, simply
            <br />
            set the lid on top of its jar.
            <br />
            no pressing down or further
            <br />
            securing is needed. blowing out
            <br />
            is not recommended.
          </p>
          <p className="item-description margin-b-0">
            beware of hot surfaces while
            <br />
            lighting & burning.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default CandleCarePage;
