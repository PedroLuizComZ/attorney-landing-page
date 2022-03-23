import React  from 'react'
import Link from 'next/link'
import { Button, Grid } from '@material-ui/core'

const About = ({ subTitle, title, className = '', signature, pragraphs, images}) => {
    return (
        <Grid className={`aboutArea ${className}`} id={'sobre'}>
            <Grid container spacing={4} className="container">
                <Grid item md={6} xs={12}
                    className="changeOrder">
                    <Grid className="aboutImageWrap">
                        <img src={images} alt="" />
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid className="aboutContent">
                        {subTitle && <span className="subtitle">{subTitle}</span>}
                        <h2>{title}</h2>
                        {pragraphs.map(text => (
                            <p key={text}>{text}</p>
                        ))}
                        {signature && <Grid className="signature">
                            <img src={signature} alt="" />
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default About