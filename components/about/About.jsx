import { Suspense, useEffect, useMemo, useState, useRef } from 'react';
import styles from './about.module.css';
import HyperOne from '../customH1/HyperOne';
import Image from 'next/image';
import CustomButton from '../button/CustomButton';
import Link from 'next/link';
import Fallback from '../image/Fallback';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer1 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const observer2 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const observer3 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const observer4 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);
    if (ref4.current) observer4.observe(ref4.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
      if (ref4.current) observer4.unobserve(ref4.current);
    };
  }, []);

  const memoizedImage = useMemo(
    () => (
      <Suspense fallback={<Fallback />}>
        <Image
          height={721}
          width={798}
          alt="Taha Al-Mulla Image"
          src={'/imgs/Taha.jpg'}
          loading="lazy"
        />
      </Suspense>
    ),
    []
  );

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
              As an experienced front-end developer proficient in React and
              Next.js, I boast two years of professional expertise in web
              development and design. My skill set encompasses the creation of
              responsive and interactive user interfaces, leveraging
              cutting-edge web technologies and frameworks. My primary objective
              is to deliver visually stunning, high-quality websites that not
              only align with the client&apos;s requirements but also offer an
              exceptional user experience. My passion lies in remaining abreast
              of the latest industry trends and continually enhancing my skills
              to provide innovative solutions
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
                <span className="font-bold">Employability:</span>
                <span>Available ✅</span>
              </div>
            </div>
            <Link
              aria-label="download cv"
              download
              target="_blank"
              href={'https://rxresu.me/taha.bus11/taha-almulla'}
            >
              <CustomButton text={'Download CV'} />
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
              <div className={styles.subject}>Web Development</div>
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
    [isVisible, memoizedImage]
  );
};

export default About;
