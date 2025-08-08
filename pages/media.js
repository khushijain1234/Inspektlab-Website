import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/Media.module.css'

import { news } from '../const/media'
import language from '../languages/media.json'

export default function Media({locale}) {
    return (
        <div className={styles.container}>

            <SEO
                title={language["seo title"][locale]}
                description={language["seo desc"][locale]}
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/media"
                keywords={language["seo keywords"][locale]}
                page="media"
            />

            <main className={styles.main}>

                <h1>{language["We are in Media"][locale]}</h1>
                
                <section className={styles.media}>
                    { news.map((newsItem, index) => (
                        <div className={styles.newsItem} key={index}>
                            <div className={styles.newsLogo}>
                                <Image src={`/img/news/${newsItem.logo}`} layout="fill" objectFit="initial" alt={newsItem.name} />
                            </div>
                            <p className={styles.newsTitle}>{ newsItem.name }</p>
                            <p className={styles.newsContent}>{ newsItem.text }</p>
                            <a href={newsItem.url} target="_blank" rel="noopener noreferrer"className={styles.newsBtn}>{language["Read More"][locale]} &nbsp;<i className="fas fa-chevron-right"></i></a>
                        </div>
                    )) }
                </section>

            </main>
        </div>
    )
}