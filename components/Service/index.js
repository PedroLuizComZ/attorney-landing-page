import React from 'react'
import { Parallax } from 'react-parallax';
import { Grid } from '@material-ui/core'
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';

const services = [
    {
        icon: <PersonOutlineTwoToneIcon />,
        subtitle: 'Agende sua',
        title: 'Consulta'
    },
    {
        icon: <HourglassFullTwoToneIcon />,
        subtitle: 'Experiência',
        title: 'Mais de 20 anos'
    },
    {
        icon: <PeopleAltTwoToneIcon />,
        subtitle: 'Competente',
        title: 'No que faz'
    },
]
const Service = ({ className = '' }) => {
    return (
        <Parallax
            bgImage="/images/services/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`serviceArea ${className}`}
            strength={200}>
            <Grid container spacing={4} className="container">
                {services.map((service, i) => (
                    <Grid item md={4} sm={6} xs={12} key={i}>
                        <Grid className="serviceItem">
                            <Grid className="serviceIcon">
                                {service.icon}
                            </Grid>
                            <Grid className="serviceText">
                                <span>{service.subtitle}</span>
                                <h3>{service.title}</h3>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Parallax>
    )
}
export default Service