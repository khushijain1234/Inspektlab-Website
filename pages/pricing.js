import Link from 'next/link'
import SEO from '../components/SEO'
import styles from '../styles/Pricing.module.css'
import language from '../languages/pricing.json'

export default function Pricing({locale}) {
    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/pricing"
                keywords={language["seo keywords"][locale]}
                page="pricing"
            />
        
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>

            {/* Main Body */}
            <main className={styles.main}>

                {/* Featured Section */}
                <section className={styles.featured}>
                    <h1>{language["Flexible pricing options to automate inspections"][locale]}</h1>
                </section>

                <section className={styles.pricingContainer}>
                    <div className={styles.pricing}>
                        <h2>{language["Trial"][locale]}</h2>
                        <p><span>{language["100 inspections"][locale]}</span></p>
                        <p><span>{language["One inspection could contain"][locale]}</span></p>
                        <span className={styles.cost}><sup>&#36;</sup> <strong>0</strong>/{language["month"][locale]}</span>
                        <Link href="/contact-us"><a className={styles.btnWhite}>{language["Start Your Free Trial"][locale]}</a></Link>
                    </div>
                    <div className={styles.pricing}>
                        <h2>Pro <span>{language["Recommended"][locale]}</span></h2>
                        <p><span>{language["Charge on a per inspection basis"][locale]}</span></p>
                        <p><span>{language["Volume based discounts"][locale]}</span></p>
                        <p><span>{language["One inspection could contain one video or multiple photos of the asset"][locale]}</span></p>
                        <p><span>{language["External API"][locale]}</span></p>
                        <Link href="/contact-us"><a className={styles.btnBlue}>{language["Contact Sales"][locale]}</a></Link>
                    </div>
                    <div className={styles.pricing}>
                        <h2>{language["Enterprise"][locale]}</h2>
                        <p><span>{language["Annual or quarterly license"][locale]} </span></p>
                        <p><span>{language["Dedicated account manager"][locale]}</span></p>
                        <p><span>{language["Custom integrations"][locale]}</span></p>
                        <p><span>{language["Personalized 1-1 team training"][locale]}</span></p>
                        <p><span>{language["External API or on-premise deployment"][locale]}</span></p>
                        <Link href="/contact-us"><a className={styles.btnBlue}>{language["Contact Sales"][locale]}</a></Link>
                    </div>
                </section>

            </main>
        </div>
    );
}