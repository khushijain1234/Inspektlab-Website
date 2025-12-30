import Image from 'next/image'
import styles from '../styles/AIPoweredOCR.module.css'

import { howItHelpsFeatures, stats, featuresList, contactSection } from '../const/ai-powered-ocr'
import { questions } from '../const/faq'
import { photoAPIFeatures } from '../const/photo-quality'
import { useRef, useState } from 'react'

export default function AIPoweredOCR({locale}) {

  const featuresScrollRef = useRef(null);

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
            <main className={styles.main}>

                {/* Hero Section */}
                <section className={styles.featured}>
                <div className={styles.grid}>
                    <h1 className={styles.featuredTitle}>
                    Extract Critical Vehicle Data Instantly
                    </h1>
                    <p className={styles.featuredText}>
                        Our proprietary AI helps extract important vehicle information for vehicle identification.
                        <br/>Reduce manual data entry, improve accuracy, and streamline inspections, <span style={{fontWeight: 'bold'}}>claims processing</span>, and <span style={{fontWeight: 'bold'}}>fleet management</span>. 
                    </p>
                    <div
                            className={styles.mainBtn}
                            onClick={() => (window.location.href = '/contact-us')}
                        >
                            Get a Call Back
                            <Image src='/img/call.png' alt="Call" width={24} height={24} className={styles.callImg}/>
                        </div>
                </div>

                <div className={styles.fraudDetectionBg}>
                    <Image
                    src="/img/OCR Image graphics.png"
                    alt="Vehicle OCR"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    />
                </div>
                <div className={styles.howItHelpsContainer}>
                    <h2 className={styles.sectionTitle}>How it helps</h2>
                    <p className={styles.statLabel}>AI-powered claim assessment automation generates instant estimates in seconds, eliminating manual calculations and reducing claim costs by 30% - 40%</p>
                    <div className={styles.howItHelpsGrid}>
                    {howItHelpsFeatures.map((feature, index) => (
                        <div key={index} className={styles.helpCard}>
                        <div className={styles.helpIcon}>
                            <img src={feature.icon} alt={feature.title} width={48} height={48} />
                        </div>
                        <p className={styles.helpText}>{feature.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </section>


                {/* Capabilities Section */}
                <section className={styles.claimEstimationFeaturesSection}>
                    <div className={styles.claimEstimationFeaturesContent}>
                        <p className={styles.featureSectionText} style={{fontSize: '24px'}}>Capabilities & Uses</p>

                        <div className={styles.featuresContainer}>
                            {featuresList.map((feature,idx)=>{
                                return(
                                    <div className={styles.featureCard} key={idx}>
                                        <Image src={feature.img} alt={feature.title} width={237} height={211} />
                                        <div className={styles.featureCardContent}>
                                            <h3 className={styles.featureCardTitle}>{feature.title}</h3>
                                            <p className={styles.featureCardText}>{feature.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.requestDemoBtn} onClick={() => (window.location.href = '/contact-us')}>
                            Request a Demo
                            <Image src='/img/demand video.png' alt="Call" width={24} height={24} className={styles.callImg}/>
                        </div>
                    </div>                
                </section>

                <section className={styles.photoAPIFeatureSection}>
                    <div className={styles.photoAPIFeatureContainer}>
                        <h2 className={styles.fraudDetectionFeaturesTitle}>Also Check Out</h2>
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

                <section className={styles.statsSection}>
                    <div className={styles.statsContainer}>
                        <p className={styles.statHeading}>Trusted by Leading Insurers Worldwide</p>
                        <p className={styles.statLabel}>We provide the best solutions and assisstance for cars</p>
                        <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                            <h3 className={styles.statValue}>{stat.value}</h3>
                            <p className={styles.statLabel}>{stat.label}</p>
                            </div>
                        ))}
                        </div>

                        <h2 className={styles.statsTitle}>
                        Ready to Reduce Claim Costs and Eliminate Frauds?
                        </h2>

                        <div className={styles.requestDemoBtn} onClick={() => (window.location.href = '/contact-us')}>
                            Request a Demo
                            <Image src='/img/demand video.png' alt="Call" width={24} height={24} className={styles.callImg}/>
                        </div>
                        <div className={styles.contactSection}>
                            {contactSection.map((item,idx)=>(
                                <div className={styles.contacts} key={idx}>
                                    <Image src={item.img} alt={item.label} width={44} height={44} />
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSectionContainer}>
                <div className={styles.faqSection}>
                    <div className={styles.faqTitleContainer}>
                    <h2 className={styles.faqTitle}>Commonly asked questions</h2>
                    </div>
                    <div className={styles.questionContainer}>
                    <div className={styles.faqGrid}>
                        {questions["Vehicle OCR"][locale].map((item, index) => (
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