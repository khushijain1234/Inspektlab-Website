import React, { useState } from 'react'
import styles from "../styles/CaseStudy.module.css";
import logo from '../public/img/logo.svg'
import Image from "next/image";
import Link from 'next/link'



const CaseStudy = () => {

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
                Optimizing Sompo General's Underwriting Process
              </h1>
              <p className={styles.heroSubtitle}>
                Universal Sompo General Insurance has partnered with Inspektlabs to optimize its underwriting workflow and eliminate delays in the inspection approval process by leveraging the power of AI-powered inspections across all vehicle types.
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
                        <span>Delhi, India</span>
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
            <h2 className={styles.sectionTitle}>Background</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentText}>
              <p className={styles.contentParagraph}>
                Universal Sompo General Insurance is a global provider of property, casualty, and specialty insurance and reinsurance, operating across diverse markets.
              </p>
              <p className={styles.contentParagraph}>
                Known for its commitment to innovation and customer-centricity, Universal Sompo General Insurance continually seeks ways to enhance operational efficiency and deliver faster, smarter solutions across its insurance offerings.
              </p>
              <p className={styles.contentParagraph}>
                When it came to the motor insurance underwriting process (especially during policy renewals), Universal Sompo General Insurance identified an opportunity to modernize its workflow and reduce the time spent coordinating inspections and approvals.
              </p>
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
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.challengeSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Challenge</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentText}>
              <p className={styles.contentParagraph}>
                Underwriting in Motor Insurance involves evaluating the risk of insuring a particular vehicle or driver, especially at the time of renewal. This requires a thorough inspection of the vehicle's condition, typically supported by images or videos of any damage.
              </p>
              <p className={styles.contentParagraph}>
                Before onboarding Inspektlabs, Universal Sompo General Insurance's operations relied on a manual, time-consuming process to handle these inspections. The team would collect photos and videos of vehicle damage, compile them, and then manually take a decision on each policy.
              </p>
              <p className={styles.contentParagraph}>
                The entire process could take 7-8 hours, and in some cases, even stretch over several days, leading to bottlenecks, repeated follow-ups, and general frustration. As Universal Sompo General Insurance scaled its operations, it became clear that this model was unstable.
              </p>
            </div>
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Key Main Points</h3>
              <p><Image src={'/img/star.svg'} alt='star' width={12} height={12} className={styles.starImg}/> Manual inspection coordination</p>
              <p><Image src={'/img/star.svg'} alt='star' width={12} height={12} className={styles.starImg}/> 7-8 hour processing times</p>
              <p><Image src={'/img/star.svg'} alt='star' width={12} height={12} className={styles.starImg}/> Repeated follow-ups required</p>
              <p><Image src={'/img/star.svg'} alt='star' width={12} height={12} className={styles.starImg}/> Scalability challenges</p>
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
              <p className={styles.contentParagraph}>
                Universal Sompo General Insurance onboarded Inspektlabs' AI-powered vehicle inspection solution to streamline and automate its underwriting process.
              </p>
              <p className={styles.contentParagraph}>
                With the new system in place, vehicle inspections became standardized, faster, and more transparent. The platform enabled Universal Sompo General Insurance to:
              </p>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletPoint}>
                  <div className={styles.bulletIcon}>✓</div>
                  <span>Automatically capture and organize inspection media in real-time</span>
                </div>
                <div className={styles.bulletPoint}>
                  <div className={styles.bulletIcon}>✓</div>
                  <span>Eliminate the back-and-forth coordination</span>
                </div>
                <div className={styles.bulletPoint}>
                  <div className={styles.bulletIcon}>✓</div>
                  <span>Standardize how vehicle condition data is presented and evaluated</span>
                </div>
              </div>
              <p className={styles.contentParagraph}>
                This not only reduced the time taken to complete each underwriting cycle but also gave Universal Sompo General Insurance's team better control and visibility across the workflow.
              </p>
            </div>
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Solution Benefits</h3>
              <p>• Real-time media capture</p>
              <p>• Automated coordination</p>
              <p>• Standardized evaluation</p>
              <p>• Enhanced visibility</p>
              <br />
              <button className={styles.ctaButton} onClick={() => (window.location.href = '/contact-us')}>View Demo</button>
            </div>
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
                <Image src='/img/Clients/Sompo CTO.png' alt="Sompo CTO" width={300} height={350} />
              </div>
              <div className={styles.quote}>
                {/* <div className={styles.quoteIcon}>"</div> */}
                Inspektlabs has assisted us in enhancing our inspection process at Universal Sompo General Insurance. Their automated inspection solution provides comprehensive coverage for both cars and motorbikes. With custom workflows designed to handle inspections from any source – be it customer self-inspections, vendor checks, or OEM reviews – their platform has streamlined our process, allowing us to manage inspections more efficiently.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Impact</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentText}>
              <p className={styles.contentParagraph}>
                Since its implementation, Universal Sompo General Insurance has been able to significantly reduce the time taken for underwriting-related inspections and approvals.
              </p>
              <p className={styles.contentParagraph}>
                What was once a fragmented, manual process has now become an efficient, end-to-end workflow that saves time for Universal Sompo General Insurance and improves overall user experience for customers seeking timely policy renewals.
              </p>
              <p className={styles.contentParagraph}>
                In addition to this, Universal Sompo General Insurance became the <span className={styles.highlightText}>1st insurer in India to automate motorbike inspections with AI</span>.
              </p>
            </div>
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Key Achievements</h3>
              <p>• First AI-powered motorbike inspections in India</p>
              <p>• Streamlined end-to-end workflow</p>
              <p>• Improved customer experience</p>
              <p>• Reduced operational overhead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricNumber}>
                90%
                <span className={styles.metricArrow}>↓</span>
              </div>
              <p className={styles.metricLabel}>Reduction in Turnaround Time</p>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricNumber}>
                80%
                <span className={styles.metricArrow}>↓</span>
              </div>
              <p className={styles.metricLabel}>Reduction in Fraud Cases</p>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricNumber}>100k+</div>
              <p className={styles.metricLabel}>Inspections processed</p>
            </div>
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
            <p className={styles.contentParagraph}>
              Universal Sompo General Insurance's move to digitize and streamline its underwriting operations is a strong example of how AI-powered solutions can deliver real-world efficiency in insurance workflows.
            </p>
            <p className={styles.contentParagraph}>
              By automating and standardizing a once-manual process, Universal Sompo General Insurance is now better positioned to serve its customers and scale its operations, all while saving time and reducing operational overheads.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy