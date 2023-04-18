import React from "react"
import "./Numbers.css"
import Slider from "react-slick"

export default function Numbers() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 1,
    }

    return (
        <div className="container-slider">
            <Slider {...settings}>
                <div id="slider-item-number">
                    <h3>1</h3>
                </div>
                <div id="slider-item-number">
                    <h3>2</h3>
                </div>
                <div id="slider-item-number">
                    <h3>3</h3>
                </div>
                <div id="slider-item-number">
                    <h3>4</h3>
                </div>
                <div id="slider-item-number">
                    <h3>5</h3>
                </div>
                <div id="slider-item-number">
                    <h3>6</h3>
                </div>
                <div id="slider-item-number">
                    <h3>7</h3>
                </div>
                <div id="slider-item-number">
                    <h3>8</h3>
                </div>
                <div id="slider-item-number">
                    <h3>9</h3>
                </div>
                <div id="slider-item-number">
                    <h3>10</h3>
                </div>
                <div id="slider-item-number">
                    <h3>11</h3>
                </div>
                <div id="slider-item-number">
                    <h3>12(tune)</h3>
                </div>
            </Slider>
        </div>
    )
}
