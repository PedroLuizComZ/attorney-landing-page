import React from "react";
import Slider from "react-slick";
import { Grid, Hidden } from '@material-ui/core'
const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
const Testmonial = ({ className = '' }) => {
    return (
        <Grid className={`testmonialArea ${className}`} id={'case-de-sucesso'}>
            <Grid container className="container">
                <Grid item md={4} sm={6} xs={12}>
                    <Grid className="testimonialImages">
                        <img src='/images/avatar-perfil-v1.2.png' alt="" />
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid item md={1}></Grid>
                </Hidden>
                <Grid item md={7} sm={6} xs={12}>
                    <Grid className="testimonialContent">
                        <h2>Case de sucesso</h2>
                        <Slider className="testmonialSlider"
                            {...settings}>
                            <Grid className="slideItem">
                                <p> Controller Jurídico -  Reestruturação de Departamentos Cível e Trabalhista 2011-2016 :</p>
                                <ul>
                                    <li>
                                        Readequação de equipe de advogados e estagiários, com viabilização de desenvolvimento de habilidades pessoais e profissionais
                                    </li>
                                    <li>
                                        Implantação de fluxogramas e organogramas
                                    </li>
                                    <li>Implantação de projetos e procedimentos</li>
                                    <li>Implantação de software (EBTJURIS) de gestão de processos</li>
                                    <li>Utilização de software (LYSIS) de gestão de processos</li>
                                    <li>Coordenação das atividades</li>
                                    <li>Desenvolvimento de relacionamento e liderança, para engajamento contínuo dos colaboradores e resultados de excelência</li>
                                    <li>Produtividade e alta performance pessoal e das equipes</li>
                                </ul>
                            </Grid>
                        </Slider>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Testmonial