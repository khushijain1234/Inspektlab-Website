import { useEffect, useRef } from "react";
import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/AboutUs.module.css'
import language from '../languages/about-us.json'

import {
    stats,
    purpose,
    founders,
    broaderTeam,
    backers,
    journeys,
    events,
} from '../const/about-us'
import ContactUsCTA from '../components/ContactUsCTA'


export default function AboutUs({ locale }) {


const timelineRef = useRef(null);
const carRef = useRef(null);

useEffect(() => {
    const moveCar = () => {
      if (!timelineRef.current || !carRef.current) return;
  
      const rect = timelineRef.current.getBoundingClientRect();
  
      const timelineHeight = timelineRef.current.offsetHeight;
  
      // How much of timeline has entered viewport
      let progress =
        (window.innerHeight - rect.top) /
        (timelineHeight + window.innerHeight);
  
      progress = Math.max(0, Math.min(progress, 1));
  
      const carY = progress * (timelineHeight - 70);
  
      carRef.current.style.top = `${carY}px`;
    };
  
    moveCar();
  
    window.addEventListener("scroll", moveCar);
    window.addEventListener("resize", moveCar);
  
    return () => {
      window.removeEventListener("scroll", moveCar);
      window.removeEventListener("resize", moveCar);
    };
  }, []);
  
    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/about-us"
                page="about-us"
            />

            <main className={styles.main}>

                {/* Hero / Story Section */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <h1>The Inspektlabs Story : Building an AI Vehicle Inspection Platform</h1>
                        <p className={styles.heroText}>
                        Inspektlabs, founded in 2019, is at the forefront of computer vision technology, building an AI-powered vehicle inspection platform trained to detect vehicle conditions just by analysing images and videos.
                        </p>
                        <p className={styles.heroText}>
                        What once required manual checks and subjective judgment is now automated, scalable, and consistent, helping enterprises make faster, smarter decisions.
                        </p>

                        <div className={styles.statsRow}>
                            {stats.map(stat => (
                                <div className={styles.stat} key={stat.label}>
                                    <span className={styles.statValue}>{stat.value}<span className={styles.statHighlight}>{stat.highlighted}</span></span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <Image src='/img/backgroung.png' alt="about us hero" layout='fill' objectFit="contain"
                    // objectPosition="center"
                    fetchpriority="high"/>
                    </div>
                </section>

                {/* Purpose Section */}
                <section className={styles.purposeSection}>
                    <span className={styles.eyebrow}>What drives us</span>
                    <h2 className={styles.sectionTitle}>Purpose at our core</h2>

                    <div className={styles.purposeCards}>
                        {purpose.map(item => (
                            <div className={styles.purposeCard} key={item.key}>
                                <div className={styles.purposeIcon}>
                                    <Image src={`/img/${item.img}`} alt={item.key} width={150} height={150} />
                                </div>
                                <span className={styles.purposeLabel}>{item.label}</span>
                                <p style={{fontSize:'20px'}}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className={styles.teamSection}>
                    <span className={styles.eyebrow}>The people</span>
                    <h2 className={styles.sectionTitle}>Meet the team</h2>
                    <p className={styles.sectionSubtext}>
                        Engineers, operators, and builders who believe intelligent automation should work as hard as the people it supports.
                    </p>
                    <p className={styles.sectionSubtext}>
                    Our team combines deep expertise in AI, computer vision, and enterprise SaaS, focused on solving real-world vehicle inspection challenges at scale. Inspektlabs serves insurance, fleet, and repair management platforms across Europe, the Middle East, LATAM, and the US.
                    </p>

                    <div className={styles.founders}>
                        {founders.map(founder => (
                            <div className={styles.founderCard} key={founder.name}>
                                <div className={styles.avatarImg}>
                                <Image src={`/img/people/${founder.img}`} alt={founder.name} width={120} height={120} objectFit="cover" />
                                </div>
                                <h3>{founder.name}</h3>
                                <p>{founder.role}</p>
                                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinPill}>
                                    <img src='/img/people/linked-in.jpg' alt="linked in" width={20} height={20} style={{background:'none'}} /><span>LinkedIn</span>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Broader team */}
                    <span className={styles.eyebrow}>The broader team</span>
                    <div className={styles.broaderTeam}>
                        {broaderTeam.map(person => (
                            <div className={styles.broaderPerson} key={person.name}>
                                <div className={styles.avatarBroaderImg}>
                                    <Image src={`/img/people/${person.img}`} alt={person.name} width={96} height={96} objectFit="cover" />
                                </div>
                                <h4>{person.name}</h4>
                                {person.role && <p>{person.role}</p>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Backers Section */}
                <section className={styles.backersSection}>
                    <span className={styles.eyebrow}>Our backers</span>
                    <h2 className={styles.sectionTitle}>Backed by the best</h2>
                    <p className={styles.sectionSubtext} style={{marginTop:'30px'}}>
                    We’re supported by world-class investors who share our conviction that intelligent inspection automation is a multi-decade category. Their backing enables us to continuously push the boundaries of AI-powered vehicle inspection and scale globally.
                    </p>

                    <div className={styles.backersCard}>
                        {backers.map(backer => (
                            <div className={styles.backerLogo} key={backer.name}>
                                <Image src={`/img/${backer.img}`} alt={backer.name} width={140} height={40} objectFit="contain" />
                                <span>{backer.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Journey Section */}
                <section className={styles.journeySection}>
                    <span className={styles.eyebrow}>Our Journey in AI Vehicle Inspection</span>
                    <h2 className={styles.sectionTitle}>Six years on the road</h2>
                    <p className={styles.sectionSubtext}>
                    From a first prototype to a global inspection infrastructure trusted by enterprises across 25+ countries. Our journey has been driven by innovation, iteration, and impact.
                    </p>

                    <div className={styles.timeline} ref={timelineRef}>
                        <img
                            ref={carRef}
                            src="/img/timeline car.png"
                            alt="Car"
                            className={styles.timelineCar}
                        />

                        <div className={styles.timelineLine} />

                        {journeys.map((journey, index) => (
                            <div
                            key={journey.name}
                            className={`${styles.timelineItem} ${
                                index % 2 === 0 ? styles.timelineLeft : styles.timelineRight
                            }`}
                            >
                            <div className={styles.timelineContent}>
                            <p className={styles.timelineDate}>{journey.date}</p>
                                                            <h3>{journey.name}</h3>
                                                            <p className={styles.timelineText}>{journey.text}</p>
                                                            {journey.url !== "" && (
                                                                <a href={journey.url} target="_blank" rel="noopener noreferrer">
                                                                    {language["Read More"] ? language["Read More"][locale] : "Read More"} <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            )}
                            </div>
                            <div className={styles.timelineDot} />
                            </div>
                        ))}
                        </div>
                </section>

                {/* Events & Conferences Section */}
                <section className={styles.eventsSection}>
                    <span className={styles.eyebrow}>Where we show up</span>
                    <h2 className={styles.sectionTitle}>Events &amp; conferences</h2>
                    <p className={styles.sectionSubtext} style={{textAlign: 'left', margin: 0}}>We actively participate in global industry events, sharing insights, showcasing innovation, and collaborating with leaders shaping the future of insurance and mobility.</p>

                    <div className={styles.eventsGrid}>
                        {events.map(event => (
                            <div className={styles.eventCard} key={event.name}>
                                <div className={styles.eventBadge}>{event.code}</div>
                                <h4>{event.name}</h4>
                                <p>{event.date}</p>
                                <p className={styles.eventLocation}>{event.location}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hiring Section */}
                <section className={styles.hiring}>
                    <span className={styles.hiringTag}>Careers</span>
                    <h2>We&apos;re Hiring</h2>
                    <p>Join a team building inspection infrastructure that some of the world’s largest enterprises depend on. Be part of a fast-growing company at the intersection of AI, automation, and mobility.</p>
                    <ContactUsCTA as="div" cluster="about-us" location="inline" className={styles.hiringButton}>
                        View Open Roles →
                    </ContactUsCTA>
                </section>

            </main>
        </div>
    )
}