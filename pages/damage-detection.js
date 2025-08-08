import Image from 'next/image';
import SEO from '../components/SEO';
import styles from '../styles/DamageDetection.module.css';
import language from '../languages/damage-detection.json';

import { features } from '../const/damage-detection';
import { questions } from '../const/faq';
import { useState } from 'react';

export default function FraudDetection({ locale }) {

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
        title={language['seo title'][locale]}
        description={language['seo desc'][locale]}
        image='https://inspektlabs.com/img/car.png'
        url='https://inspektlabs.com/damage-detection/'
        keywords={language['seo keywords'][locale]}
        page='damage-detection'
      />

      {/* Main Body */}
      <main className={styles.main}>
        {/* Featured Section */}
        <section className={styles.featured}>
          <div className={styles.featuredContent}>
            <Image
              src='/img/damage-detection.svg'
              alt='Damage Detection'
              width={100}
              height={100}
            />
            <h1 className={styles.featuredTitle}>
              {language['Vehicle Damage Inspection'][locale]}
            </h1>
            <p className={styles.featuredText}>
              {language['patents text'][locale]}
              <br />
              <br />
              {language['accuracy text'][locale]}
            </p>
          </div>

          <div className={styles.featuredVideo}>
            <video
              autoPlay
              muted
              loop
              preload='auto'
              playsInline
              className={styles.myVideo}
            >
              <source src='/img/damage.webm' type='video/webm' />
              <source src='/img/damage.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          {/* <div className={styles.featureVideo}>
                        <video type="video/mp4" src="/img/demo.mp4" autoPlay muted loop></video>
                    </div> */}

          <div className={styles.subFeature}>
            <h2 className={styles.subFeatureTitle}>
              {language['damage inspection'][locale]}
            </h2>
            <p className={styles.subFeatureText}>
              {language['undercarriage'][locale]}
            </p>
          </div>

          <div className={styles.featuresContainer}>
            {features.map((feature) => (
              <div className={styles.feature} key={feature.name[locale]}>
                <div className={styles.featureImg}>
                  <Image
                    src={`/img/${feature.img}`}
                    alt={feature.name[locale]}
                    width={60}
                    height={60}
                  />
                </div>
                <h3>{feature.name[locale]}</h3>
                {feature.items[locale].map((item) => (
                  <p key={item}>
                    <i className='fas fa-check'></i>&nbsp;&nbsp; {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Features */}
        <section className={styles.secondaryFeatures}>
          <div>
            <div>
              <Image
                src={'/img/severity-score.svg'}
                alt='Severity Score'
                width={100}
                height={100}
              />
            </div>
            <p>{language['Severity score'][locale]}</p>
          </div>
          <div>
            <div>
              <Image
                src={'/img/predict-damage.svg'}
                alt='Predict Damage'
                width={100}
                height={100}
              />
            </div>
            <p>{language['probability'][locale]}</p>
          </div>
          <div>
            <div>
              <Image
                src={'/img/photo-video-capture.svg'}
                alt=''
                width={100}
                height={100}
              />
            </div>
            <p>{language['smartphone text'][locale]}</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
          <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
          <div className={styles.questionContainer}>
            <div className={styles.allQuestionContainer}>
                {questions["Damage Detection"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
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
        {/* Misc Section */}
        {/* <section className={styles.miscSection}>
                    <h4>Flipkart Plus</h4>
                    <p>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!</p>
                    <br/>
                    <p>What&apos;s more, you can even use the Flipkart supercoins for a number of exciting services, like:</p>
                    <p>An annual Zomato Gold membership</p>
                    <p>An annual Hotstar Premium membership</p>
                    <p>6 months Gaana plus subscription</p>
                    <p>Rupees 550 instant discount on flights on ixigo</p>
                    <p>Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.</p>
                    <br/>
                    <h4>No Cost EMI</h4>
                    <p>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>
                    <br/>
                    <h4>EMI on Debit Cards</h4>
                    <p>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>
                    <br/>
                    <h4>Mobile Exchange Offers</h4>
                    <p>Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</p>
                    <br/>
                    <h4>No Cost EMI</h4>
                    <p>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>
                    <br/>
                    <h4>EMI on Debit Cards</h4>
                    <p>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>
                    <br/>
                    <h4>Mobile Exchange Offers</h4>
                    <p>Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</p>
                </section> */}
      </main>
    </div>
  );
}
