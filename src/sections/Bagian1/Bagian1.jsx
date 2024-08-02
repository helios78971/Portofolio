import styles from './Bagian1.module.css';
import profilePic from '../../assets/profile.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="bagian1" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profilePic}
          className={styles.profile}
          alt="Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Frederick Benaya
          <br />
          Situmorang
        </h1>
        <span>
          <a href="mailto:fredericksitumorang@tutamail.com" target="_blank">
            <img src={emailIcon} alt="Email icon" />
          </a>
          <a href="https://github.com/helios78971" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/fredericksitumorang/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hi, I am a fresh graduate with a passion for technologies and new experiences.
          This is my humble portfolio, I hope you like it. Thank you.
        </p>
      </div>
    </section>
  );
}

export default Hero;