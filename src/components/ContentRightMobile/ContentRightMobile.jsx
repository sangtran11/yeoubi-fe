import React, { useContext } from "react";
import { Col, Row } from "antd";
import "./index.scss";
import { AppContext } from "../Context/AppProvider";

const home_wick =
  "https://lh3.googleusercontent.com/AT5ekcweZ3jTkJhzxK_KGSsKjjewyJViDwNPTHi4Xqwr_VEL1WOBJhUPiL5m-YIPJKk7Vh9HmOJRdSoOlGAvLXGfiaFp-21LIb2rymRoeoFwLHSaqPGmxKm2cCzCLN6OPFdFz7Vv=w2400";
const home_wax =
  "https://lh3.googleusercontent.com/YooQWH_Ih5CyDpFzLL3j0AWlFb0h0FB2PM7oiEQDVefSyeTAoQdGybDRsx9p9bcgTGyZlO5ZZhwV_QNcdSVUbZ2U6fyng1RKWxtXsZZuGtmwhrrsUyweJM7eLq1i0LHv-pVfFZGd=w2400";
const home_metal =
  "https://lh3.googleusercontent.com/LtlcFSWxV0lgWlP6wfQEpfOdOfYoTRxZX0tnDWmLw8CFb0b-zlukNlCFvOsxieBp1YDHzykfAZypVUba-h4FgdEHUXS5uPRygVwLHVglUXcIgGihOB5bqeiyUAbv_obdM1Wqz02T=w2400";
const case_study_gif =
  "https://lh3.googleusercontent.com/Kc62wzz3BbarEfsAsYdgZGtzmISY_O863lcoe3Xii5QQ0-xAoatqcMOgef-K6OE2NNZFuYR3Nv2EqnkaX172rQD46FkxoFyUCpvvmaTJf2ugfFcLIuWZk3dmAZiUF7ECPBqPgX_v_w=w2400";
const prologue_1 =
  "https://lh3.googleusercontent.com/wziRSHXFa0r1waPigO0p5tuZpdHHq55RX2Ra6eQJ8dh7CgbIX3y7pHRnThJADLp89L5cDzvEhlslvkNkO-W_poSZt7vgKt0T6TnaJqZFkoCXGRF-lUEuXHblWLtETkm38CAP9HAPpw=w2400";
const prologue_2 =
  "https://lh3.googleusercontent.com/7gDEGUBZVWoI4t9BmioIKVBiD-yHQpknHgfasop6PSz9AjWcoGGQ7Juq0C3RUdNv8vnrISj7LIDgIJ-MDNTgMm_zFvHP6C58133faxZmZlgGwK_5DFydTzSeCyJJe2k_7E04fOJxPg=w2400";

const ContentHome = () => {
  return (
    <>
      <div className="home-page-mobile-container">
        <div className="content-wrapper" span={24}>
          <div className="title">crackling | oak | smoldering combustion</div>
          <div className="image">
            <img className="img" src={home_wick} alt="gif-1" />
          </div>
        </div>
        <div className="content-wrapper" span={24}>
          <div className="title">thawed | opaque | aroma conveyance</div>
          <div className="image">
            <img className="img" src={home_wax} alt="gif-2" />
          </div>
        </div>
        <div className="content-wrapper" span={24}>
          <div className="title">sturdy | chrome silver | recyclable</div>
          <div className="image">
            <img className="img" src={home_metal} alt="gif-3" />
          </div>
        </div>
      </div>
    </>
  );
};

const ContentPrologue = () => {
  return (
    <div className="prologue-page-mobile-container">
      <div className="image">
        <img src={prologue_1} alt="prologue-1" width="100%" />
      </div>
      <div className="image">
        <img src={prologue_2} alt="prologue-2" width="100%" />
      </div>
    </div>
  );
};

const ContentCaseStudy = () => {
  return (
    <div className="case-study-page-mobile-container">
      <div className="wrapper-content">
        <p className="title">case study 000</p>
        <div className="description">
          staying true to its name, yeoubi creates{" "}
          <span className="sub-text-case-study">(case study 000)</span> as an
          open-ended sensory research with precise consideration given to
          further emotional development of our people. we divide the progression
          of actualization into: restart in position; reflect in one’s true
          colors; rebirth to break barriers; reform to embrace self-facets; and
          reconnect to infinite possibilities.
        </div>
        <div className="description">
          the collection features five signature scented candles, representing
          five profound learning stages throughout the progressive journey of
          ultimate self-love. the consolidation of each aroma possesses both
          sweets and bitters from your sentiment ups and downs, to best
          actualize a sensational euphoria for a deepened inner universe
          experience.
        </div>
        <div className="description">
          with <span className="sub-text-case-study">(case study 000)</span>, we
          bring upon the answers - an indulging but comforting space to make you
          your true self once again.
        </div>
        <div className="img-wrapper">
          <img src={case_study_gif} className="img" alt="img-case-study" />
        </div>
      </div>
    </div>
  );
};

const ContentExclusive = () => {
  const { exclusive } = useContext(AppContext);
  return (
    <div className="exclusive-page-mobile-container">
      <div className="image">
        <img src={exclusive?.gifMobile} alt="img-exclusive" width="100%" />
      </div>
    </div>
  );
};

const ContentRightMobile = () => {
  const { pagename } = useContext(AppContext);
  const isProloguePage = pagename === "prologue";
  const isCaseStudyPage = pagename === "case-study";
  const isExclusivePage = pagename === "exclusive-series";
  const isInquiryPage = pagename === "inquiry";
  const isHomePage = pagename === "home";

  const customClasses = `content-mobile-right ${
    isProloguePage
      ? "prologue-page-mobile-right"
      : isCaseStudyPage
      ? "case-study-page-mobile-right"
      : isInquiryPage
      ? "inquiry-page-mobile-right"
      : isHomePage
      ? "home-page-mobile-right"
      : isExclusivePage
      ? "exclusive-page-mobile-right"
      : ""
  }`;

  return (
    <Row className={customClasses}>
      <Col span={24}>
        {isProloguePage ? (
          <ContentPrologue />
        ) : isCaseStudyPage ? (
          <ContentCaseStudy />
        ) : isExclusivePage ? (
          <ContentExclusive />
        ) : isHomePage ? (
          <ContentHome />
        ) : null}
      </Col>
    </Row>
  );
};

export default ContentRightMobile;
