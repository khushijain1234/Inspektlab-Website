import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/ClaimEstimation.module.css'
import language from '../languages/claim-estimation.json'

import { questions } from '../const/faq'
import { estimationList, estimationList2, reviewList, pointersList,featuresList,claimLists,existingSystemIntegrationPoints,stats, contactSection } from '../const/claim-estimation'
import { photoAPIFeatures } from '../const/photo-inspection'
import { useState, useRef } from 'react'

export default function ClaimEstimation({locale}) {

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
                url="https://inspektlabs.com/claim-estimation"
                keywords={language["seo keywords"][locale]}
                page="claim-estimation"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <div className={styles.grid}>
                        <h1 className={styles.featuredTitle}>AI Powered Claim Assessment Automation for Accurate Vehicle Estimation</h1>
                        <p className={styles.featuredText}>Inspektlabs automates vehicle claim assessment - from damage detection to repair decisions and cost estimation. Our AI uses 15 intelligent modules integrated with local part costs and labor rates to generate precise claim values in seconds, reducing processing time by 70%.</p>
                        <div
                            className={styles.mainBtn}
                            onClick={() => (window.location.href = '/contact-us')}
                        >
                            Get a Call Back
                            <Image src='/img/call.png' alt="Call" width={24} height={24} className={styles.callImg}/>
                        </div>
                    </div>
                    <div className={styles.featuredImageSection}>
                        <div className={styles.imgWrapper}>
                            <Image src='/img/Claim Estimationn Graphics.png' alt='Claim Estimation Graphics' layout='fill' objectFit='contain' objectPosition='center' className={styles.mainGraphics} />
                            <div className={styles.inspectionResultsCard}>
                                <div className={styles.inspectionResultsCardContent}>
                                    <p className={styles.inspectionResultsCardHeading} style={{color: 'black', marginTop: '0px'}}>Inspection No.</p>
                                    <div className={styles.viewClaimBtn}><p>View Claim</p> <Image src='/img/arrow-up-right.png' alt='arrow up right' width={12} height={12} /></div>
                                    <p className={styles.inspectionResultsCardHeading}>Damage Areas</p>
                                    <p className={styles.inspectionResultsCardText}>Front End</p>
                                    <p className={styles.inspectionResultsCardHeading}>Est. Repair Cost</p>
                                    <p className={styles.inspectionResultsCardText}>$5,000-$7,000</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.pointerSection}>
                        {pointersList.map((pointers,idx)=>{
                            return(
                                <div className={styles.pointers} key={idx}>
                                    <Image src='/img/success.png' alt="success" width={32} height={32} />
                                    <p>{pointers.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section className={styles.claimEstimationFeaturesSection}>
                    <div className={styles.claimEstimationFeaturesContent}>
                        <p className={styles.featureSectionText} style={{fontSize: '24px'}}>Capabilities</p>
                        <h2 className={styles.featureSectionHeading}>AI-Powered Vehicle Claim Assessment & Estimation</h2>
                        <p className={styles.featureSectionText}>Our AI-powered claim assessment automation analyses vehicle damage and calculates accurate estimates using 15 intelligent modules that adapt to any market</p>

                        <div className={styles.featuresContainer}>
                            {featuresList.map((feature,idx)=>{
                                return(
                                    <div className={styles.featureCard} key={idx}>
                                        <Image src={feature.img} alt={feature.title} width={237} height={161} />
                                        <h4 className={styles.featureCardTitle}>{feature.title}</h4>
                                        <p className={styles.featureCardText}>{feature.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>                
                </section>

                <section className={styles.aiClaimSection}>
                    <div className={styles.aiClaimContent}>
                        <h2 className={styles.featureSectionHeading}>How AI Reduces Claim Processing Time by <span className={styles.highlightedText}>70%</span></h2>
                        <p className={styles.featureSectionText}>AI-powered claim assessment automation generates instant estimates in seconds, eliminating manual calculations and reducing claim costs by 30%-40%</p>
                        <div className={styles.claimListsCard}>
                            {
                                claimLists.map((claim,idx)=>{
                                    return(
                                        <div className={styles.claimList} key={idx}>
                                            <Image src={claim.img} alt={claim.title} width={44} height={48} />
                                            <p>{claim.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                <section className={styles.existingSystemReliabilitySection}>
                    <div className={styles.existingSystemReliabilityContent}>
                        <h2 className={styles.featureSectionHeading}>Seamlessly Integrates with Your <span className={styles.highlightedText}>Existing System</span></h2>
                        <p className={styles.featureSectionText} style={{color: 'white'}}>Connect Inspektlabs with your claims management system software, estimates providers, and data sources through our flexible API</p>
                        <div className={styles.pointsSection}>
                            {existingSystemIntegrationPoints.map((point,idx)=>{
                                return(
                                    <div key={idx}>
                                        <h4>{point.title}</h4>
                                        <div className={styles.subPointsSection}>
                                            {point.subpoints.map((subpoint,i)=>{
                                                return(
                                                    <div className={styles.points} key={i}>
                                                        <Image src={subpoint.img} alt={subpoint.text} width={30} height={30} />
                                                        <p>{subpoint.text}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
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
                    <h1 className={styles.faqTitle}>Commonly asked questions</h1>
                    </div>
                    <div className={styles.questionContainer}>
                    <div className={styles.faqGrid}>
                        {questions["Claim Assessment"][locale].map((item, index) => (
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