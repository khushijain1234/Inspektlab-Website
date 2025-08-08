import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ClientSuccessStories.module.css'

import { stories } from '../const/client-success-stories'

export default function ClientSuccessStories() {
    return (
        <div className={styles.container}>
            <Head>
                {/* Primary Meta Tags */}
                <title>Client Success Stories | Inspektlabs</title>
                <meta name="title" content="Client Success Stories | Inspektlabs" />
                <meta name="description" content="Inspektlabs uses artificial intelligence for automation of inspections of any physical asset using photos and videos. The company’s current focus is on automating vehicle inspections for automotive and insurance players." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://inspektlabs.com/" />
                <meta property="og:title" content="Client Success Stories | Inspektlabs" />
                <meta property="og:description" content="Inspektlabs uses artificial intelligence for automation of inspections of any physical asset using photos and videos. The company’s current focus is on automating vehicle inspections for automotive and insurance players." />
                <meta property="og:image" content="https://inspektlabs.com/img/car.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://inspektlabs.com/" />
                <meta property="twitter:title" content="Client Success Stories | Inspektlabs" />
                <meta property="twitter:description" content="Inspektlabs uses artificial intelligence for automation of inspections of any physical asset using photos and videos. The company’s current focus is on automating vehicle inspections for automotive and insurance players." />
                <meta property="twitter:image" content="https://inspektlabs.com/img/car.png" />
            </Head>

            <main className={styles.main}>

                <h1>Hear what our clients say</h1>
                
                <section className={styles.media}>
                    { stories.map((story, index) => (
                        <div className={styles.story} key={index}>
                            <div className={styles.newsLogo}>
                                <Image src={`/img/news/${story.logo}`} layout="fill" objectFit="initial" alt={story.name} />
                            </div>
                            <p className={styles.newsTitle}>{ story.name }</p>
                            <p className={styles.newsContent}>{ story.text }</p>
                            <a href={story.url} target="_blank" rel="noopener noreferrer"className={styles.newsBtn}>Read More &nbsp;<i className="fas fa-chevron-right"></i></a>
                        </div>
                    )) }
                </section>

            </main>
        </div>
    )
}