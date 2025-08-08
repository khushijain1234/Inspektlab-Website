import Image from 'next/image'
import Link from 'next/link'
import SEO from '../components/SEO'
import styles from '../styles/Workflow.module.css'

import { secondaryFeatures } from '../const/workflow'
import language from '../languages/workflow.json'
import { questions } from '../const/faq'
import { useState } from 'react'

export default function Workflow({locale}) {

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
                url="https://inspektlabs.com/workflow"
                keywords={language["seo keywords"][locale]}
                page="workflow"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <Image src="/img/technology-workflow.svg" alt="Workflow" width={150} height={150} />
                    <h1 className={styles.featuredTitle}>{language["Our Technology Workflow"][locale]}</h1>
                </section>

                {/* Features Section */}
                <section className={styles.features}>
                    
                    <h2>{language["We provide both external APIs"][locale]}</h2>
                    <p>{language["Our product is easily integrable"][locale]}</p>
                    <div><Image src="/img/360-video.svg" alt="360 video capture" width={250} height={100} /></div>
                    <span>{language["360 Video Captured"][locale]}</span>
                    <div className={styles.downArrow}></div>

                    <div><Image src="/img/inspektlabs-api.png" alt="Inspektlabs API" width={250} height={180} /></div>
                    <span>{language["API Integrated with client workflow"][locale]}</span>
                    <div className={styles.downArrow}></div>


                    <div className={styles.secondaryFeatures}>
                        { secondaryFeatures.map(f => (
                            <div key={f.name[locale]}>
                                <div><Image src={`/img/${f.img}`} alt={f.name[locale]} width={80} height={80} /></div>
                                <p>{f.name[locale]}</p>
                            </div>
                        )) }
                    </div>

                    <div className={styles.featuresContainer}>
                        <div className={styles.feature}>
                            <div><Image src="/img/insurance-workflow.svg" alt="Insurance Workflow" width={100} height={100} /></div>
                            <h3>{language["Insurance Workflow"][locale]}</h3>
                            <p>{language["Detect fraudulent inspections"][locale]}...</p>
                            <Link href="/insurance">{language["Go to Insurance Page"][locale]}</Link>
                        </div>
                        <div className={styles.feature}>
                            <div><Image src="/img/api-documentation.svg" alt="API & Documentation" width={100} height={100} /></div>
                            <h3>{language["API & Documentation"][locale]}</h3>
                            <p>{language["Detect fraudulent inspections"][locale]}...</p>
                            <Link href="/contact-us">{language["Contact Us"][locale]}</Link>
                        </div>
                    </div>

                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
                <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
                <div className={styles.questionContainer}>
                    <div className={styles.allQuestionContainer}>
                        {questions["Workflow"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
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