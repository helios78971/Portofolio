import React from 'react'
import styles from './Bagian3.module.css'
import CheckLight from '../../assets/check-light.svg'
import CheckDark from '../../assets/check-dark.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

function Bagian3() {
  const { theme } = useTheme();
  const CheckIcon = theme === 'light' ? CheckLight : CheckDark;
  return (
    <section id="skills" className={styles.container}>
        <h2 className='sectionTitle'>Skills</h2>
        <div className={styles.skillList}>
            <SkillList src={CheckIcon} skill="HTML"/>
            <SkillList src={CheckIcon} skill="CSS"/>
            <SkillList src={CheckIcon} skill="Javascript"/>
            <SkillList src={CheckIcon} skill="React"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={CheckIcon} skill="Linux"/>
            <SkillList src={CheckIcon} skill="Python"/> 
            <SkillList src={CheckIcon} skill="Data Analyst"/>
            <SkillList src={CheckIcon} skill="Deep Learning"/>
        </div>
    </section>
  )
}

export default Bagian3