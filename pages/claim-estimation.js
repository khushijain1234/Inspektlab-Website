import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/ClaimEstimation.module.css'
import language from '../languages/claim-estimation.json'

import { questions } from '../const/faq'
import { estimationList, estimationList2, reviewList } from '../const/claim-estimation'
import { useState } from 'react'

export default function ClaimEstimation({locale}) {

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
                url="https://inspektlabs.com/claim-estimation"
                keywords={language["seo keywords"][locale]}
                page="claim-estimation"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <Image src="/img/claim-estimation.svg" alt="Claim Estimation" width={100} height={100} />
                    <h1 className={styles.featuredTitle}>{language["Claim Assessment using Automation"][locale]}</h1>
                    <p className={styles.featuredText}>{language["We detect damages"][locale]}</p>
                </section>

                {/* Features Section */}
                <section className={styles.features}>

                    <div className={styles.feature}>
                        <Image src="/img/claim-estimation-2.svg" alt="Claim Estimation" width={60} height={60} />
                        <h2>{language["Claim Assessment"][locale]}</h2>
                        <p className={styles.featureText}>{language["We utilise 15 modules to estimate claim value of vehicles"][locale]}</p>
                        <div className={styles.checkListContainer}>
                            <div className={styles.checkList}>
                                { estimationList[locale].map((item, index) => (
                                    <p key={`1-${index}`}><i className="fas fa-check"></i>&nbsp;&nbsp; { item }</p>
                                )) }
                            </div>
                            <div className={styles.checkList}>
                                { estimationList2[locale].map((item, index) => (
                                    <p key={`2-${index}`}><i className="fas fa-check"></i>&nbsp;&nbsp; { item }</p>
                                )) }
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.feature}>
                        <Image src="/img/claim-review.svg" alt="Claim Review" width={60} height={60} />
                        <h2>{language["AI Claim Review"][locale]}</h2>
                        <p className={styles.featureText}>{language["Under auto insurance claim review"][locale]}</p>
                        <div className={styles.checkListContainer}>
                            <div className={styles.checkList}>
                                { reviewList[locale].map((item, index) => (
                                    <p key={`2-${index}`}><i className="fas fa-check"></i>&nbsp;&nbsp; { item }</p>
                                )) }
                            </div>
                        </div>
                    </div>

                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
                    <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
                    <div className={styles.questionContainer}>
                        <div className={styles.allQuestionContainer}>
                            {questions["Claim Assessment"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
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
    );
}