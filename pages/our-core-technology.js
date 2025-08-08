import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/OurCoreTechnology.module.css'

import { questions } from '../const/faq'
import { technology, privacy, infrastructure } from '../const/our-core-technology'
import language from '../languages/our-core-technology.json'
import { useState } from 'react'

export default function OurCoreTechnology({locale}) {

    const QuestionSection = ({que, ans}) => {
        const [isOpen, setIsOpen] = useState(false)
        
        return(
            <div className={styles.questionModal} onClick={()=>setIsOpen(!isOpen)}>
                <div className={styles.question}>
                    <p>{que}</p>
                    <Image src="/img/downArrow.png" alt="FAQ" width={12} height={6} objectFit='contain'/>
                </div>
                <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
                    {ans.map((item, index)=><p key={index}>{item}</p>)}
                </div>
            </div>
        )
      }

    return (
        <div className={styles.container}>
            
            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/our-core-technology/"
                keywords={language["seo keywords"][locale]}
                page="our-core-technology"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <Image src="/img/core-technology.svg" alt="Our Core Technology" width={100} height={100} />
                    <h1 className={styles.featuredTitle}>{language["Our Core Technology"][locale]}</h1>
                </section>

                {/* Features Section */}
                <section className={styles.features}>
                    
                    <div className={styles.secondaryFeaturesContainer}>
                        { technology.map(t => (
                            <div className={styles.secondaryFeature} key={t.title[locale]}>
                                <div><Image src={`/img/${t.img}`} alt={t.title[locale]} width={150} height={150} /></div>
                                <div>
                                    <h3>{t.title[locale]}</h3>
                                    <p>{t.text[locale]}</p>
                                </div>
                            </div>
                        )) }
                    </div>

                </section>
                

                {/* Privacy Section */}
                <section className={styles.privacySection}>
                    <h2>{language["Privacy"][locale]}</h2>
                    <p>{language["We mask all personal information"][locale]}</p>

                    <div className={styles.privacy}>
                        { privacy.map(p => (
                            <div key={p.name[locale]}>
                                <div><Image src={`/img/${p.img}`} alt={p.name[locale]} width={100} height={100} /></div>
                                <p>{p.name[locale]}</p>
                            </div>
                        )) }
                    </div>
                </section>

                {/* Privacy Section */}
                <section className={styles.infrastructureSection}>
                    <h2>{language["Resilent Infrastructure"][locale]}</h2>
                    <p>{language["Our infrastructure runs on data centers"][locale]}</p>
                    <div className={styles.infrastructureImg}>
                        <Image src='/img/aws.png' alt="aws" width={100} height={60} />
                    </div>
                    <div className={styles.infrastructureImg}>
                        <Image src='/img/microsoft.png' alt="microsoft" width={120} height={95} />
                    </div>
                    <span>{language["Our Secure hosting partner"][locale]}</span>

                    <div className={styles.infrastructure}>
                        { infrastructure.map(i => (
                            <div key={i.name[locale]}>
                                <div><Image src={`/img/${i.img}`} alt={i.name[locale]} width={100} height={100} /></div>
                                <p>{i.name[locale]}</p>
                            </div>
                        )) }
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
                    <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
                    <div className={styles.questionContainer}>
                        <div className={styles.allQuestionContainer}>
                            {questions["Our Core Technology"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
                        </div>
                    </div>
                    <div
                        className={styles.btnBlue}
                        style={{width: "100px"}}
                        onClick={() => (window.location.href = '/faq')}
                    >
                        {language['Read More'][locale]}
                    </div>
                </section>
            </main>
        </div>
    )
}