import React, { useEffect } from "react";
import BasketLogic from "../../data/shop/logic/basket";
import Head from "next/head";
import Header from "../../components/mainPage/header";
import Footer from "../../components/mainPage/footer";
import MainMetaInfo from "../../components/common/mainMetaInfo";
import Analytics from "../../components/common/analytics";
import BasketData from "../../data/shop/adapters/basket";
import BasketStatus from "../../components/shop/basketStatus";
import BasketInfoOrderWireframe from "../../components/shop/basketInfoOrderWireframe";

const headerHeight = 80;

const onScroll = () => {
  var scrollThreshold = 40;
  if (
    document.body.scrollTop > scrollThreshold ||
    document.documentElement.scrollTop > scrollThreshold
  ) {
    document.getElementById("home").classList.add("header-border");
  } else {
    document.getElementById("home").classList.remove("header-border");
  }
};

const Basket = () => {
  useEffect(() => {
    document.onscroll = onScroll;
    onScroll();
    BasketLogic.init();
  });
  return (
    <>
      <Head>
        <Analytics />
        <title>Flower's Way. Країна очима велосипедистів</title>
        <MainMetaInfo
          title="Flower's Way. Країна очима велосипедистів. Сумки, велоспорядження"
          description="Велосумки для легких подорожей. Власне виробництво. просте монтування"
          img="https://flowersway.com.ua/img/objects/Swirg2_450_320.jpg"
        ></MainMetaInfo>

        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div id="home" className="header">
        <div className="page-content" style={{ height: "100%" }}>
          <Header />
        </div>
      </div>
      <div id="home" className="basket-status">
        <div className="page-content" style={{ height: "100%" }}>
          <BasketStatus breadcrumbs={BasketData.breadcrumbs} />
        </div>
      </div>
      <div id="home" className="basket-info-order">
        <div className="page-content" style={{ height: "100%" }}>
          <BasketInfoOrderWireframe />
        </div>
      </div>
      <div className="footer-background">
        <div id="footer" className="page-content">
          <Footer />{" "}
        </div>
      </div>
      <style jsx>
        {`
          .header {
            height: ${headerHeight}px;
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100%;
          }
          .header-page {
            align-items: center;
            height: 100%;
          }
          .page-content {
            max-width: 1166px;
            margin-left: auto;
            margin-right: auto;
          }
          .header-border ::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--light-blue-grey);
          }
          .header-border {
            background-color: #ffffff;
          }
          .basket-status {
            margin-top: 119px;
            margin-bottom: 34px;
          }
          .basket-info-order {
            margin-bottom: 106px;
          }
          .footer-background {
            width: 100%;
            height: 180px;
            background-color: var(--footer-back);
          }

          @media only screen and (max-width: 1165px) {
            .page-content {
              max-width: 960px;
              margin-left: auto;
              margin-right: auto;
            }
          }

          @media only screen and (max-width: 1023px) {
            .page-content {
              width: 335px;
              margin-left: auto;
              margin-right: auto;
            }
            .footer-background {
              height: 215px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Basket;
