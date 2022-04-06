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
    content: ["Elaboração de Peças Processuais e/ou Pesquisa Jurisprudencial"],
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
  {
    title:
      "Correspondência Jurídica Presencial e/ou Virtual - Audiências e Diligências ",
    content: [
      "Análise Prévio do Caso Concreto",
      "Alinhamento com o Cliente",
      "Relatório Completo sobre o Ato",
    ],
    id: 4,
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
        <Grid item xs={12} lg={8} sm={12}>
          <Grid className="serviceWrap">
            <Grid className="serviceIcon">
              <img src={"/images/logo-preto.png"} alt="" />
            </Grid>
            <Grid className="serviceContent">
              <h3>
                Correspondência Jurídica Presencial e/ou Virtual - Cidades de
                Atuação
              </h3>
              <div className="aditional-list">
                <ul className="first-list">
                  <li>
                    <p> Atibaia-SP </p>
                  </li>
                  <li>
                    <p> Bragança Paulista-SP</p>
                  </li>
                  <li>
                    <p> Campinas-SP</p>
                  </li>
                  <li>
                    <p> Campo Limpo Paulista-SP</p>
                  </li>
                  <li>
                    <p> Itatiba-SP</p>
                  </li>
                  <li>
                    <p> Jarinu-SP </p>
                  </li>
                  <li>
                    <p> Jundiaí-SP</p>
                  </li>
                </ul>
                <ul className="second-list">
                  <li>
                    <p> Louveira-SP</p>
                  </li>
                  <li>
                    <p>Mairiporã-SP</p>
                  </li>
                  <li>
                    <p> Nazaré Paulista-SP</p>
                  </li>
                  <li>
                    <p> Piracaia-SP </p>
                  </li>
                  <li>
                    <p> Valinhos-SP</p>
                  </li>
                  <li>
                    <p> Várzea Paulista-SP</p>
                  </li>
                  <li>
                    <p> Vinhedo-SP</p>
                  </li>
                </ul>

              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Parallax>
  );
};
export default ServiceArea;
