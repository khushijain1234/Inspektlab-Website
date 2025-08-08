import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/FraudDetection.module.css'
import language from '../languages/fraud-detection.json'

import { features } from '../const/fraud-detection'
import { questions } from '../const/faq'
import { useState } from 'react'

export default function FraudDetection({locale}) {

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
                url="https://inspektlabs.com/fraud-detection"
                keywords={language["seo keywords"][locale]}
                page="fraud-detection"
            />
            
            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <Image src="/img/fraud-detection.svg" alt="Fraud Detection" width={100} height={100} />
                    <h1 className={styles.featuredTitle}>{language["Vehicle Fraud Detection"][locale]}</h1>
                    <p className={styles.featuredText}>{language["We have developed several"][locale]}</p>
                </section>

                {/* Features Section */}
                <section className={styles.features}>
                    { features.map(feature => (
                        <div className={styles.feature} key={feature.title[locale]}>
                            <div><Image src={`/img/${feature.img}`} alt={feature.title[locale]} width={100} height={100} /></div>
                            { feature.tag ? <h2>{ feature.title[locale] } <span>{ feature.tag }</span></h2> : <h2>{ feature.title[locale] }</h2> }
                            <p>{ feature.text[locale] }</p>
                        </div>
                    )) }
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
                    <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
                    <div className={styles.questionContainer}>
                        <div className={styles.allQuestionContainer}>
                            {questions["Fraud Detection"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
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