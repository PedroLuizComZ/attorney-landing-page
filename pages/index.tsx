import React, { Fragment } from "react";
import Head from "next/head";

// components
import HeroSlider from "../components/HeroSlider";
import About from "../components/About";
import ServiceArea from "../components/ServiceArea";
import Testmonial from "../components/Testmonial";

const aboutText = [
  "Profissional atuante há mais de 20 anos perante o contencioso estratégico e de volume, nas Justiças Estadual e Federal, com representação/assistência de empresas nos ramos alimentício, energia elétrica e telecomunicações.",
  'Experiências na gerência e coordenação de equipes em escritórios de advocacia de grande e médio porte, mediante planejamento, gestão e supervisão das execuções das atividades relativas; com prática no desenvolvimento de procedimentos junto aos departamentos cível, trabalhista, empresarial consultivo e empresarial contencioso. Conhecimento em implantação e utilização de software de gestão de processos.',
  'Habilidades para desenvolvimento de profissionais que compõe equipe, cuidado na qualidade das relações no ambiente de trabalho, utilização de feedback e feedfoward, comunicação efetiva e, também, para realização de reuniões eficazes.',
];

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Fusco Advocacia</title>
      </Head>
      <HeroSlider />
      <About       
        title="Sobre mim"
        images="/images/about/2.jpg"
        pragraphs={aboutText}
      />
      <ServiceArea
        title="Áreas de Atuação"
        className="bgWhite"
      />
      <Testmonial />
    </Fragment>
  );
};
export default Home;
