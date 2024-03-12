import "./technologies.css"
import angularLogo from '../assets/svg-files/angular.svg';
import javaLogo from '../assets/svg-files/java-icon.svg';
import javascriptLogo from '../assets/svg-files/javascript-icon.svg';
import reactLogo from '../assets/svg-files/reactjs-icon.svg';
import cppLogo from '../assets/svg-files/cpp_logo.svg';
import typescriptLogo from '../assets/svg-files/typescriptlang-icon.svg';
import springLogo from '../assets/svg-files/springio-icon.svg';
import nodejsLogo from '../assets/svg-files/nodejs-icon.svg';
import flutterLogo from '../assets/svg-files/flutterio-icon.svg';
import { useRef, useState } from "react";
import Slider from "react-slick";


export default function Technologies() {

    const angular = useRef<HTMLDivElement>(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 500,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <></>,
        prevArrow: <></>
      };
    return (
        <section className="technologies">
            <h1>Technologies</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="carousel-element" ref={angular}>
                        <img src={angularLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={javaLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={javascriptLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={reactLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={cppLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={typescriptLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={springLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={nodejsLogo} alt="" className="logo-element"/>
                    </div>
                    <div className="carousel-element">
                        <img src={flutterLogo} alt="" className="logo-element"/>
                    </div>
                    
                </Slider>
            </div>
            
        </section>
    )
}