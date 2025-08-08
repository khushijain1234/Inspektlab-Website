import { useState, useEffect } from 'react'
import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/PhotoVideoCapture.module.css'
import language from '../languages/photo-video-capture.json'
import { questions } from '../const/faq'


export default function PhotoVideoCapture({locale}) {

    const [mobile, setMobile] = useState(false)

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

    useEffect(() =>  {
        setMobile(window.innerWidth < 1025)
        window.addEventListener('resize', () => setMobile(window.innerWidth < 1025))
        return () => window.removeEventListener('resize', () => setMobile(window.innerWidth < 1025))
    }, [])

    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/photo-video-capture"
                keywords={language["seo keywords"][locale]}
                page="photo-video-capture"
            />

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <Image src="/img/photo-video-capture.svg" alt="Photo & Video Capture" width={100} height={100} />
                    <h1 className={styles.featuredTitle}>{language["Photo & Video Capture App for Vehicle Inspection"][locale]}</h1>
                    <p className={styles.featuredText}>{language["Browser and native apps for guided photo/video capture"][locale]}</p>
                    <a href="#main" className={styles.actionBtn}>{language["Here is how it works"][locale]} &nbsp;&nbsp;<i className="fas fa-chevron-down"></i></a>
                </section>

                {/* Features Section */}
                <section id="main" className={styles.features}>
                    <div className={styles.mainFeature}>
                        <Image src="/img/browser-based.svg" alt="Browser Based" width={300} height={300} />
                        <h2 className={styles.featureTitle}>{language["Inspektlabs offers browser"][locale]}</h2>
                        <p className={styles.featureText}>{language["The process does not require any app"][locale]}<br/>{language["Here is how it works"][locale]}:</p>
                    </div>

                    <div className={styles.stepsContainer}>
                        
                        {/* Step 1 */}
                        <div className={styles.stepImage}>
                            <Image src="/img/get-secure-link.png" alt="Claim Assessment" layout="fill" objectFit="contain" />
                        </div>
                        <div className={styles.stepText}>
                            <span>01</span>
                            <h3>{language["Get Secure Link to Claim Assesment"][locale]}</h3>
                            <p>{language["SMS"][locale]}</p>
                        </div>

                        {/* Step 2 */}
                        { mobile && <div className={styles.stepImage}>
                            <Image src="/img/capture-photo-video.png" alt="Capture Photo Video" layout="fill" objectFit="contain" />
                        </div> }
                        <div className={styles.stepText}>
                            <span>02</span>
                            <h3>{language["Capture Photos"][locale]}</h3>
                            <p>{language["On opening the link"][locale]}</p>
                        </div>
                        { !mobile && <div className={styles.stepImage}>
                            <Image src="/img/capture-photo-video.png" alt="Capture Photo Video" layout="fill" objectFit="contain" />
                        </div> }
                        
                        {/* Step 3 */}
                        <div className={styles.stepImage}>
                            <Image src="/img/footage-analyzed-through-ai.png" alt="Footage Analyzed through AI" layout="fill" objectFit="contain" />
                        </div>
                        <div className={styles.stepText}>
                            <span>03</span>
                            <h3>{language["Footage is analyzed through AI Inspection"][locale]}</h3>
                            <p>{language["The footage is then analyzed"][locale]}</p>
                        </div>

                    </div>
                </section>
                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
                    <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
                    <div className={styles.questionContainer}>
                        <div className={styles.allQuestionContainer}>
                            {questions["Photo and Video Capture"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
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