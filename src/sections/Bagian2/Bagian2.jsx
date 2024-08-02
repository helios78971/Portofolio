import React, { useState, useEffect } from 'react';
import styles from './Bagian2.module.css';
import VC from '../../assets/Vehicle-Counting.png';
import KD from '../../assets/Kesegaran-Daging.jpeg';
import KS from '../../assets/Kstone75.jpeg';
import ProjectCard from '../../common/ProjectCard';

const projects = [
  {
    link: "https://github.com/helios78971/Tugas_Akhir",
    src: VC,
    h3: "Vehicle Counting",
    p: "Web app for counting vehicle with YOLOv5 & DeepSORT"
  },
  {
    link: "https://github.com/helios78971/klasifikasi-kesegaran-daging",
    src: KD,
    h3: "Meat Freshness Classification",
    p: "Web app for classify meat freshness with ResNet50"
  },
  {
    link: "https://github.com/helios78971/KStone75",
    src: KS,
    h3: "KStone75",
    p: "A 75% keyboard schematic made by KiCad"
  }
];

function Bagian2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className={styles.container}>
      <h2 className='sectionTitle'>Projects</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.prev} onClick={prevSlide}>❮</button>
        <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {projects.map((project, index) => (
            <div key={index} className={styles.slide}>
              <ProjectCard 
                link={project.link}
                src={project.src}
                h3={project.h3}
                p={project.p}
              />
            </div>
          ))}
        </div>
        <button className={styles.next} onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
}

export default Bagian2;
