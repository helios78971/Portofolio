import React from 'react'
import styles from './Bagian5.module.css'
import ExperienceList from '../../common/ExperienceList'
import DotLight from '../../assets/dot-light.svg'
import DotDark from '../../assets/dot-dark.svg'
import { useTheme } from '../../common/ThemeContext'

function Bagian5() {
  const { theme } = useTheme();

  const Poin = theme === 'light' ? DotLight : DotDark;

  return (
    <section id="experiences" className={styles.container}>
        <h2 className="sectionTitle">Experiences</h2>
        <div className={styles.experiencesList}>
                <div className="Exp">
                    <div>
                        <img src={Poin} alt="Dot 1" />
                    </div>
                    <ExperienceList 
                        time="August 2023 - December 2023"
                        role="Instructor of IBM Academy for Hybrid Cloud & AI"
                        jobdesc="My role as a mentor at Infinite Learning involves ensuring the success of mentees in understanding 
                                RedHat Enterprise Linux as a Linux System Administrator, basic knowledge of AI in the industrial world, 
                                and knowledge of Cybersecurity for maintaining digital security. I am also responsible for ensuring that mentees thoroughly grasp the material 
                                and for communicating and collaborating on every project throughout the program."
                    />
                </div>
                <div className="Exp">
                    <div >
                        <img src={Poin} alt="Dot 2" />
                    </div>
                    <ExperienceList 
                        time="February 2023 - June 2023"
                        role="Studi Independen Bersertifikat Red Hat Certified System Administrator - IBM AI & Cybersecurity"
                        jobdesc="This program is organized by Infinite Learning in collaboration with the Ministry of Education, Culture, Research, and Technology. Activities conducted during the program include:
                                RedHat Certified System Administrator by RedHat, Artificial Intelligence Practitioner Certification by IBM, 
                                Cybersecurity Practitioner Certification by IBM, Capstone Project about AI/Cybersecurity with IBM Cloud Services"
                    />
                </div>
                <div className="Exp">
                    <div >
                        <img src={Poin} alt="Dot 3" />
                    </div>
                    <ExperienceList 
                        time="February 2022 - July 2022"
                        role="Studi Independen Bersertifikat Orbit Future Academy - Artificial Intelligence Mastery Program"
                        jobdesc="This program is organized by Infinite Learning in collaboration with the Ministry of Education, Culture, Research, and Technology. Activities conducted during the program include:
                                Computer Vision, Data Science, Natural Language Processing, Reinforcement Learning"
                    />
                </div>
                <div className="Exp">
                    <div >
                        <img src={Poin} alt="Dot 4" />
                    </div>
                    <ExperienceList 
                        time="January 2022 - December 2021"
                        role="Head of the Member Info Division"
                        jobdesc="The Member Info Division is responsible for managing data related to journals, papers and essays as well as managing data for UKM PRIMA members at the University of Mataram."
                    />
                </div>
        </div>
    </section>
  )
}

export default Bagian5