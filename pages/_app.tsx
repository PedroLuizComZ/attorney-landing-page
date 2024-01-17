import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.scss";
import "react-modal-video/scss/modal-video.scss";
import "../styles/style.scss";
import HeaderBottom from "../components/HeaderBottom";
import FooterArea from "../components/FooterArea";

const MyApp = ({ Component, pageProps }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <header className="headerArea">
        <HeaderBottom className="headerBottomArea" />
      </header>
      <Component {...pageProps} />
      <FooterArea />
    </>
  );
};

export default MyApp;
