import React from "react";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import CallIcon from "@material-ui/icons/Call";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
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
    <footer className="footerArea">
      <Grid className="footerTopArea footerBottomArea">
        <Grid container spacing={3} className="container">
          <Grid item lg={6} sm={6} xs={12}>
            <div className="footerWrap">
              <h3>{menu.title}</h3>
              <ul>
                {menu.menus.map((item, i) => (
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
                <a href="https://t.me/renatadarochafusco">
                  <TelegramIcon />
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
