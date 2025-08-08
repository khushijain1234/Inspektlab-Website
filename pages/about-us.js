import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/AboutUs.module.css'
import language from '../languages/about-us.json'

import { journeys, founders, advisors } from '../const/about-us'
import { partners, awards } from '../const/shared'

export default function AboutUs( {locale} ) {
    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/about-us"
                keywords={language["seo keywords"][locale]}
                page="about-us"
            />
            
            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <h2>{language["About Inspektlabs"][locale]}</h2>
                    <h1>{language["Who are we?"][locale]}</h1>
                    <p>{language["inspektlabs about text"][locale]}
                    <br/><br/>{language["inspektlabs founder text"][locale]}</p>
                </section>

                {/* Founders Section */}
                <section className={styles.foundersSection}>
                    <div className={styles.bgCover}>
                        <div className={styles.topCorner}>
                            <Image src='/img/top.svg' alt="" width={380} height={380} objectFit="contain" />
                        </div>
                        
                        <div className={styles.bottomCorner}>
                            <Image src='/img/bottom.svg' alt="" width={380} height={380} objectFit="contain" />
                        </div>
                    </div>
                    <div className={styles.foundersContainer}>
                        <h2 className={styles.foundersTitle}>{language["Meet the founders"][locale]}</h2>
                        <div className={styles.founders}>
                            { founders.map(founder => (
                                <div className={styles.founder} key={founder.name}>
                                    <div className={styles.founderImg}>
                                        <Image src={`/img/people/${founder.img}`} alt={founder.name} width={200} height={200} objectFit="cover" />
                                    </div>
                                    <div className={styles.founderInfo}>
                                        <h3>{ founder.name }</h3>
                                        <p>{ founder.role }</p>
                                        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Image className={styles.linkedin} src='/img/linkedin.jpg' alt={founder.name} width={32} height={32} objectFit="cover" />
                                        </a>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </section>

                {/* Advisors Section */}
                <section className={styles.advisorsSection}>
                    <h2 className={styles.advisorsTitle}>{language["Our Advisors"][locale]} ({new Date().getFullYear()})</h2>
                    <div className={styles.advisors}>
                        { advisors.map(advisor => (
                            <div className={styles.advisor} key={advisor.name}>
                                <div className={styles.advisorImg}>
                                    <Image src={`/img/people/${advisor.img}`} alt={advisor.name} width={200} height={200} objectFit="cover" />
                                </div>
                                <div className={styles.advisorInfo}>
                                    <h3>{ advisor.name }</h3>
                                    <p>{ advisor.role }</p>
                                    <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Image className={styles.linkedin} src='/img/linkedin.jpg' alt={advisor.name} width={32} height={32} objectFit="cover" />
                                    </a>
                                </div>
                            </div>
                        )) }
                    </div>
                </section>

                {/* Journey Section */}
                <section className={styles.journeySection}>
                    <h2 className={styles.journeyTitle}>{language["Our Journey"][locale]}</h2>
                    
                    <div className={styles.journeyContainer}>
                        { journeys.map(journey => (
                            <div className={styles.journey} key={journey.name}>
                                <div>
                                    <p>{ journey.date }</p>
                                    <h3>{ journey.name }</h3>
                                    { journey.url !== "" && <a href={journey.url} target="_blank" rel="noopener noreferrer">{language["Read More"][locale]} <i className="fas fa-chevron-right"></i></a> }
                                </div>
                            </div>
                        )) }
                    </div>
                </section>


                {/* Hiring Section */}
                <section className={styles.hiring}>
                    <h2>{language["We are hiring!"][locale]}</h2>
                    <Link href="/contact-us"><a>{language["Join Our Team"][locale]}</a></Link>
                </section>

                {/* Partners Section */}
                <section className={styles.partners}>
                    <h2 className={styles.partnersTitle}>{language["Our Partners"][locale]}</h2>
                    { partners.map(category => (
                        <Fragment key={category.name[locale]}>
                            <h3 className={styles.partnerCategory}>{category.name[locale]}</h3>
                            <div className={styles.partnerLogoContainer}>
                                { category.logo.map(img => (
                                <div className={styles.partnerLogo} key={img}>
                                    <Image key={img} src={`/img/${img}`} alt={img} width={170} height={55} objectFit="contain" />
                                </div>
                                )) }
                            </div>
                        </Fragment>
                    )) }
                    <Fragment>
                    <h3 className={styles.partnerCategory}>{language["Awards"][locale]}</h3>
                    <div className={styles.partnerLogoContainer}>
                    { awards.map(award => (
                        <div className={styles.awardsContainer} key={award.name}>
                        <div className={styles.partnerLogo}>
                            <Image src={`/img/news/${award.img}`} alt={award.name} width={200} height={70} objectFit="contain" />
                        </div>
                        <a href={award.url} target="_blank" rel="noopener noreferrer">{award.name}</a>
                        </div>
                    )) }
                    </div>
                </Fragment>
                </section>

            </main>
        </div>
    )
}