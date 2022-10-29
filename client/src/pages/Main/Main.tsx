import noop from "lodash/noop";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import CommonButton from "../../components/buttons/CommonButton/CommonButton";
import Footer from "../../components/footer/Footer";
import MainHeader from "../../components/headers/MainHeader/MainHeader";
import s from "./Main.module.scss";
import MainImg1 from "./../../assets/images/main/main-img-1.jpg";
import MainImg2 from "./../../assets/images/main/main-img-2.jpg";

export default function Main() {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.main}>
        <MainHeader />

        <div className={s.marketing}>
          <div className={s.marketingWrapper}>
            <div className={s.marketingContent}>
              <h1 className={s.marketingContentTitle}>
                <span>Our marketing message.</span>
              </h1>
              <p className={s.marketingContentDescription}>
                Hundreds of easy and delicious recipes that can be cooked from
                ingredients you have right now.
              </p>
              <div className={s.marketingBtn}>
                <CommonButton
                  onClick={noop}
                  text={t("SIGN UP")}
                  withBorder
                ></CommonButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className={s.mainInfo}>
          <div className={s.mainContainer}>
            <div className={s.mainItem}>
              <div
                className={classNames(s.mainItemImage, {
                  [s.mr10]: true,
                })}
              >
                <img src={MainImg1} alt="main-img-1" />
              </div>
              <div>
                <div>
                  <h2 className={s.mainItemSecondary}>
                    Lorem ipsum dolor sit amet dolores libero ut debitis atque
                    in pariatur.
                  </h2>
                  <p className={s.mainItemDescription}>
                    Lorem ipsum dolor sit amet.
                    <br />
                    Ea illum sequi eos quae maiores 33 molestiae numquam sit
                    corrupti facere rem delectus similique At quidem assumenda.
                    In voluptas pariatur aut architecto omnis ad rerum beatae id
                    assumenda harum.
                  </p>
                </div>
              </div>
            </div>
            <div className={s.mainItem}>
              <div
                className={classNames({
                  [s.mr10]: true,
                })}
              >
                <div>
                  <h2 className={s.mainItemSecondary}>
                    Lorem ipsum dolor sit amet dolores libero ut debitis atque
                    in pariatur.
                  </h2>
                  <p className={s.mainItemDescription}>
                    Lorem ipsum dolor sit amet.
                    <br />
                    Ea illum sequi eos quae maiores 33 molestiae numquam sit
                    corrupti facere rem delectus similique At quidem assumenda.
                    In voluptas pariatur aut architecto omnis ad rerum beatae id
                    assumenda harum.
                  </p>
                </div>
              </div>
              <div className={s.mainItemImage}>
                <img src={MainImg2} alt="main-img-2" />
              </div>
            </div>
          </div>
        </section>
        <section className={s.callToAction}>
          <div className="container d-flex justify-content-center">
            <div className={s.callToActionCard}>
              <div className={s.callToActionCardText}>
                <h3 className="title__secondary text-center">
                  Our irresistible, charming, tempting call to action.
                </h3>
              </div>
              <CommonButton
                onClick={noop}
                text="Try it for free"
              ></CommonButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
