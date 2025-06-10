import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/book.jpg';
import Portfolio2 from '../../assets/portfolioImg.png';


const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDescription">Here are some of the projects I’ve worked on as a web developer. Each one showcases my skills in building secure, responsive, and user-friendly websites using technologies like HTML, CSS, JavaScript, PHP, Laravel, and the Bootstrap framework for modern UI design and layout.</span>
      <div className="worksImgs">
        <img  src={Portfolio1} className="worksImg1" alt=""/>
        <img  src={Portfolio2} className="worksImg" alt=""/>
        <img  src={Portfolio2} className="worksImg" alt=""/>
        <img  src={Portfolio2} className="worksImg" alt=""/>
        <img  src={Portfolio2} className="worksImg" alt=""/>
        <img  src={Portfolio2} className="worksImg" alt=""/>
      </div>
      <button className="worksBtn">See more</button>
    </section>
  )
}

export default Works;