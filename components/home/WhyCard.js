import Image from 'next/image'
import styles from '../../styles/home/WhyCard.module.css'

const WhyCard = ({ title, text, img }) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <Image src={`/img/${img}`} width={150} height={100} alt={title} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default WhyCard;