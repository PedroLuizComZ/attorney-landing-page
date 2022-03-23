import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "slick-carousel/slick/slick.scss";
import "react-modal-video/scss/modal-video.scss";
import "../styles/style.scss";
import HeaderBottom from "../components/HeaderBottom";
import FooterArea from "../components/FooterArea";

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Provider store={store}>
      <header className="headerArea">
        <HeaderBottom className="headerBottomArea" />
      </header>

      <Component {...pageProps} />
      <FooterArea />
    </Provider>
  );
};

export default MyApp;
