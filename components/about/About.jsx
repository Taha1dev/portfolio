import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './about.module.css';
import HyperOne from '../customH1/HyperOne';
import Image from 'next/image';
import CustomButton from '../button/CustomButton';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  useEffect(() => {
    if (inView1 || inView2 || inView3 || inView4) {
      setIsVisible(true);
    }
  }, [inView1, inView2, inView3, inView4]);
  const memoizedImage = useMemo(
    () => (
      <Image
        height={960}
        width={1080}
        alt="Taha Al-Mulla Image"
        src={'/imgs/Taha.jpg'}
        priority
      />
    ),
    []
  );
  const handleButtonClick = useCallback(() => {}, []);
  return useMemo(
    () => (
      <div id="about" className={`${styles['about-container']}`}>
        <div className={`${styles['about-content']}`}>
          <section className={styles.imageSection}>{memoizedImage}</section>
          <section className={`${styles.infosection}`}>
            <HyperOne value={'About Me'} />
            <h2 className="text-2xl">
              {' '}
              Professional Web Developer & Designer having 2 years of experince
            </h2>
            <p className="text-xl justify">
              As a front-end developer with experience in React and Next.js, I
              have 2 years of professional web development and design expertise.
              I am skilled in creating responsive and interactive user
              interfaces, utilizing modern web technologies and frameworks. My
              goal is to deliver high-quality and visually appealing websites
              that meet the client&apos;s requirements and provide an excellent
              user experience. I am passionate about staying up-to-date with the
              latest industry trends and continuously improving my skills to
              deliver cutting-edge solutions.
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
            <Link
              download
              href={
                'https://drive.google.com/file/d/12r6-0fo4CjA7IREC8HkrIREwFlQoxLH1/view?usp=drive_link'
              }
            >
              <CustomButton text={'Download CV'} onclick={handleButtonClick} />
            </Link>
          </section>
          <section className={styles.skillSection}>
            <div className={styles.subject}>
              <div className={'subject'}>Hard Work</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref1}
                  className={`${
                    isVisible ? styles['fade-in1'] : styles['progress-line']
                  }`}
                  value="94%"
                  style={{
                    width: '94%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Web Development </div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref2}
                  className={`${
                    isVisible ? styles['fade-in2'] : styles['progress-line']
                  }`}
                  value="87%"
                  style={{
                    width: '87%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Creativity</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref3}
                  className={`${
                    isVisible ? styles['fade-in3'] : styles['progress-line']
                  }`}
                  value="75%"
                  style={{
                    width: '75%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Web Design</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref4}
                  className={`${
                    isVisible ? styles['fade-in4'] : styles['progress-line']
                  }`}
                  value="84%"
                  style={{
                    width: '84%',
                  }}
                ></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    ),
    [isVisible, ref1, ref2, ref3, ref4, handleButtonClick, memoizedImage]
  );
};
export default About;
