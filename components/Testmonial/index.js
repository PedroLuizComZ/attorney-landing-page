import React from "react";
import Slider from "react-slick";
import { Grid, Hidden } from '@material-ui/core'

const sliders = [
    {
        text: 'Controller Jurídico -  Reestruturação de Departamentos Cível e Trabalhista: 2011-2016\n Readequação de equipe de advogados e estagiários, com viabilização de desenvolvimento de habilidades pessoais e profissionais\n Implantação de fluxogramas e organogramas\n Implantação de projetos e procedimentos; Implantação de software (EBTJURIS) de gestão de processos\n Utilização de software (LYSIS) de gestão de processos\n Coordenação das atividades\n Desenvolvimento de relacionamento e liderança, para engajamento contínuo dos colaboradores e resultados de excelência\n Produtividade e alta performance pessoal e das equipes.',
        images: '/images/testimonial/2.png',
    }
]
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
        <Grid className={`testmonialArea ${className}`}>
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
                            {sliders.map((slider, i) => (
                                <Grid key={i} className="slideItem">
                                    <p> {slider.text}</p>
                                </Grid>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Testmonial