import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/home/FeatureCard.module.css';
import language from '../../languages/FeatureCard.json';

const FeatureCard = ({ title, text, img, path, bgColor, action, locale }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <div className={styles.icon}>
        <Image src={`/img/${img}`} width={100} height={100} alt={title} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{text}</p>
      {action ? (
        <Link href={path}>
          <a className={styles.actionBtn} title={title}>
            {language['Learn More'][locale]}
            <span className='sr-only'>about {title}</span>
          </a>
        </Link>
      ) : (
        <Link href={path}>
          <a className={`${styles['actionBtn']} ${styles['actionHidden']}`}>
            {language['Learn More'][locale]}
            <span className='sr-only'>about {title}</span>
          </a>
        </Link>
      )}
    </div>
  );
};

export default FeatureCard;
