import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/FraudDetection.module.css'
import language from '../languages/fraud-detection.json'

import { features,fraudDetectionFeatures } from '../const/fraud-detection'
import { photoAPIFeatures } from '../const/photo-inspection'
import { questions } from '../const/faq'
import { useRef, useState } from 'react'

export default function FraudDetection({locale}) {

    const [openIndex, setOpenIndex] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const useCasesRef=useRef(null);
    const featuresScrollRef = useRef();

    const QuestionSection = ({ keyIndex, que, ans }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        return (
          <div
            className={`${styles.questionModal} ${isOpen ? styles.openModal : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className={styles.questionIndex}>
              {String(keyIndex + 1).padStart(2, "0")}
            </p>
            <div className={styles.question}>
              <p>{que}</p>
              <Image
                src={isOpen ? "/img/shrink-icon.svg" : "/img/expand-icon.svg"}
                alt="FAQ"
                width={36}
                height={36}
                objectFit="contain"
              />
            </div>
            <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
              {ans.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        );
      };

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

    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/fraud-detection"
                keywords={language["seo keywords"][locale]}
                page="fraud-detection"
            />
            
            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                {/* <section className={styles.featured}>
                    <Image src="/img/fraud-detection.svg" alt="Fraud Detection" width={100} height={100} />
                    <h1 className={styles.featuredTitle}>{language["Vehicle Fraud Detection"][locale]}</h1>
                    <p className={styles.featuredText}>{language["We have developed several"][locale]}</p>
                </section> */}
                <section className={styles.featured}>
                    <div className={styles.grid}>
                        <h1 className={styles.featuredTitle}>AI-powered Fraud Prevention during vehicle inspections</h1>
                        <p className={styles.featuredText}>Inspektlabs AI detects and prevents fraud in vehicle inspections across the automotive industry,
                        ensuring accurate, trustworthy reports every time.
                        </p>
                        <div
                            className={styles.mainBtn}
                            onClick={() => (window.location.href = '/contact-us')}
                        >
                            Contact Us
                        </div>
                    </div>
                    <div className={styles.fraudDetectionBg}>
                    <Image
                        src="/img/fraud detection main img.png"
                        alt="Outlined car"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section className={styles.fraudDetectionFeaturesSection}>
                    <div className={styles.fraudDetectionFeatures} ref={useCasesRef}>
                    <h2 className={styles.fraudDetectionFeaturesTitle}>
                        Capabilities & UseCases
                    </h2>
                    <div className={styles.fraudDetectionFeatureContainer}>
                        <div className={styles.fraudDetectionFeatureList}>
                        {fraudDetectionFeatures.map((feature, index) => {
                            const isOpen = openIndex === index;
                            return (
                            <>
                                <div key={index} className={`${styles.productFeature} ${isOpen? styles.activeDiv:""}`} onClick={()=>{if(openIndex===index){setOpenIndex(null);}else{setOpenIndex(index);setSelectedIndex(index);}}}>
                                <Image src={`/img/${feature.img}`} alt={feature.title} width={54} height={54} />
                                <div className={styles.productFeatureContent}>
                                    <div className={styles.productFeatureTitleContainer}>
                                    <h3 className={`${styles.productFeatureTitle} ${isOpen ? styles.activeTitle: ""}`}>{feature.title}</h3>
                                    <Image src="/img/downArrorw.svg" alt="FAQ" width={24} height={24}  objectFit='contain'/>
                                    </div>
                                    <div className={styles.innerImg}>
                                    {isOpen && <Image src={`/img/${fraudDetectionFeatures[index].mainImg}`} alt='Car Icon' width={575} height={700} />}
                                    </div>
                                    <div className={`${styles.productFeatureTextWrapper} ${isOpen ? styles.open : ''}`}>
                                    {isOpen && <p className={styles.productFeatureText}>{feature.text}</p>}
                                    </div>
                                </div>
                                </div>
                            </>
                            )
                        })}
                        </div>
                        <div className={styles.imgSection}>
                        <Image src={`/img/${fraudDetectionFeatures[selectedIndex].mainImg}`}  alt='Car Icon' width={575} height={744} priority/>
                        </div>
                    </div>
                    </div>
                </section>

                <section className={styles.vehiclesSupportedSection}>
                    <div className={styles.vehiclesSupportedSubSection}>
                        <h3 className={styles.fraudDetectionFeaturesTitle}>Works Best For</h3>
                        <div className={styles.vehiclesSupportedContainer}>
                        <div className={styles.insuranceFraud}>
                            <div className={styles.insuranceFraudImgSection}>
                                <Image
                                className={styles.insuranceFraudImg}
                                src={"/img/Fraud during insurance claims.png"}
                                alt="Car Img"
                                width={280}
                                height={200}
                                />
                            </div>
                            <h3 className={styles.insuranceFraudHeading}>Fraud during Insurance claims</h3>
                        </div>
                        <div className={styles.vehicleRelatedFraud}>
                            <div className={styles.vehicleFraud}>
                            <div className={styles.fraudImgSection}>
                            <Image
                                className={styles.whiteTruck}
                                src={"/img/fraud during vehicle rental.png"}
                                alt="fraud during vehicle rental"
                                width={230}
                                height={150}
                            />
                            </div>
                            <div className={styles.vehicleFraudName}>
                                <h3>Fraud during vehicle rental</h3>
                            </div>
                            </div>
                            <div className={styles.vehicleFraud}>
                            <div className={styles.fraudImgSection}>
                            <Image
                                className={styles.whiteTruck}
                                src={"/img/fraud during buying-selling used cars.png"}
                                alt="Bike"
                                width={230}
                                height={150}
                            />
                            </div>
                            <div className={styles.vehicleFraudName}>
                                <h3>Fraud during buying/selling used cars</h3>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className={styles.photoAPIFeatureSection}>
                    <div className={styles.photoAPIFeatureContainer}>
                        <h3 className={styles.fraudDetectionFeaturesTitle}>Also Check Out</h3>
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


                {/* FAQ Section */}
                <section className={styles.faqSectionContainer}>
                <div className={styles.faqSection}>
                    <div className={styles.faqTitleContainer}>
                    <h1 className={styles.faqTitle}>Commonly asked questions</h1>
                    </div>
                    <div className={styles.questionContainer}>
                    <div className={styles.faqGrid}>
                        {questions["Fraud Detection"][locale].map((item, index) => (
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
    )
}