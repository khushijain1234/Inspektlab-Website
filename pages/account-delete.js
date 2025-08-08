import SEO from '../components/SEO'
import styles from '../styles/PrivacyPolicy.module.css'
import language from '../languages/account-delete.json'

export default function accountDelete({locale}) {
    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/privacy-policy/"
                keywords={language["seo keywords"][locale]}
                page="account-delete"
            />

            <main className={styles.main}>

                <section className={styles.featured}>
                    <h1>{language["Delete Account"][locale]}</h1>
                </section>

                <section className={styles.details}>

                    <p>{language["delete account text"][locale]}<strong>support@inspektlabs.com</strong>.</p>                    

                </section>

            </main>
        </div>
    )
}
