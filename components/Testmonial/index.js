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
            <Grid item md={6} sm={12} xs={12}>
                <Grid className="testimonialImages">
                    <img src='/images/bannet-red.png' alt="" />
                </Grid>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Grid className="testimonialContent">
                    <h2>Case de Sucesso</h2>
                    <Slider className="testmonialSlider"
                        {...settings}>
                        <Grid className="slideItem">
                            <p> Controller Jurídico -  Reestruturação de Departamentos Cível e Trabalhista (2011-2016):</p>
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
    )
}
export default Testmonial