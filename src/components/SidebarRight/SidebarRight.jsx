import React, { useContext } from "react";
import { AppContext } from "../Context/AppProvider";
import "./index.scss";

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
const inquiry_1 =
  "https://lh3.googleusercontent.com/oYS9Zalrk1s2esIZvgzvOiuxaOcCwm_Ht6pVP3Sc7H8Jk9ynLB7ZAvI4h8YSAsnLLS1ANQWPANzdojyT0okYsuWD3EsA_JmtHERAT3cxTwGe-TFwuYBEthpWDHoHkZid8807dA9Y8w=w2400";
const inquiry_2 =
  "https://lh3.googleusercontent.com/Tzm9jRAvm0tAwXEQld-dCKN8ioPFMVQvSlRTfHNJ3YAvUAkgEbdwFUJHLVLSbFfwin7r4waN4WaMPx2bfd1pVBOM3iVFfLVqg1iDvKMvtE_QaYFes1Bg1Cs6_RCrEA3pTsnQILedVg=w2400";
const inquiry_3 =
  "https://lh3.googleusercontent.com/eU6zPoqCJk27ZlgOtltMFiy_KeWKFCL8nksrLGdXCe9D5RNTx9XwQwuTNcist3MjkBQcrQBDLXq7E585ivY5lSW3z4Oal96bKj-PaC3-iOBEVqnSr1kiIhMHBxsC-yJBr34nmuu2Qw=w2400";
const inquiry_4 =
  "https://lh3.googleusercontent.com/_q5yhuSvRWDCQPNNlxmJ3KyRoKjQVaqFXfGv5vKFYU-DJSJuxaLraMF610WqEB8Qzl3cqrCQSGb32hgu0sZaTqQUzgpXLvQObMcbJk2J0fTnlf5BeV6nZLT7apkKtvW_8VCA-dDMyA=w2400";
const inquiry_5 =
  "https://lh3.googleusercontent.com/L-79UkCeHnAAURJPoZ7kUdTp8C1UHgv5yEYTCDeCzXTJ37JXFzLvccF_ASkqzibeYWs9SzGAKUtRyV8mdZDjiY_tQZ3MJRH8VXPP6I4EoGtRw0dugR2QHp_LFGbHAB2MZ37op8sTqw=w2400";

const ContentHome = () => {
  return (
    <>
      <div className="wrap-img">
        <div className="layer">
          <div className="test-1">crackling</div>
          <div className="test-2">oak</div>
          <div className="test-3">smoldering combustion</div>
        </div>
        <img className="img" src={home_wick} alt="gif-1" />
      </div>
      <div className="wrap-img">
        <div className="layer">
          <div className="test-1">thawed</div>
          <div className="test-2">opaque</div>
          <div className="test-3">aroma conveyance</div>
        </div>
        <img className="img" src={home_wax} alt="gif-2" />
      </div>
      <div className="wrap-img margin-0">
        <div className="layer">
          <div className="test-1">sturdy</div>
          <div className="test-2">chrome</div>
          <div className="test-3">recyclable</div>
        </div>
        <img className="img" src={home_metal} alt="gif-3" />
      </div>
    </>
  );
};

const ContentPrologue = () => {
  return (
    <div className="prologue-right-wrapper-video">
      <div className="wrap-prologue-video">
        <img src={prologue_1} alt="prologue-yeoubi-1" width="100%" />
      </div>
      <div className="wrap-prologue-video">
        <img src={prologue_2} alt="prologue-yeoubi-2" width="100%" />
      </div>
    </div>
  );
};

const ContentCaseStudy = () => {
  return (
    <div className="case-study-container">
      <p className="title">case study 000</p>
      <div className="description">
        staying true to its name, yeoubi creates{" "}
        <span className="sub-text-case-study">(case study 000)</span> as an
        open-ended sensory research with precise consideration given to further
        emotional development of our people. we divide the progression of
        actualization into: restart in position; reflect in one’s true colors;
        rebirth to break barriers; reform to embrace self-facets; and reconnect
        to infinite possibilities.
      </div>
      <div className="description">
        the collection features five signature scented candles, representing
        five profound learning stages throughout the progressive journey of
        ultimate self-love. the consolidation of each aroma possesses both
        sweets and bitters from your sentiment ups and downs, to best actualize
        a sensational euphoria for a deepened inner universe experience.
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
  );
};

const ContentExclusive = () => {
  const { exclusive } = useContext(AppContext);
  return (
    <>
      <div className="wrap-img">
        <img
          className="img"
          src={exclusive?.imgRight1}
          alt="gif-1"
          width="100%"
        />
      </div>
      <div className="wrap-img">
        <img
          className="img"
          src={exclusive?.imgRight2}
          alt="gif-2"
          width="100%"
        />
      </div>
      <div className="wrap-img margin-0">
        <img
          className="img"
          src={exclusive?.imgRight3}
          alt="gif-3"
          width="100%"
        />
      </div>
    </>
  );
};

const ContentInquiry = () => {
  return (
    <div className="content-container">
      <div className="item">
        <div className="sub-text">(submit inquiry)</div>
        <img src={inquiry_1} alt="img-1" />
      </div>
      <div className="item">
        <div className="sub-text">(curate order details & send quotations)</div>
        <img src={inquiry_2} alt="img-2" />
      </div>
      <div className="item">
        <div className="sub-text">(select, confirm & make payments)</div>
        <img src={inquiry_3} alt="img-3" />
      </div>
      <div className="item">
        <div className="sub-text">(sit back & relax)</div>
        <img src={inquiry_4} alt="img-4" />
      </div>
      <div className="item">
        <div className="sub-text">(receive your candles)</div>
        <img src={inquiry_5} alt="img-5" />
      </div>
    </div>
  );
};

const SidebarRight = () => {
  const { setIsOpenCandleCareModal, pagename } = useContext(AppContext);

  const isProloguePage = pagename === "prologue";
  const isCaseStudyPage = pagename === "case-study";
  const isExclusivePage = pagename === "exclusive-series";
  const isInquiryPage = pagename === "inquiry";

  const customClasses = `sidebar-right ${
    isProloguePage
      ? "prologue-page-right"
      : isCaseStudyPage
      ? "case-study-page-right"
      : isInquiryPage
      ? "inquiry-page-right"
      : ""
  }`;
  const handleOpenModalCandleCare = () => {
    setIsOpenCandleCareModal(true);
  };

  return (
    <div className={customClasses}>
      <div className="content-right-container">
        {isProloguePage ? (
          <ContentPrologue />
        ) : isCaseStudyPage ? (
          <ContentCaseStudy />
        ) : isExclusivePage ? (
          <ContentExclusive />
        ) : isInquiryPage ? (
          <ContentInquiry />
        ) : (
          <ContentHome />
        )}
        <div className="fixed-bottom">
          <div className="candle-care-section bounce-2">
            <span className="btn-item" onClick={handleOpenModalCandleCare}>
              <span className="name">candle care</span>
            </span>
          </div>
          <div className="quote-section">
            <span>
              you cannot practice
              <br />
              self-love if you cannot <br />
              take care of what you love
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
