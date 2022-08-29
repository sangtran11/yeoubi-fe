import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "antd";
import "./index.scss";

const imagesList = [
  {
    id: 1,
    name: "confidently lost",
    imgUrl:
      "https://lh3.googleusercontent.com/wPgDPpTG3qVsFVezOdQ8ezrTr5QtdiYjLhx6pNF8JPYCP9Nua-E1AV6m9akgJify4CzwJQeHdmNTVCuvgJ0KU2Tm45IWXeqTvYl36e8LEJf6FaAbNq8HJeMiuTirxPJ2SdCXrZW1EQ=w2400",
    layer: "(floral)",
    mass1: `220g net wt. <span class="subText">(60 hours)</span>`,
    mass2: `vnd 480.000 <span class="subText">(vat included)</span>`,
    mass1Mobile: `220 g net wt.<br/><span class="subText">(60 hours)</span>`,
    mass2Mobile: `vnd 480.000<br/><span class="subText">(vat included)</span>`,
    description: `a romantic wanderer is indeed the best pretender,<br/>who knows how to disguise their state of being lost<br/> into a purposeful appearance.<br/>stay true.<br/> focus on <span class="subdescription">(sensing your direction).</span>`,
    descriptionMobile: `a romantic wanderer is indeed the best<br/>pretender, who knows how to disguise<br/>their state of being lost<br/>into a purposeful appearance.<br/>stay true.<br/>focus on <span class="subdescription">(sensing your direction).</span>`,
  },
  {
    id: 2,
    name: "blue",
    imgUrl:
      "https://lh3.googleusercontent.com/BbrZ_T8-BHbZp96S3dHE0764OIliylDJNFYGauroKWSb4EDunNRsYqlrS2AbIrkpvlTXS_xr9yehdGQKBiXYydgs4qlfEiCFXwG_GGWwLTko45tKuyFKwtWpwzNFMz9YmaI2-umMHw=w2400",
    layer: "(aquatic)",
    mass1: `220g net wt. <span class="subText">(60 hours)</span>`,
    mass2: `vnd 480.000 <span class="subText">(vat included)</span>`,
    mass1Mobile: `220 g net wt.<br/><span class="subText">(60 hours)</span>`,
    mass2Mobile: `vnd 480.000<br/><span class="subText">(vat included)</span>`,
    description: `truth is, in those lost moments,<br/>only you can <span class="subdescription">(define your blues).</span><br/>blue itself doesn't always have to be blue,<br/>but rather despair, intuition, or comfort.<br/>no one understands you better than yourself, anyway.`,
    descriptionMobile: `truth is, in those lost moments,<br/>only you can <span class="subdescription">(define your blues).</span><br/>blue itself doesn't always have to be blue,<br/>but rather despair, intuition, or comfort.<br/>no one understands you<br/>better than yourself, anyway.`,
  },
  {
    id: 3,
    name: "free yourself",
    imgUrl:
      "https://lh3.googleusercontent.com/T3coKCr3X1R1R9vkc-pI6bW4IhEysf3CvSeYYjjC1SKx4spby7jzCh27qFjEAkFYicQmvrhdRnOhStU3vqalovJnsaGsQbTjevsVxoyhtH813Y3jz9hdNNu3s5FPuBem2xTEXVhoTw=w2400",
    layer: "(green)",
    mass1: `220g net wt. <span class="subText">(60 hours)</span>`,
    mass2: `vnd 480.000 <span class="subText">(vat included)</span>`,
    mass1Mobile: `220 g net wt.<br/><span class="subText">(60 hours)</span>`,
    mass2Mobile: `vnd 480.000<br/><span class="subText">(vat included)</span>`,
    description: `perhaps, it is time to <span class="subdescription">(step out of comfort zone)</span>,<br/>that tough shell of yours.<br/>what brings you too much security<br/>can become your greatest barrier.<br/>open up to see what your inner universe has to offer.`,
    descriptionMobile: `perhaps, it is time to <span class="subdescription">(step out of comfort zone)</span>,<br/>that tough shell of yours.<br/>what brings you too much security<br/>can become your greatest barrier.<br/>open up to see<br/>what your inner universe has to offer.`,
  },
  {
    id: 4,
    name: "i am mine",
    imgUrl:
      "https://lh3.googleusercontent.com/LJ7df1fQDc7GUjF1ilK3wtxOiJFWKFu2maYAhxi0V1ixoRRshkmaPLZ8H_kdYPB5RoJzjhleWzWzqlaJnHxKChjpYHNK717dQbwqaCSB7N-drMIm7JUibeA4FaReFRIqNtzO6UfPpQ=w2400",
    layer: "(citrus)",
    mass1: `220g net wt. <span class="subText">(60 hours)</span>`,
    mass2: `vnd 480.000 <span class="subText">(vat included)</span>`,
    mass1Mobile: `220 g net wt.<br/><span class="subText">(60 hours)</span>`,
    mass2Mobile: `vnd 480.000<br/><span class="subText">(vat included)</span>`,
    description: `claim that pleasure within your own state of mind.<br/>you, alone, are enough.<br/><span class="subdescription">(embrace your flaws).</span><br/>they are what make you real.<br/>ask yourself<br/>“before i am anyone else’s, who do i belong to?”`,
    descriptionMobile: `claim that pleasure within<br/>your own state of mind.<br/>you, alone, are enough.<br/><span class="subdescription">(embrace your flaws).</span><br/>they are what make you real.<br/>ask yourself<br/>“before i am anyone else’s, who do i belong to?”`,
  },
  {
    id: 5,
    name: "yours, to be",
    imgUrl:
      "https://lh3.googleusercontent.com/4Kqt-ZAIXDd4kyydJzg6avmEbjecg39pSYwE8jbB7JrlsfhxLChhnfqwH0_yaJ3Kq35gss-DAwst9TwdqgJJwqb62PZKgnbxPuS4ylMM34zeU-_cXeoY8eNIiDsrET0F8x9KDZiLYA=w2400",
    layer: "(fruity)",
    mass1: `220g net wt. <span class="subText">(60 hours)</span>`,
    mass2: `vnd 480.000 <span class="subText">(vat included)</span>`,
    mass1Mobile: `220 g net wt.<br/><span class="subText">(60 hours)</span>`,
    mass2Mobile: `vnd 480.000<br/><span class="subText">(vat included)</span>`,
    description: `the moment self-love is found among oneself is also<br/>the beginning of an exciting self-narrated journey.<br/><span class="subdescription">(life is now yours to decipher).</span><br/>to love without limit.<br/>to reconnect the unfinished.<br/>to write up the untold.`,
    descriptionMobile: `the moment self-love is found among oneself<br/>is also the beginning of an exciting<br/>self-narrated journey.<br/><span class="subdescription">(life is now yours to decipher).</span><br/>to love without limit.<br/>to reconnect the unfinished.<br/>to write up the untold.`,
  },
  {
    id: 6,
    name: "matchbox",
    imgUrl:
      "https://lh3.googleusercontent.com/s02Ul3oCOlleQV1163gRySw14wn8ORJyb37RSfTBdHBndUtTSqgig2FoNc7VHWCKQUb48MlNrTDDiebkmyYhAIRxzgSopjsEEU_JXtNeEsRNkHbDE0z3Q71LqWafWwLWsDo4KLBL1A=w2400",
    layer: "(matchbox)",
    mass1: "10 matches",
    mass2: `vnd 20.000 <span class="subText">(vat included)</span>`,
    mass1Mobile: `10 matches`,
    mass2Mobile: `vnd 20.000<br/><span class="subText">(vat included)</span>`,
    description: `the euphoric aroma<br/>for a deepened soul<br/>the sensational joy<br/>at yeoubi, we bestow.<br/>in those tough times,<br/>strike a match<br/>soft scent to unwind<br/>dim light to restart.`,
    descriptionMobile: `the euphoric aroma<br/>for a deepened soul<br/>the sensational joy<br/>at yeoubi, we bestow.<br/>in those tough times,<br/>strike a match<br/>soft scent to unwind<br/>dim light to restart.`,
  },
];

const tincanImgUrl =
  "https://lh3.googleusercontent.com/FJigPZp_88yhQy9tYplMWfZh0krHVNtIbW572oCAO_X6lAnZ-zou4hStWBI_pyxr9CFFyEkxPwC4lUFcs_wBPRzDXHGaVo28TJV8yvvBRN85McKhdPSYyWHL31ScY8hxhBNR-X6n3A=w2400";
const woodenwickImgUrl =
  "https://lh3.googleusercontent.com/89MAzpJ2pl_oWmub8MdKmFD-koAGSqms4asOgK6tJx_QNJaqkpq9DpW9N0FfiHMx9WFhUTI2lx-wsyxSK7PuVdmI_WGsehX2w-ijH4J9a-nncf2ZJxrA3aDwFT9ywlQQyTiLD7sNwQ=w2400";

const soywaxImgUrl = {
  confidently:
    "https://lh3.googleusercontent.com/ppqHzBTWi3Z_LcSb4aCFhBrl-jcuN9mXiDtYzGazRyzKb100yjNm2vf5mdFjSzSP4pOahArczoZCN-kK_cTq7bBPgLV1NRgCcROfOQhGvJFOba962aB6qzoMniPD5nD6ZWxtdVrr0g=w2400",
  blue: "https://lh3.googleusercontent.com/3QvdEftwt4WMN0H0Ft5M9cR2RUXhn5bfxQ2x1o5Q3pnEHpFrm3Tvufps9004bdzdHDgzABGpbRmCvaInSyoLKfzZXGeEIcvpO_VpL5rjKg9je77K53fJzBWanXB97ukg9vHGZ-jV9w=w2400",
  freeYourself:
    "https://lh3.googleusercontent.com/aP9gpVB7dOktsdHJYRtDkZbtOCdBdaNSWKEbkQu1DHgeQxdwT3-DOl88WkMyYBBGyE2ySXwHwbRgDGvQR8XNOpmA_WWw8ATetj8L1HdC6jFue9Z5YKmdkRFdIKiWjAVujEiS-wh2YA=w2400",
  mine: "https://lh3.googleusercontent.com/xaC-ZcYzDNed6wNzXBMmCzLpxWfdQtgaDkqY0zLdd8MHYLmTE0iQkNsyFLKJcIOXRu1rnQr5ycJZtnh2nlbmgQDYXSaSWrBquOjwljYn1HiEye92XAtpsVi-CnJU-nRxenF7_Hdu4A=w2400",
  yourTobe:
    "https://lh3.googleusercontent.com/j7AcgPjaZj3DR_yYJ724GgfwQ6q9uX4eSvHzuSQ0rRjrzqpu7c7nwzaSqs-3xc4U8l27fqnfFBCUSqZT5i7xNDovw2gX6aEmbSOj9Y3MwoQMt7EEpYLhx42qX5swf1DozFty43YGdA=w2400",
};

const fireMatchbox =
  "https://lh3.googleusercontent.com/Yev0GIUdxvjsok6kesRuHDlRedHxlsDY-uaiXa5_bHXYQHeE8Z73upMPq4F2jXkCanoheV5QgfzkbnO6ZH3R9CknvuimPB-ZuQ2RJWQNQtWYywmkSppETi58cqp6KThVlJ5rP-mF=w2400";

const CaseStudy = () => {
  const [currentSlide, setCurrentSlide] = useState(() => imagesList[0]);
  const [images, setImages] = useState(() => imagesList);
  const carouselRef = useRef();
  const carouselRefMobile = useRef();
  const widthScreen = document.documentElement.clientWidth;

  useEffect(() => {
    const nameSectionEl = document.getElementById("name-section");
    const carouselSectionEl = document.getElementById("carousel-layer");

    nameSectionEl.addEventListener("mouseover", handleMouseOver, false);
    nameSectionEl.addEventListener("mouseout", handleMouseOut, false);

    function handleMouseOver() {
      nameSectionEl.setAttribute(
        "style",
        "background-color:#000000;color: #6695ca"
      );

      carouselSectionEl.classList.add("display-layer");
    }

    function handleMouseOut() {
      nameSectionEl.setAttribute(
        "style",
        "background-color:#6695ca;color:#000000"
      );
      carouselSectionEl.classList.remove("display-layer");
    }

    return () => {
      nameSectionEl.removeEventListener("mouseover", handleMouseOver, false);
      nameSectionEl.removeEventListener("mouseout", handleMouseOut, false);
    };
  }, []);

  const onChange = (index) => {
    setCurrentSlide(imagesList[index]);
    setImages(imagesList);
  };

  const handleSelectCategory = (url) => {
    let temp = JSON.parse(JSON.stringify(imagesList));
    const index = temp.findIndex((item) => item.id === currentSlide.id);
    temp[index].imgUrl = url;
    setImages(temp);
  };

  const handleSelectCategorySoyWax = () => {
    const categoryId = currentSlide.id;
    let temp = JSON.parse(JSON.stringify(imagesList));
    const index = temp.findIndex((item) => item.id === currentSlide.id);
    if (categoryId === 1) {
      temp[index].imgUrl = soywaxImgUrl.confidently;
    } else if (categoryId === 2) {
      temp[index].imgUrl = soywaxImgUrl.blue;
    } else if (categoryId === 3) {
      temp[index].imgUrl = soywaxImgUrl.freeYourself;
    } else if (categoryId === 4) {
      temp[index].imgUrl = soywaxImgUrl.mine;
    } else {
      temp[index].imgUrl = soywaxImgUrl.yourTobe;
    }
    setImages(temp);
  };

  return (
    <>
      <div className="case-study-page desktop">
        <div id="name-section" className="name-section">
          <div className="name">{currentSlide.name}</div>
        </div>
        <div className="categories-section fix-space-description-bottom">
          <button
            className="item-mass border-right"
            dangerouslySetInnerHTML={{ __html: currentSlide.mass1 }}
          ></button>
          <button
            className="item-mass"
            dangerouslySetInnerHTML={{ __html: currentSlide.mass2 }}
          ></button>
        </div>
        <div className="carousel-img-section">
          <div className="carousel-container">
            <Carousel dots={false} ref={carouselRef} afterChange={onChange}>
              {images.map((item) => {
                return (
                  <div className="img-item" key={item.id}>
                    <img className="img" src={item.imgUrl} alt={item.name} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          {currentSlide.name === "matchbox" ? (
            <div id="carousel-layer" className="layer layer-matchbox">
              <img src={fireMatchbox} alt="fire" width="100%" />
            </div>
          ) : (
            <div id="carousel-layer" className="layer subText">
              {currentSlide.layer}
            </div>
          )}
          <div
            className="nav-carousel next"
            onClick={() => carouselRef.current.next()}
          ></div>
          <div
            className="nav-carousel prev"
            onClick={() => carouselRef.current.prev()}
          ></div>
        </div>
        {currentSlide.name === "matchbox" ? (
          <div className="categories-section fix-space-description-top">
            <button className="item-matchbox border-right">biodegrable</button>
            <button className="item-matchbox border-right">plastic-free</button>
            <button className="item-matchbox">compact</button>
          </div>
        ) : (
          <div className="categories-section fix-space-description-top">
            <button
              className="item border-right"
              onClick={() => handleSelectCategory(tincanImgUrl)}
            >
              tin can
            </button>
            <button
              className="item border-right"
              onClick={() => handleSelectCategorySoyWax()}
            >
              soy wax
            </button>
            <button
              className="item"
              onClick={() => handleSelectCategory(woodenwickImgUrl)}
            >
              wooden wick
            </button>
          </div>
        )}
        <div className="description-section">
          <div
            dangerouslySetInnerHTML={{ __html: currentSlide.description }}
          ></div>
        </div>
      </div>
      <div className="case-study-page mobile">
        <div className="wrapper-mobile">
          <div id="name-section-mobile" className="name-section">
            <div className="name">{currentSlide.name}</div>
          </div>
          {widthScreen > 991 ? (
            <div className="categories-section">
              <button
                className="item-mass border-right"
                dangerouslySetInnerHTML={{ __html: currentSlide.mass1 }}
              ></button>
              <button
                className="item-mass"
                dangerouslySetInnerHTML={{ __html: currentSlide.mass2 }}
              ></button>
            </div>
          ) : (
            <div className="categories-section">
              <button
                className="item-mass border-right"
                dangerouslySetInnerHTML={{ __html: currentSlide.mass1Mobile }}
              ></button>
              <button
                className="item-mass"
                dangerouslySetInnerHTML={{ __html: currentSlide.mass2Mobile }}
              ></button>
            </div>
          )}
          <div className="carousel-img-section">
            <div className="carousel-container">
              <Carousel
                dots={false}
                ref={carouselRefMobile}
                afterChange={onChange}
              >
                {images.map((item) => {
                  return (
                    <div className="img-item" key={item.id}>
                      <img className="img" src={item.imgUrl} alt={item.name} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            {currentSlide.name === "matchbox" ? (
              <div
                id="carousel-layer"
                className="layer layer-matchbox display-layer-fire"
              >
                <img src={fireMatchbox} alt="fire" width="100%" />
              </div>
            ) : (
              <div id="carousel-layer" className="layer subText display-layer">
                {currentSlide.layer}
              </div>
            )}
            <div
              className="nav-carousel next"
              onClick={() => carouselRefMobile.current.next()}
            ></div>
            <div
              className="nav-carousel prev"
              onClick={() => carouselRefMobile.current.prev()}
            ></div>
          </div>
          {currentSlide.name === "matchbox" ? (
            <div className="categories-section bt-black">
              <button className="item-matchbox border-right">
                biodegrable
              </button>
              <button className="item-matchbox border-right">
                plastic-free
              </button>
              <button className="item-matchbox">compact</button>
            </div>
          ) : (
            <div className="categories-section bt-black">
              <button
                className="item border-right"
                onClick={() => handleSelectCategory(tincanImgUrl)}
              >
                tin can
              </button>
              <button
                className="item border-right"
                onClick={() => handleSelectCategorySoyWax()}
              >
                soy wax
              </button>
              <button
                className="item"
                onClick={() => handleSelectCategory(woodenwickImgUrl)}
              >
                wooden wick
              </button>
            </div>
          )}
          <div className="description-section">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: currentSlide.descriptionMobile,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
