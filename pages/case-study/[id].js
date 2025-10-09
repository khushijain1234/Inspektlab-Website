import React, { useState } from 'react'
// import styles from "../styles/CaseStudy.module.css";
import styles from '../../styles/CaseStudy.module.css';
import logo from '../../public/img/logo.svg'
import Image from "next/image";
import Link from 'next/link'
import {  getCaseStudyById,caseStudies } from '../../const/case-study'



const CaseStudy = ({ caseStudy }) => {
  if (!caseStudy) return <div>Case study not found.</div>;
    const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.mainContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                {caseStudy.caseStudyTitle}
              </h1>
              <p className={styles.heroSubtitle}>
                {caseStudy.caseStudySubtitle}
              </p>
            </div>
            <div className={styles.videoSection}>
              {/* <div 
                className={styles.playButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <div className={styles.playIcon}></div>
              </div> */}
                <div className={{marginBottom: '20px'}}>
                    <Link href="/"><a><Image src={logo} alt="Inspektlabs" /></a></Link>
                </div>
              
                <div className={styles.companyInfo}>
                    <p>
                        <strong>Industry:</strong>
                        <span>Insurance</span>
                    </p>
                    <p>
                        <strong>Location:</strong>
                        <span>India</span>
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Background</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentText}>
                {caseStudy.backgroundContent.map((content,id) =>
                    <p key={id} className={styles.contentParagraph}>
                        {content}
                    </p>
                )}
            </div>
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>{caseStudy.aboutSectionHeading}</h3>
              {caseStudy.aboutSection.map((about,id)=>
                <p><Image src={'/img/star.svg'} alt='star' width={12} height={12} className={styles.starImg}/> {about}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.challengeSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Problem</h2>
          </div>
          <div className={styles.sectionContent}>
            {caseStudy.problems && <div className={styles.contentText}>
                {caseStudy.problems.map((problem,id) => 
                    <p key={id} className={styles.contentParagraph}>
                        {problem}
                    </p>
                )}
            </div>}
            {caseStudy.challenges && <div className={styles.contentText}>
              <p className={styles.contentParagraph}>{caseStudy.challenges[0].intro}</p>
                {caseStudy.challenges[0].bullets.map((challenge,id) => 
                    <div className={styles.bulletPoint} key={id}>
                      <div className={styles.bulletIcon}>✓</div>
                      <span>{challenge}</span>
                    </div>
                )}
            </div>}
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Key Challenges</h3>
              {caseStudy.keyChallenges.map((challenge,id)=>
                <p key={id}><Image src={'/img/star.svg'} alt='star' width={12} height={12} className={styles.starImg}/> {challenge}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solutionSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Solution</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentText}>
                {caseStudy.solutions[0].intro?.map((intro,id)=>
                    <p className={styles.contentParagraph}>
                        {intro}
                    </p>
                )}
                {caseStudy.solutions[0].stepsDescription && <p className={styles.contentParagraph}>{caseStudy.solutions[0].stepsDescription}</p>}
                {caseStudy.solutions[0].steps?.map((step,i)=>
                    <div className={styles.bulletPoint} key={i}>
                        <div className={styles.stepIcon}>
                          <Image src={step.icon} alt="Icon" width={50} height={50} />
                        </div>
                        <span>{step.text}</span>
                    </div>
                )}
                {caseStudy.solutions[0].bullets?.map((bullet,id)=>{
                    return(
                        <div key={id}>
                            <p className={styles.contentParagraph}>
                                {bullet.description}
                            </p>
                            <div className={styles.bulletPoints}>
                            {bullet.points.map((d,i)=>
                                <div className={styles.bulletPoint} key={i}>
                                    <div className={styles.bulletIcon}>✓</div>
                                    <span>{d}</span>
                                </div>
                            )}
                            </div>
                        </div>
                    )
                })}
                {
                  caseStudy.solutions[0].solutionImg && <div className={styles.solutionImg}> <Image src={caseStudy.solutions[0].solutionImg} alt="Solution Img" width={1000} height={500} /> </div>
                }
                {caseStudy.solutions[0].conclusion?.map((d,i)=>
                    <p className={styles.contentParagraph}>
                        {d}
                    </p>
                )}
            </div>
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Want to see what Inspektlabs can do for your team?</h3>
              <p>Schedule a personalized demo with one of our industry experts.</p>
              <button 
                className={styles.ctaButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                onClick={() => (window.location.href = '/contact-us')}
              >
                Book a demo
              </button>
            </div>
            {/* <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Solution Benefits</h3>
              <p>• Real-time media capture</p>
              <p>• Automated coordination</p>
              <p>• Standardized evaluation</p>
              <p>• Enhanced visibility</p>
              <br />
              <button className={styles.ctaButton} onClick={() => (window.location.href = '/contact-us')}>View Demo</button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        {/* <div className={styles.inspektLabsLogo}>
          Inspekt<br/>Labs
        </div> */}
        <div className={styles.container}>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonialContent}>
              {/* <div className={styles.testimonialImage}>
                <div className={styles.personImage}>
                  👨‍💼
                </div>
                <div className={styles.personCard}>
                  <div className={styles.personName}>Vikram Jain</div>
                  <div className={styles.personTitle}>Chief Technology Officer and Business Transformation</div>
                  <div className={styles.companyLogo}>
                    <div style={{width: '20px', height: '20px', background: '#E53E3E', borderRadius: '50%'}}></div>
                    <div style={{width: '20px', height: '20px', background: '#3182CE', borderRadius: '50%'}}></div>
                    <span>Universal Sompo General Insurance</span>
                  </div>
                </div>
              </div> */}
              <div>
                <Image src={caseStudy.testimonialImg} alt="Testimonials" width={300} height={350} />
              </div>
              <div className={styles.quote}>
                {/* <div className={styles.quoteIcon}>"</div> */}
                {`" ${caseStudy.testimonialText} "`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Impact</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentText}>
                {caseStudy.impacts.map((txt,id)=>
                    <p key={id} className={styles.contentParagraph}>
                        {txt}
                    </p>
                )}
            </div>
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>The Inspektlabs Impact</h3>
              {caseStudy.keyImpacts.map((key, i)=>
                <p key={i}><Image src={'/img/star.svg'} alt='star' width={12} height={12} className={styles.starImg}/> {key}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            {
                caseStudy.metricItem.map((metric,id)=>
                    <div className={styles.metricItem}>
                        <div className={styles.metricNumber}>
                            {metric.metricNumber}
                            {metric.metricArrow && <span className={styles.metricArrow}>{metric.metricArrow}</span>}
                        </div>
                        <p className={styles.metricLabel}>{metric.metricLabel}</p>
                    </div>
                )
            }
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Conclusion</h2>
          </div>
          <div className={styles.contentText} style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            {
                caseStudy.conclusions.map((txt,i)=>
                    <p className={styles.contentParagraph}>
                        {txt}
                    </p>
                )
            }
            {/* <p className={styles.contentParagraph}>
              Universal Sompo General Insurance's move to digitize and streamline its underwriting operations is a strong example of how AI-powered solutions can deliver real-world efficiency in insurance workflows.
            </p>
            <p className={styles.contentParagraph}>
              By automating and standardizing a once-manual process, Universal Sompo General Insurance is now better positioned to serve its customers and scale its operations, all while saving time and reducing operational overheads.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy

export async function getStaticPaths() {
  // build paths from your list
  const paths = caseStudies.map((c) => ({ params: { id: c.id } }));
  console.log("here")
  return {
    paths,
    fallback: false, // false => other routes 404
  };
}

// provide the case study data to the page
export async function getStaticProps({ params }) {
  const { id } = params;
  const caseStudy = getCaseStudyById(id);

  if (!caseStudy) {
    return { notFound: true };
  }

  return {
    props: {
      caseStudy,
    },
  };
}