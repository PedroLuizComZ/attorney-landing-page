import React from "react";
import { Grid } from "@material-ui/core";
import { Parallax } from "react-parallax";
import SectionTitle from "../Title";

const services = [
  {
    title: "Advocacia Extrajudicial",
    content: [
      "Divórcio",
      "Inventário",
      "Elaboração e Revisão de Contratos",
      "Conciliação e Mediação",
    ],
    id: 1,
  },
  {
    title: "Advocacia de Apoio Estratégica e/ou de Volume ",
    content: ["Elaboração de peças processuais e/ou pesquisa jurisprudencial"],
    id: 2,
  },
  {
    title: "Consultoria Empresarial",
    content: [
      "Controladoria",
      "Gestão",
      "Projetos e Treinamentos para Departamentos Jurídicos e Escritórios de Advocacia",
    ],
    id: 3,
  },
];

const aditionalInfo = [
  {
    title: "Correspondência Jurídica Presencial e/ou Virtual - Audiências e Diligências - Cidades de Atuação",
    content: [
      "Atibaia-SP",
      "Bragança Paulista-SP",
      "Campinas-SP",
      "Campo Limpo Paulista-SP",
      "Itatiba-SP",
      "Jarinu-SP",
      "Jundiaí-SP",
      "Louveira-SP",
      "Mairiporã-SP",
      "Nazaré Paulista-SP",
      "Piracaia-SP",
      "Valinhos-SP",
      "Várzea Paulista-SP",
      "Vinhedo-SP",
    ],
    id: 5,
  },
];

const ServiceArea = ({ className = "", title, subTitle }) => {
  return (
    <Parallax contentClassName={`ourServiceArea ${className}`} strength={200}>
      <Grid container spacing={4} className="container" id={"areas-de-atuacao"}>
        <Grid item xs={12}>
          <SectionTitle title={title} subTitle={subTitle} />
        </Grid>
        {services.map((service, index) => (
          <Grid item xs={12} lg={4} sm={6} key={index}>
            <Grid className="serviceWrap">
              <Grid className="serviceIcon">
                <img src={"/images/logo-preto.png"} alt="" />
              </Grid>
              <Grid className="serviceContent">
                <h3>{service.title}</h3>
                <ul>
                  {service.content.map((content) => {
                    return (
                      <li>
                        {" "}
                        <p>{content}</p>
                      </li>
                    );
                  })}
                </ul>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12} lg={12} sm={12} className="adicional-container">
          <Grid className="serviceWrap">
            <Grid className="serviceIcon">
              <img src={"/images/logo-preto.png"} alt="" />
            </Grid>
            <Grid className="serviceContent">
              <h3>{aditionalInfo[0].title}</h3>
              <ul className="aditional-list">
                {aditionalInfo[0].content.map((content) => {
                  return (
                    <li>
                      <p>{content}</p>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Parallax>
  );
};
export default ServiceArea;
