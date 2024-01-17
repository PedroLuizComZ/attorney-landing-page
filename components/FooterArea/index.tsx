import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const menu = {
  title: "Contato",
  menus: [
    { name: "Renata da Rocha Fusco" },
    { name: "R R FUSCO SOCIEDADE INDIVIDUAL DE ADVOCACIA" },
    { name: "Telefone: 11 94309-2265" },
    { name: "Email: renatadarochafusco@gmail.com" },
    { name: "Atibaia - SP, São Paulo - SP" },
  ],
};

const FooterArea = () => {
  return (
    <footer className="footerArea" id="contato">
      <Grid className="footerTopArea footerBottomArea">
        <Grid container spacing={3} className="container">
          <Grid item lg={6} sm={6} xs={12}>
            <div className="footerWrap">
              <h3>{menu.title}</h3>
              <ul>
                {menu.menus.map((item: any, i) => (
                  <li key={i}>
                    {item.route ? (
                      <Link href="/">
                        <a>{item.name}</a>
                      </Link>
                    ) : (
                      `${item.name}`
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
          <ul className="socialListFooter">
              <li>
                <a href="https://www.instagram.com/renatadarochafusco/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5511943092265">
                  <WhatsAppIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/renata-da-rocha-fusco-24a3aa20/">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="skype:renatadarochafusco?userinfo">
                  <svg className="MuiSvgIcon-root" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M26.884,16.579C26.953,16.061,27,15.536,27,15c0-6.627-5.373-12-12-12c-0.536,0-1.061,0.047-1.579,0.116 C12.279,2.413,10.939,2,9.5,2C5.358,2,2,5.358,2,9.5c0,1.439,0.413,2.779,1.116,3.921C3.047,13.939,3,14.464,3,15 c0,6.627,5.373,12,12,12c0.536,0,1.061-0.047,1.579-0.116C17.721,27.587,19.061,28,20.5,28c4.142,0,7.5-3.358,7.5-7.5 C28,19.061,27.587,17.721,26.884,16.579z M15.149,22c-3.896,0-6.133-2.042-6.133-4.046c0-1.022,1.07-1.349,1.498-1.349 c0.989,0,1.318,0.807,1.498,1.177c1.005,2.066,1.971,1.794,2.923,1.884c0.841,0.079,2.815-0.292,2.815-1.734 c0-0.138,0.217-1.076-1.487-1.541c-1.089-0.298-3.009-0.663-4.589-1.271c-1.486-0.572-2.358-1.75-2.358-3.268 C9.316,11.093,9.705,8,14.967,8c3.512,0,5.384,1.799,5.384,3.382c0,0.364-0.139,0.685-0.418,0.974 c-0.279,0.289-1.065,0.712-1.926,0.161c-0.217-0.139-0.396-0.428-0.61-0.803c-0.258-0.471-0.68-1.381-2.623-1.381 c-1.885,0-2.408,0.899-2.408,1.274c0,1.26,2.405,1.525,3.051,1.692c2.358,0.608,5.566,1.167,5.566,4.346 C20.983,21.295,17.185,22,15.149,22z" /></svg>
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
export default FooterArea;
