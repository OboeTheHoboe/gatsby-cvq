import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Button from './Button';
import './hero.css';

const Hero = () =>{
    return (
        <div className="hero-container">
            {/* <video src="../video/hero.mp4" autoPlay loop muted /> */}
            <h1>Concurso Virtual de Química</ h1>
            <p>Por la Química</p>
            <p>
                
            </p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" path="/cvq">
                    CVQ 
                </Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" path="/rwqo">
                    RWQO 
                </Button>
            </div>
        </div>
    )
}

export default Hero