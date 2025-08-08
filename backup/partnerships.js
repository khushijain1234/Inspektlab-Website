import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Partnerships.module.css'


export default function Partnerships() {
    return (
        <div className={styles.container}>
            <Head>
                {/* Primary Meta Tags */}
                <title>Partnerships | Inspektlabs</title>
                <meta name="title" content="Partnerships | Inspektlabs" />
                <meta name="description" content="Inspektlabs uses artificial intelligence for automation of inspections of any physical asset using photos and videos. The company’s current focus is on automating vehicle inspections for automotive and insurance players." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://inspektlabs.com/" />
                <meta property="og:title" content="Partnerships | Inspektlabs" />
                <meta property="og:description" content="Inspektlabs uses artificial intelligence for automation of inspections of any physical asset using photos and videos. The company’s current focus is on automating vehicle inspections for automotive and insurance players." />
                <meta property="og:image" content="https://inspektlabs.com/img/car.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://inspektlabs.com/" />
                <meta property="twitter:title" content="Partnerships | Inspektlabs" />
                <meta property="twitter:description" content="Inspektlabs uses artificial intelligence for automation of inspections of any physical asset using photos and videos. The company’s current focus is on automating vehicle inspections for automotive and insurance players." />
                <meta property="twitter:image" content="https://inspektlabs.com/img/car.png" />
            </Head>

            <main className={styles.main}>

                <section className={styles.featured}>
                    <div className={styles.featuredContent}>
                        <h1>Become an Inspektlabs partner</h1>
                        <p>Come join hands with us</p>
                        <Link href="/contact-us"><a className={styles.contactBtnBlue}>Contact Us</a></Link>
                    </div>
                    <div className={styles.featuredImg}></div>
                </section>

                <section className={styles.details}>
                    <h2>We provide sales, marketing and technical resources to assist our partners</h2>
                    <p>Our white labelled APIs can be rebranded, and are easily integrable with any cloud-based storage (e.g. AWS S3) or SFTP folders within 24 hrs</p>
                    <Link href="/contact-us"><a className={styles.contactBtnWhite}>Contact Us</a></Link>
                </section>

            </main>
        </div>
    )
}