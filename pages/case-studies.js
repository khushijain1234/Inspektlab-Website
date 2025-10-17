import React from 'react';
import styles from "../styles/CaseStudies.module.css";
import Link from "next/link";
import Image from 'next/image';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      id: 1,
      link: 'caseStudy1',
      company: 'Universal Sompo Group',
      logo: 'clients/Univeral-Sompo-Logo.png',
      title: "Optimizing Sompo General's Underwriting Process",
      description: 'Optimizing its underwriting workflow and eliminate delays in the inspection approval process by leveraging the power of AI-powered inspections across all vehicle types.',
      metrics: [
        { value: '90%', label: 'Reduction in Turnaround Time' },
        { value: '80%', label: 'Reduction in Fraud Cases' }
      ]
    },
    {
      id: 2,
      link: 'caseStudy2',
      company: 'HolidayCars',
      logo: 'clients/holiday-cars-logo.jpeg',
      title: 'Holiday Cars partners with Inspektlabs to secure Customers with the power of AI',
      description: 'Holiday Cars, one of the most trusted Car Rental Aggregators, has partnered with Inspektlabs to empower customers with a solution to track and report pre-existing damage on vehicles they’re renting using the power of AI and computer vision.',
      metrics: [
        { value: '95%', label: 'Reduction in Turnaround Time' },
        { value: '30%', label: 'Lower Customer Complaints' }
      ]
    },
    {
      id: 3,
      link: 'caseStudy3',
      company: 'AutoParts Group (APG)',
      logo: 'clients/APG-logo.png',
      title: 'How AutoParts Group automates vehicle inspections using Inspektlabs AI',
      description: 'AutoParts Group, Australia’s leading supplier of automotive collision parts, partnered with Inspektlabs to help automate their vehicle inspection process using Artificial Intelligence and computer vision, resulting in a reduction of inspection time from days to a few minutes.',
      metrics: [
        { value: '20%', label: 'Increase in successful bids' },
        { value: '80%', label: 'Reduction in manual efforts' }
      ]
    },
  ];

  const statsData = [
    { number: '10M+', label: 'Inspections conducted' },
    { number: '30+', label: 'Countries served' },
    { number: '$1B+', label: 'Saved in Inspection cost' }
  ];

  return (
    <div className={styles.caseStudiesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Success stories, delivered by <br />Inspektlabs</h1>
          <p>Real-life success stories of how businesses across the automotive ecosystem transformed their vehicle inspection process with Inspektlabs’ AI-powered solutions.</p>
        </div>
      </section>
  
      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
  
      {/* Case Studies Section */}
      <section className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Case Studies</span>
          <h2 className={styles.sectionTitle}>How AI-driven vehicle inspections transform business operations</h2>
          <p className={styles.sectionSubtitle}>Learn how industry leaders transformed their operations and achieved measurable results with our platform</p>
        </div>
        
        <div className={styles.caseStudiesGrid}>
          {caseStudiesData.map((study) => (
            <Link key={study.id} href={`/case-study/${study.link}`}>
            <a className={styles.caseStudyCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage}>
                  <Image src={`/img/${study.logo}`} alt="Company Logo" layout='fill' objectFit='contain' />
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardCompany}>{study.company}</div>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <p className={styles.cardDescription}>{study.description}</p>
                <div className={styles.cardMetrics}>
                  {study.metrics.map((metric, index) => (
                    <div key={index} className={styles.metric}>
                      <span className={styles.metricValue}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
            </Link>
          ))}
        </div>
      </section>
  
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Join hundreds of leading financial institutions achieving remarkable results with our intelligent sales platform</p>
          <div className={styles.ctaButton} onClick={() => (window.location.href = '/contact-us')}>Get Started Today</div>
        </div>
      </section>
    </div>
  );
  
};

export default CaseStudies;