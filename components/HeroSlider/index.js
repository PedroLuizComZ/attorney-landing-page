import React from 'react'
import { Button, Grid } from '@material-ui/core';
import Slider from "react-slick";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <KeyboardArrowLeftIcon />
    </Button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Button
        {...props}
        className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        <KeyboardArrowRightIcon />
    </Button>
);

const HeroSlider = ({ className = '' }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <Slider className={`heroSliderArea ${className}`}
            {...settings}>
            <Grid>
                <Grid
                    className="slideWrapper"
                    style={{ background: `url('/images/slider/slide-1.png') no-repeat top center / contain` }}
                >
                    <Grid container className="container">
                        <Grid item lg={8} xs={12}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Slider >
    )
}
export default HeroSlider