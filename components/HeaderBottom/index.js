import React, { useState, Fragment } from "react";
import { Grid,  } from "@material-ui/core";
import Link from "next/link";

const HeaderBottom = (props) => {
  const [search, setSearch] = useState();
  const [responsive, setResponsive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const clickHandler = () => {
    setTrigger(!trigger);
  };
  const responsiveHandler = () => {
    setResponsive(!responsive);
  };
  return (
    <Fragment>
      {trigger && <Grid className="backdrop" onClick={clickHandler}></Grid>}
      <Grid className={props.className}>
        <Grid container alignItems="center" className="container">
          <Grid item md={3} sm={6} xs={8}>
            <Grid className="logo">
              <Link href="/">
                <a>
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className={"header-logo"}
                  />
                </a>
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            className={
              responsive ? "responsiveWrapper active" : "responsiveWrapper"
            }
          >
            <ul className="mainMenuWrap">
              <li>
                <Link href="/#sobre">
                  <a>
                    Sobre mim
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#areas-de-atuacao">
                  <a
                    
                  >
                    Áreas de Atuação
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#case-de-sucesso">
                  <a
                    
                  >
                    Case de Sucesso
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item md={1} sm={6} xs={4}>
            <Grid className="searchMenuWrapper">
              <Grid onClick={responsiveHandler} className="responsiveTrigger">
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default HeaderBottom;
