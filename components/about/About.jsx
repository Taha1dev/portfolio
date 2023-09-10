import React from 'react';
import styles from './about.module.css';
import HyperOne from '../customH1/HyperOne';
import Image from 'next/image';
import CustomButton from '../button/CustomButton';
const About = () => {
  return (
    <div className={`${styles['about-container']}`}>
      <div className={`${styles['about-content']}`}>
        <section className={styles.imageSection}>
          <Image
            height={300}
            width={300}
            alt="Taha Al-Mulla Image"
            src={'/imgs/upme.jpg'}
            priority
          />
        </section>
        <section className={`${styles.infosection}`}>
          <HyperOne value={'About Me'} />
          <h2 className="">
            {' '}
            Professional Web Developer & Designer having 2 years of experince
          </h2>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, accusamus. Itaque sit porro et fuga corporis rerum quo
            incidunt temporibus officiis. Vero dolore veniam maxime nihil
            voluptate laborum fuga possimus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellendus, accusamus. Itaque sit
            porro et fuga corporis rerum quo incidunt temporibus officiis. Vero
            dolore veniam maxime nihil voluptate laborum fuga possimus.
          </p>
          <div className={`${styles.personalInfo}`}>
            <div>
              <span className="font-bold">Full Name:</span>
              <span>Taha M. Al-Mulla</span>
            </div>
            <div>
              <span className="font-bold">Bussines Email:</span>
              <span>taha.bus11@gmail.com</span>
            </div>
            <div>
              <span className="font-bold">Industry:</span>
              <span>Software Engineering</span>
            </div>
            <div>
              <span className="font-bold">Address:</span>
              <span>Damascus, Syria</span>
            </div>
          </div>
          <div className="button">
            <CustomButton text={'Download CV'} />
          </div>
        </section>
        <section className={`${styles.skillSection}`}>
          <div className={styles.subject}>
            <div className={styles.subject}>Hard Work</div>
            <div className={`${styles['progress-bar']}`}>
              <div
                className={`${styles['progress-line']}`}
                value="94%"
                style={{
                  maxWidth: '94%',
                }}
              ></div>
            </div>
          </div>
          <div className={styles.subject}>
            <div className="subject">Creativity</div>
            <div className={`${styles['progress-bar']}`}>
              <div
                className={`${styles['progress-line']}`}
                value="74%"
                style={{
                  maxWidth: '74%',
                }}
              ></div>
            </div>
          </div>
          <div className={styles.subject}>
            <div className="subject">Web Development</div>
            <div className={`${styles['progress-bar']}`}>
              <div
                className={`${styles['progress-line']}`}
                value="74%"
                style={{
                  maxWidth: '74%',
                }}
              ></div>
            </div>
          </div>
          <div className={styles.subject}>
            <div className="subject">Web Design</div>
            <div className={`${styles['progress-bar']}`}>
              <div
                className={`${styles['progress-line']}`}
                value="84%"
                style={{
                  maxWidth: '84%',
                }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
