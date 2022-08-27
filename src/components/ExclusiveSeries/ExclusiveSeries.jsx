import React, { useRef, useState, useContext, useEffect } from "react";
import { Carousel } from "antd";
import "./index.scss";
import { AppContext } from "../Context/AppProvider";

const imagesList = [
  {
    id: 1,
    name: "xolve branding",
    imgUrl:
      "https://lh3.googleusercontent.com/55KK5lkX7STR8ik3RrWAu0zu-RSv1yPWQVouSfgBOYWVtGX4aNtsBxcQjlBEH0UbMKbrK2_jmF4MvBLCJXTJW5fpBosto2hrSiRlLLBgdjYOhdyIPoEDAUaNZabmeWe0QQkrkD2ncQ=w2400",
    imgRight1:
      "https://lh3.googleusercontent.com/8UPewNoTuDGZm6bjjpalLJVa_eezsWoPBQAqE2D2R7vuSGjjhsrNgnqB92wGqhY5FHLMzvKa7NxxarXKRIOkOHhCrfgoN0UchhYGdLnVGSoAP14JBbVBPDT5IHLsKbaqP5e10wADiA=w2400",
    imgRight2:
      "https://lh3.googleusercontent.com/iWn9amvzKFk4GUlFkMoMBNd9HbiWd6-l_vn7Om2ZA2suWhOeuWTEAK88Mb5V5ZaCT8HPI3etW7eBlYyThUbe8E-htwwk3jMowQpdi4c5XbQBoOn7I5eY4ueHF4k95E2_h3kQXjYC6A=w2400",
    imgRight3:
      "https://lh3.googleusercontent.com/KUUsTcGoJ5ZnUl79kF2WwY69K_1HvIUGy2_FJV67W0DgHTxatzEu9Ig8O6zzWF-liSvt5gnUtZF8gI-ccQSSDv6p3Tc41XPFAA5cXP8qTljc4vT-sS5gjhTJ4pHPw_ygoUL2YZKD4w=w2400",
    gifMobile:
      "https://lh3.googleusercontent.com/ytJCJEq0BmDYBasGrKJozS-mPtqMirU7jMdL0wode9tC-t7kIrr1D2OuBZilbc19BFHXWHAD-DAJ6YlOaSL9H1lMPR0lcAaFii7bvWRclGPPx6J2IsrG-TgghREcW-lFanbnjyP2MQ=w2400",
    description: `there isn't a sensatory longing that we can't fulfill.<br/>exclusively for xolve branding,<br/>yeoubi has brought to life these 5 notes of springtime:<br/><br/>
    <span class="sub-text">(fruity)</span> for the fleshy refreshments<br/>
    <span class="sub-text">(floral)</span> for the eternal blossoms<br/>
    <span class="sub-text">(citrus)</span> for the zesty air of newness<br/>
    <span class="sub-text">(aquatic)</span> for the oceanic and the earthy flux<br/>
    <span class="sub-text">(green)</span> for the indulgence into the grassy nature`,
    descriptionMobile: `there isn't a sensatory longing that<br/>we can't fulfill. exclusively for xolve branding,<br/>yeoubi has brought to life these<br/>5 notes of springtime:<br/><br/>
    <span class="sub-text">(fruity)</span> for the fleshy refreshments<br/>
    <span class="sub-text">(floral)</span> for the eternal blossoms<br/>
    <span class="sub-text">(citrus)</span> for the zesty air of newness<br/>
    <span class="sub-text">(aquatic)</span> for the oceanic and the earthy flux<br/>
    <span class="sub-text">(green)</span> for the indulgence into the grassy nature`,
  },
  {
    id: 2,
    name: "brides by olivia",
    imgUrl:
      "https://lh3.googleusercontent.com/KawTLvBuYRyx4P26w4BWiyPo8vpE6nPwCrnIz2uEtIwuMc054PfdJKLN9eP_l8G3XOdf_QC14gO7fuG3F59r4wGH8FmEyFrTNXSM0gSAoMgC-jj0NiixRLU703p5NEJHDpWqcAL2Nw=w2400",
    imgRight1:
      "https://lh3.googleusercontent.com/tTaLaqQiFMgICGvPnc_JXwOl6FEuwEd3eKq1MsTRNiqtoJBpdVkl-C7y-Wmpf_UvX93GZMxYiktxGggRb9fHD3ZOIeTyVuxKoH-E6_NCg9m1c07KhysH2eCJBLB-V9TYUwNl4RkxTw=w2400",
    imgRight2:
      "https://lh3.googleusercontent.com/hhvjcNiMHEUmBhCwBOGJdBj0XozOwIwfAbyINjtsvFjZ5McPiTEVAj_bx6ZP8NhJ7rmwy7dccExdfrRXTblpQ0dkSH7_KQ7q5vn5d6l9sTOMPDuXImvJNz1DNDUM-NnPPw6yV1INXw=w2400",
    imgRight3:
      "https://lh3.googleusercontent.com/BoR8eMyoKXDdEytSlaEw5_LgTAEPlcD6Om4d_JCoz7ytN2_ZKIwrVu3tRbWXS0ILwHDnBaXjvqojcphiI02Iw1Ji8hVsyhI0rAojJM8eVUdnGEZz1IGEYGE7PAd9r5qZ8axndvsZSg=w2400",
    gifMobile:
      "https://lh3.googleusercontent.com/NPwGUvE6Qpdms8Uk-EMdvqlj6dm9Hoe_io7YNRtWwj2uGrSDzaz96dodjxGnZuM19OzHTvW353EaKqgB3Qz1glUIdkicZZ4weYzM6cJ3yUvNhxILQHaQVPeQtsIO22tkh4Vv1Dur9A=w2400",
    description: `presenting a luxurious, elegant, and bespoke ambience,<br/>yeoubi compliments the striking design of brides'<br/>concept by a musky, floral-inspired candle scent to<br/>mark the brand's unforgettable celebration of opening<br/>the flagship store in hcmc.`,
    descriptionMobile: `presenting a luxurious, elegant, and<br/>bespoke ambience, yeoubi compliments the<br/>striking design of brides' concept by a musky,<br/>floral-inspired candle scent to mark the<br/>brand's unforgettable celebration of<br/>opening the flagship store in hcmc.`,
  },
  {
    id: 3,
    name: "munchies",
    imgUrl:
      "https://lh3.googleusercontent.com/OjdU7hnL_VfWMFXPvIV8Zte_L9ZUoLIRh_m6Aia7RgpdE-BliXp20hEgUGu7WpMbmYKEmLGZrg5g-gkGrfCyimWbjhWhGx6dfTUBZ55A_YbKOyYuKRPhgjJYUMNge4Stm78M3kTwxg=w2400",
    imgRight1:
      "https://lh3.googleusercontent.com/sNhRWZl4OSbthiSISkOZfeW4uim2B-cHNqYXP6h5uq4oOriGsV9063GIxQRlY9yRYbNOVEFX0hRHCUIIYhn59Hj9AYB6AKX729SQ9nliI8TwlGoB7OdxCOK8SiQ8mwGCwaE0iUuzBg=w2400",
    imgRight2:
      "https://lh3.googleusercontent.com/PFsdqRfGkU0WsaDVFRUbV8Ei18t-GzbWjwLrvRZuaZCGCrt9pc_igyawTCMrkGDMWhWXhYB-J6UEghrVW4F-s56TM8Ixxj_V97XvuFT1la-wzjbK_yqCxZyLP68TZm2GOzqroTg60w=w2400",
    imgRight3:
      "https://lh3.googleusercontent.com/7F0qUABpUiI1KxTijVuQPEpcbxhwZHmNLjgdFaeGeId2wFxuumWL5EfGIl1D86zklsRP83EZ3g9qykiToaM8DUcuqE9uuWj3utjnqD9lA3NTI-OgLy4Ciwg_22akX2JYmVfS0EiHxw=w2400",
    gifMobile:
      "https://lh3.googleusercontent.com/FHFDs0NXlr_dVMiArqDBGRlegEQnTVaq-I0Fr2DYOr5IKiypQapkd91XA7vtc_vHF0tPBOjq_F6dx9CxR9-_6FLVm5RtLS9P_Tfy4hj12fqLFYuT5xLO8XWPQSvjQ6PKKPzn0HAZqA=w2400",
    description: `an unexpected romance is always more exciting<br/>than an anticipated one. taking the spontaneous<br/>joy in relationship as core, yeoubi has gone out<br/>of our blue to bring about this collab, promising<br/>the most gratifying surprise for your loved ones.<br/>delicious snacks from munchies for appetite.<br/>mesmeric aroma from yeoubi candles for scent.`,
    descriptionMobile: `an unexpected romance is always more exciting than an anticipated one. taking the spontaneous joy in relationship as core, yeoubi has gone out of our blue to bring about this collab, promising the most gratifying surprise for your loved ones. delicious snacks from munchies for appetite. mesmeric aroma from yeoubi candles for scent.`,
  },
  {
    id: 4,
    name: "mellow wildflower wedding",
    imgUrl:
      "https://lh3.googleusercontent.com/Gr0Zw-zg_wvzA9A4nImsiob0uNNOQFXhjjXT5wLpNKs7xd0XnKZJg-WWKxHyy415zmzQ97iL7CvwLY4szGKY2SwVTZ-5pxJ7J3HVLqlSkBNaq6VtuSxlSNjwOm9clIdYH_aVtTzUMA=w2400",
    imgRight1:
      "https://lh3.googleusercontent.com/fdFRj3DLPul47ELtAHyABG4KRxY6gUwBDxA4_DFA3zrKJkhfC8CiuW-eJpKeiD3V5zm3VLfHXC-vsN_b9uAStPYskE6NstDhrfbtGpRr6P61eqwd6aQGKvm4xlBO_4_S15K6joNRXQ=w2400",
    imgRight2:
      "https://lh3.googleusercontent.com/v-zJmgYyC-zYN1Oh-vmakHeYPzIhRiBKngticD7rdMAMaiLVqy28fvvMZtCtVxVvtvhi8aDKoG4jckkfIdyF74cpae030qgwj-WDrpvEFPLXd3aYMPNSHVrd0UN7fMEhbTd8C03kBw=w2400",
    imgRight3:
      "https://lh3.googleusercontent.com/y49Oqf-U4RUWI-n8iGcFEjnwsUlAiD_g7W87TPumbgV5K2dLPanua6SFI5S8Arq8ly69EfuT5wXtJQ45Wbc7eO6dhpQ_Q6M_0JSE2GpMxBO56hYXEkpkp-3T_XOgWXUgI8pPD5QrJA=w2400",
    gifMobile:
      "https://lh3.googleusercontent.com/GeAdiQNeUMOn-8QWYOcMVPuWhl_shzdFn0RUOY-u0GRd0WS6D-ThhblnCmGjmAilFDu3twReu3axWtB05NPPfpTa3maaQpqOvRALNOrx4MzEYVgMW46kX4TR51z2-mv__Zj_SFDWow=w2400",
    description: `tranquil in the forest's breath, dreamy in the shine<br/>of daisy, passionate love flows softly in the air. having<br/>the honor in jointly beholding two individuals<br/>turning the page to a profound chapter in their lives,<br/>yeoubi consolidates the nature's essence into one unique green note<br/>to further romanticize the precious setting.<br/>bright moments to love and fine memories to lock,<br/>with scents.`,
    descriptionMobile: `tranquil in the forest's breath,<br/>dreamy in the shine of daisy,<br/>passionate love flows softly in the air.<br/>having the honor in jointly beholding two<br/>individuals turning the page to a profound<br/>chapter in their lives, yeoubi consolidates the nature's essence into one unique green note to further romanticize the precious setting. bright moments to love and<br/>fine memories to lock, with scents.`,
  },
];

const ExclusiveSeries = () => {
  const [currentSlide, setCurrentSlide] = useState(() => imagesList[0]);
  const [images, setImages] = useState(() => imagesList);
  const carouselRef = useRef();
  const carouselRefMobile = useRef();
  const { setExclusive } = useContext(AppContext);

  const widthScreen = document.documentElement.clientWidth;

  const onChange = (index) => {
    setCurrentSlide(imagesList[index]);
    setImages(imagesList);
    setExclusive(imagesList[index]);
  };

  useEffect(() => {
    setExclusive(imagesList[0]);
  }, []);

  return (
    <>
      <div className="exclusive-series desktop">
        <div className="name-section">
          <div className="name">{currentSlide.name}</div>
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
          <div
            className="nav-carousel next"
            onClick={() => carouselRef.current.next()}
          ></div>
          <div
            className="nav-carousel prev"
            onClick={() => carouselRef.current.prev()}
          ></div>
        </div>
        <div className="categories-section">
          {" "}
          <button className="item border-right"></button>
        </div>
        <div className="description-section">
          <div
            dangerouslySetInnerHTML={{ __html: currentSlide.description }}
          ></div>
        </div>
      </div>
      <div className="exclusive-series mobile">
        <div className="wrapper-mobile">
          <div className="name-section">
            <div className="name">{currentSlide.name}</div>
          </div>
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
            <div
              className="nav-carousel next"
              onClick={() => carouselRefMobile.current.next()}
            ></div>
            <div
              className="nav-carousel prev"
              onClick={() => carouselRefMobile.current.prev()}
            ></div>
          </div>
          {/* <div className="categories-section">
            {" "}
            <button className="item border-right"></button>
          </div> */}
          <div className="description-section">
            {widthScreen > 991 ? (
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: currentSlide.description,
                }}
              ></div>
            ) : (
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: currentSlide.descriptionMobile,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveSeries;
