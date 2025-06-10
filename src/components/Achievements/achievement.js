import React from 'react'
import './achievement.css';
import Achievement1 from '../../assets/achievement.png';
import Achievement2 from '../../assets/achievement.png';
import Achievement3 from '../../assets/achievement.png';
import Achievement4 from '../../assets/achievement.png';
import FacebookIcon from '../../assets/facebook.jpg';
import InstagramIcon from '../../assets/instagram.jpg';
import GitHubIcon from '../../assets/github.png';

const Achievements = () => {
  return (
    <section id="contactPage">
      <div id="achievements">
        <h1 className="contactPageTitle">My Achievements</h1>
        <p className="achievementsDescription">
          Throughout my academic journey, I have consistently pursued excellence and growth. My achievements reflect my commitment to learning, my ability to overcome challenges, and my passion for technology. These milestones have equipped me with valuable skills and experiences that I am eager to bring to my professional career.
        </p>
        <div className="achievementImgs">
          <img src={Achievement1} className="achievementImg" alt="" />
          <img src={Achievement2} className="achievementImg" alt="" />
          <img src={Achievement3} className="achievementImg" alt="" />
          <img src={Achievement4} className="achievementImg" alt="" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDescription">
          I am always open to new opportunities, collaborations, or professional connections. If you would like to discuss a project, have any questions, or simply want to connect, please feel free to reach out. I look forward to hearing from you.
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea className="message" placeholder="Your Message" rows="13"></textarea>
          <button type="submit" value="Send" className="submitBtn">Send Message</button>
          <div className="Links">
            <img src={FacebookIcon} className="icon1" alt="Facebook" />
            <img src={InstagramIcon} className="icon2" alt="Instagram" />
            <img src={GitHubIcon} className="icon3" alt="GitHub" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Achievements;