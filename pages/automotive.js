import Image from 'next/image'
import Link from 'next/link'
import SEO from '../components/SEO'
import styles from '../styles/Automotive.module.css'
import language from '../languages/automotive.json'

import { features } from '../const/automotive'

export default function Automotive({locale}) {
    return (
        <div className={styles.container}>
        
            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/automotive"
                keywords={language["seo keywords"][locale]}
                page="automotive"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <Image src="/img/automotive.svg" alt="Automotive" width={100} height={100} />
                    <h1 className={styles.featuredTitle}>{language["Digital Vehicle Inspections with AI"][locale]}</h1>
                    <p className={styles.featuredText}>{language["Our vehicle damage assessment"][locale]}</p>
                </section>

                {/* Features Section */}
                <section className={styles.features}>
                    
                    <h2 className={styles.featuresTitle}>{language["We focus on 6 major automotive aftermarket use-cases"][locale]}</h2>

                    <div className={styles.featuresContainer}>
                        { features.map(feature => (
                            <div className={styles.feature} key={feature.title[locale]}>
                                <div><Image src={`/img/${feature.img}`} alt={feature.title[locale]} width={100} height={100} /></div>
                                <h3>{feature.title[locale]}</h3>
                                <p>{ feature.text[locale] }</p>
                            </div>
                        )) }
                    </div>

                    <h2 className={styles.featuresTitle}>{language["systems"][locale]}</h2>
                    <p className={styles.featuresText}>{language["Both types of inspection systems are linked to our damage detection APIs"][locale]}</p>

                    <div className={styles.secondaryFeaturesContainer}>
                        <div className={styles.secondaryFeature}>
                            <div><Image src={'/img/smartphone-based.svg'} alt="Smartphone Based" width={100} height={100} /></div>
                            <div>
                                <h3>{language["Smartphone Based"][locale]}</h3>
                                <p>{language["Capture a 360° video"][locale]}</p>
                            </div>
                        </div>
                        <div className={styles.secondaryFeature}>
                            <div><Image src={'/img/fixed-installation.svg'} alt="Fixed Installation" width={100} height={100} /></div>
                            <div>
                                <h3>{language["Fixed Installation"][locale]}</h3>
                                <p>{language["Capture videos/photos of the vehicle using fixed camera"][locale]}</p>
                            </div>
                        </div>
                    </div>
                </section>
                

                {/* Case Studies */}
                <section className={styles.caseSection}>
                    <h2 className={styles.caseSectionTitle}>{language["Case Studies On AI Review"][locale]}</h2>
                    
                    <div className={styles.caseContainer}>
                        <div className={styles.case}>
                            <h3>{language["Case Study 1"][locale]}</h3>
                            <p>{language["Capture a 360° video"][locale]}</p>
                            <Link href="/" target="_blank" rel="noreferrer"><a className={styles.caseAction}>{language["Read More"][locale]}</a></Link>
                        </div>
                        <div className={styles.case}>
                            <h3>{language["Case Study 2"][locale]}</h3>
                            <p><p>{language["Capture a 360° video"][locale]}</p></p>
                            <Link href="/" target="_blank" rel="noreferrer"><a className={styles.caseAction}>{language["Read More"][locale]}</a></Link>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}