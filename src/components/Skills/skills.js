import React from 'react'
import './skills.css';
import webDevelopment from '../../assets/web-development02.png'
import webSecurity from '../../assets/web-security.png';
import webResponsive from '../../assets/responsive-web-interface2.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am a passionate web developer with a strong focus on creating visually appealing, user-friendly, and responsive websites. I specialize in building secure, scalable, and efficient web solutions, following best practices to protect against common vulnerabilities and ensure data integrity. With proficiency in HTML, CSS, JavaScript, and PHP, I aim to deliver clean, maintainable code and seamless user experiences across all devices.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={webDevelopment} alt="WebDevelopment" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Proficient in building dynamic and functional websites using modern technologies like HTML, CSS, JavaScript, and PHP. Experienced in both frontend and backend development, with a focus on writing clean, maintainable, and efficient code.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webSecurity} alt="WebSecurity" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Website Security Best Practices</h2>
                    <p>Knowledgeable in applying fundamental web security measures such as input validation, data sanitization, protection against SQL injection and XSS attacks, and secure authentication practices to ensure safe and reliable web applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webResponsive} alt="WebResponsive" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Responsive & User-Friendly Design</h2>
                    <p>Skilled in designing interfaces that adapt seamlessly across all screen sizes and devices. Prioritize intuitive navigation, visual clarity, and performance to deliver a smooth and accessible user experience.</p>
                </div>
            </div>
        </div>
       

    </section>
  )
}

export default Skills;


 