import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/Insurance.module.css'

import { features } from '../const/insurance'
import language from '../languages/insurance.json'

export default function Insurance({locale}) {
    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/"
                keywords={language["seo keywords"][locale]}
                page="insurance"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <Image src="/img/insurance.svg" alt="Insurance" width={150} height={150} />
                    <h1 className={styles.featuredTitle}>{language["Car Inspection for Insurance"][locale]}</h1>
                    <p className={styles.featuredText}>{language["Motor insurers can use Inspektlabs"][locale]}</p>
                </section>

                {/* Featured Video Section */}
                {/* <section className={styles.featureVideo}>
                    <video type="video/mp4" src="/img/demo.mp4" autoPlay muted loop></video>
                </section> */}

                {/* Features Section */}
                <section className={styles.features}>
                    <h2>{language["Inspektlabs automates inspection"][locale]}</h2>

                    <div className={styles.feature}>
                        { features.map(f => (
                            <div key={f.name[locale]}>
                                <div><Image src={`/img/${f.img}`} alt={f.name[locale]} width={80} height={80} /></div>
                                <p>{f.name[locale]}</p>
                            </div>
                        )) }
                    </div>

                    <p>{language["We have experience in integrating"][locale]}</p>
                </section>

                {/* Workflow Section */}
                <section className={styles.flow}>
                    <div><Image src="/img/fnol-workflow.svg" alt="FNOL Workflow" layout="fill" objectFit="cover" /></div>
                    <div><Image src="/img/claim-estimation-workflow.svg" alt="Claim Estimation Workflow" layout="fill" objectFit="cover" /></div>
                </section>

                {/* Case Studies */}
                {/* <section className={styles.caseSection}>
                    <h2 className={styles.caseSectionTitle}>Case Studies</h2>
                    
                    <div className={styles.caseContainer}>
                        <div className={styles.case}>
                            <h3>Case Study 1</h3>
                            <p>Capture a 360° video or 8-10 photos of a vehicle on a smartphone</p>
                            <Link href="/" target="_blank" rel="noreferrer"><a className={styles.caseAction}>Read More</a></Link>
                        </div>
                        <div className={styles.case}>
                            <h3>Case Study 2</h3>
                            <p>Capture a 360° video or 8-10 photos of a vehicle on a smartphone</p>
                            <Link href="/" target="_blank" rel="noreferrer"><a className={styles.caseAction}>Read More</a></Link>
                        </div>
                    </div>
                </section> */}
                
            </main>
        </div>
    )
}