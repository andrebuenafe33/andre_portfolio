import React from 'react'
import './intro.css';
import Image from '../../assets/Andre.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="content">
        <span className="spanText">Hello,</span>
        <span className="introText">I'm <span className="introName">Andre</span> <br/> Website Developer</span>
        <p className="introParagraph">I am a skilled web developer with experience in creating <br/> visually appealing and user friendly websites.</p>
        <Link><button className="btn"><img src={btnImg} className="btnImg" alt="Hire Me!" />Hire Me!</button></Link>
      </div>
      <img src={Image} className="contentImg" alt="Profile" />
    </section>
  )
}

export default Intro;