import Image from 'next/image';
import SEO from '../components/SEO';
import styles from '../styles/DamageDetection.module.css';
import language from '../languages/damage-detection.json';

import { vehiclesCovered } from '../const/damage-detection';
import { photoAPIFeatures } from '../const/photo-inspection';
import { questions } from '../const/faq';
import { useEffect, useRef, useState } from 'react';

export default function FraudDetection({ locale }) {

  const featuresScrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(3);
  const isPaused = useRef(false);
  const lastTimeRef = useRef(0);


  useEffect(() => {
    let frame;

    const tick = (timestamp) => {
      if (isPaused.current) {
        lastTimeRef.current = timestamp;   // reset timestamp so no jump happens
      } else {
        if (timestamp - lastTimeRef.current >= 2500) {
          setCurrentIndex((prev) =>
            prev === vehiclesCovered.length - 1 ? 0 : prev + 1
          );
          lastTimeRef.current = timestamp;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [vehiclesCovered.length]);


  const QuestionSection = ({keyIndex, que, ans}) => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={`${styles.questionModal} ${isOpen ? styles.openModal : ""}`} onClick={()=>setIsOpen(!isOpen)}>
          <p className={styles.questionIndex}>{String(keyIndex+1).padStart(2, '0')}</p>
          <div className={styles.question}>
              <p>{que}</p>
              <Image src={isOpen? '/img/shrink-icon.svg': '/img/expand-icon.svg'} alt="FAQ" width={36} height={36} objectFit='contain'/>
          </div>
          <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
              {ans.map((item, index)=><p key={index}>{item}</p>)}
          </div>
        </div>
    )
  }

  const scrollFeatures = (direction) => {
    const container = featuresScrollRef.current;
    const cardWidth =
      container.querySelector(`.${styles.blogItem}`).offsetWidth + 20;

    if (direction === "left") {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      <SEO
        title={language['seo title'][locale]}
        description={language['seo desc'][locale]}
        image='https://inspektlabs.com/img/car.png'
        url='https://inspektlabs.com/damage-detection/'
        keywords={language['seo keywords'][locale]}
        page='damage-detection'
      />

      {/* Main Body */}
      <main className={styles.main}>
        {/* Featured Section */}
        <section className={styles.featured}>
          <div className={styles.featuredContent}>
            <h1 className={styles.featuredTitle}>
              Damage Detection APP
            </h1>
            <p className={styles.featuredText}>Automate vehicle inspection with A.I. Upload image of your vehicle and get a detailed report within seconds</p>
            <div className={styles.btnContainer}>
                <div
                  className={styles.mainBtn}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                  Contact Us
                </div>
              </div>
          </div>

          <div className={styles.featuredVideo}>
            <video
              autoPlay
              muted
              loop
              preload='auto'
              playsInline
              className={styles.myVideo}
            >
              <source src='/img/damage.webm' type='video/webm' />
              <source src='/img/damage.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Damage data Interpretation section */}
        <section className={styles.damageData}>
          <div className={styles.damageDataImg}>
            <Image src={'/img/damage data interpretation.png'} layout='fill' objectFit='contain' objectPosition='center' alt='damage-data-interpretation' />
          </div>
        </section>

        <section className={styles.vehicleCoveredSection}>
          <div className={styles.vehicleCoveredSubSection}>
            <h2 className={styles.vehicleCoveredHeading}>Types of vehicles covered</h2>
            <h1 className={styles.vehicleCoveredSubHeading}>{vehiclesCovered[currentIndex].label}</h1>
              <div className={styles.vehicleImages}>
                <div key={currentIndex} className={styles.vehicleMainImgWrapper} onMouseEnter={() => (isPaused.current = true)} onMouseLeave={() => (isPaused.current = false)}>
                <Image 
                  src={vehiclesCovered[currentIndex].img} 
                  alt={vehiclesCovered[currentIndex].label}
                  width={vehiclesCovered[currentIndex].imgWidth}
                  height={vehiclesCovered[currentIndex].imgHeight}
                  className={styles.vehicleMainImg}
                />
                </div>
            </div>
            <div className={styles.carouselControls}>
              <button
                className={`${styles.navArrow} ${styles.leftArrow}`}
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? vehiclesCovered.length - 1 : prev - 1))}
                aria-label="Previous vehicle"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className={`${styles.navArrow} ${styles.rightArrow}`}
                onClick={() => setCurrentIndex((prev) => (prev === vehiclesCovered.length - 1 ? 0 : prev + 1))}
                aria-label="Next vehicle"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>
        
      <section className={styles.photoAPIFeatureSection}>
          <div className={styles.photoAPIFeatureContainer}>
            <h3 className={styles.vehicleSupportedHeading}>Also Check Out</h3>
            <div className={styles.blogCaraouselContainer}>
              <div className={`${styles.nav} ${styles.navLeft}`}>
                <Image
                  src={"/img/nav-left.svg"}
                  width={50}
                  height={50}
                  alt="nav-left"
                  onClick={() => scrollFeatures("left")}
                />
              </div>
              <div
                className={styles.blogCaraouselContent}
                ref={featuresScrollRef}
              >
                {photoAPIFeatures.map((post) => (
                  <div className={styles.blogItem} key={post.id}>
                    <div className={styles.blogImg}>
                      <Image
                        src={post.img}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt={post.title}
                      />
                    </div>
                    <div className={styles.blogContent}>
                      <p className={styles.blogTitle}>{post.title}</p>
                      <p className={styles.blogText}>{post.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${styles.nav} ${styles.navRight}`}>
                <Image
                  src={"/img/nav-right.svg"}
                  width={50}
                  height={50}
                  alt="nav-right"
                  onClick={() => scrollFeatures("right")}
                />
              </div>
            </div>
          </div>
        </section>


        <section className={styles.faqSectionContainer}>
          <div className={styles.faqSection}>
            <div className={styles.faqTitleContainer}>
              <h1 className={styles.faqTitle}>Commonly asked questions</h1>
            </div>
            <div className={styles.questionContainer}>
              <div className={styles.faqGrid}>
                {questions["Damage Detection"][locale].map((item, index) => (
                  <QuestionSection keyIndex={index} que={item.Q} ans={item.A} />
                ))}
              </div>
            </div>
            <div
              className={styles.viewMoreBtn}
              style={{ width: "200px" }}
              onClick={() => (window.location.href = "/faq")}
            >
              View More
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
