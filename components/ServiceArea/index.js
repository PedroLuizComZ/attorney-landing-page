import React from "react";
import { Grid } from '@material-ui/core'
import { Parallax } from 'react-parallax';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import AccessibilityTwoToneIcon from '@material-ui/icons/AccessibilityTwoTone';
import AssignmentIndTwoToneIcon from '@material-ui/icons/AssignmentIndTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import CastForEducationTwoToneIcon from '@material-ui/icons/CastForEducationTwoTone';
import SectionTitle from '../Title'

const services = [
    {
        icon: <PeopleAltTwoToneIcon />,
        title: 'Advocacia Extrajudicial',
        content: 'Divórcio, Inventário, Elaboração e Revisão de Contratos, Conciliação e Mediação',
        id: 1
    },
    {
        icon: <PermIdentityTwoToneIcon />,
        title: 'Apoio Estratégica e/ou de Volume: ',
        content: 'Elaboração de peças processuais e/ou pesquisa jurisprudencial;',
        id: 2
    },
    {
        icon: <AccessibilityTwoToneIcon />,
        title: 'Consultoria Empresarial',
        content: 'Controladoria, Gestão, Projetos e Treinamentos, para Departamentos Jurídicos e Escritórios de Advocacia;',
        id: 3
    },
    {
        icon: <AssignmentIndTwoToneIcon />,
        title: 'Audiências e Diligências',
        content: 'Análise prévio do caso concreto, alinhamento com o cliente, relatório completo sobre o ato',
        id: 4
    },
    {
        icon: <CastForEducationTwoToneIcon />,
        title: 'Correspondência',
        content: 'Jurídica Presencial e/ou Virtual: ',
        id: 5
    },
    {
        icon: <HomeWorkTwoToneIcon />,
        title: 'Cidades de Atuação',
        content: 'Mairiporã, Atibaia, Bragança Paulista, Piracaia, Nazaré Paulista, Jarinu, Campo Limpo Paulista, Várzea Paulista, Jundiaí, Itatiba, Louveira, Vinhedo, Valinhos e Campinas',
        id: 6
    },
]


const ServiceArea = ({ className = '', title, subTitle }) => {
    return (
        <Parallax
            bgImage="/images/practice/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`ourServiceArea ${className}`}
            strength={200}>
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {services.map((service, index) => (
                    <Grid item xs={12} lg={4} sm={6} key={index}>
                        <Grid className="serviceWrap">
                            <Grid className="serviceIcon">
                                {service.icon}
                            </Grid>
                            <Grid className="serviceContent">
                                <h3>
                                  {service.title}
                                </h3>
                                <p>{service.content}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Parallax>

    )
}
export default ServiceArea