import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/PhotoVideoCapture.module.css'
import language from '../languages/photo-video-capture.json'
import { questions } from '../const/faq'
import { photoAPIFeatures } from '../const/photo-inspection'
import { stats, contactSection } from '../const/ai-powered-ocr'
import { featuresList, smartPhoneFeatures, howItWorksHeadings, howItWorksPoints } from '../const/photo-video-capture'


export default function PhotoVideoCapture({locale}) {

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

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/photo-video-capture"
                keywords={language["seo keywords"][locale]}
                page="photo-video-capture"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                <div className={styles.grid}>
                    <h1 className={styles.featuredTitle}>
                    Automate Vehicle Inspections using your smartphone
                    </h1>
                    <p className={styles.featuredText}>
                        Record pictures/videos of a vehicle with your smartphone camera and get a detailed condition report within seconds
                    </p>
                    <div
                            className={styles.mainBtn}
                            onClick={() => (window.location.href = '/contact-us')}
                        >
                            Request a Demo
                            <Image src='/img/call.png' alt="Call" width={24} height={24} className={styles.callImg}/>
                        </div>
                </div>

                <div className={styles.fraudDetectionBg}>
                    <Image
                    src="/img/photo video capture.png"
                    alt="Vehicle OCR"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    />
                </div>
                </section>

                {/* Capabilities Section */}
                <section className={styles.claimEstimationFeaturesSection}>
                    <div className={styles.claimEstimationFeaturesContent}>
                        <p className={styles.featureSectionText}>Capabilities</p>
                        <h2 className={styles.featureSectionTitle}>Plug and Play Vehicle Inspection Solution for your smartphone</h2>
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
                    </div>                
                </section>
                <section className={styles.allFeaturesSection}>
                    <div className={styles.featuresImage}>
                    <Image
                        src="/img/How-it-works.png"
                        alt="How it works"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className={styles.howItWorksImg}
                    />
                    </div>
                </section>
                <section className={styles.allFeaturesMobileSection}>
                    <div className={styles.allFeaturesMobileSectionContent}>
                        <h2>How it works</h2>
                        <p>AI- powered claim assessment automation generates instant estimates in seconds, eliminating manual calculations and reducing claim costs by 30% - 40%</p>
                        <div className={styles.featureHeadings}>
                            {howItWorksHeadings.map((data,idx)=>
                            <div className={styles.featureHeading} key={idx}>{data.text}</div>
                            )}
                        </div>
                        <div className={styles.downArrowImg}>
                            <Image src='/img/down-arrow.png' width={30} height={100} alt="down Arrow" />
                        </div>
                        <div className={styles.howItWorksPointsContainer}>
                            {howItWorksPoints.map((data,idx) =>{
                                return (
                                    <div key={idx} className={styles.howItWorksPoints}>
                                        <Image src={data.img} alt={data.text} width={24} height={24} />
                                        <p>{data.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className={styles.smartPhoneFeaturesSection}>
                    <div className={styles.smartPhoneFeaturesContent}>
                        <h2 className={styles.smartPhoneFeatureSectionTitle}>Why choose smartphone-powered inspection?</h2>
                        <div className={styles.smartPhoneFeaturesContainer}>
                            {
                                smartPhoneFeatures.map((feature)=>{
                                    return(
                                        <div className={styles.features}>
                                            <Image src={feature.img} alt={feature.text} width={58} height={48} />
                                            <p>{feature.text}</p>
                                        </div>
                                    )
                                })
                            }
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
                        {questions["Photo and Video Capture"][locale].map((item, index) => (
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