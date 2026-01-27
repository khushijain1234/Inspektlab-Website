import { Fragment, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import styles from '../styles/Home.module.css';

import FeatureCard from '../components/home/FeatureCard';
import WhyCard from '../components/home/WhyCard';
import language from '../languages/index.json';

import { features, whyCards, testimonials, companies, productFeatures, usersCard, partners } from '../const/home';
import { news } from '../const/media';
import { awards, mailFormat } from '../const/shared';
import { questions } from '../const/faq';

// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
//   ssr: false,
// });

export default function Home({ locale }) {
  const [testimonial, setTestimonial] = useState({});
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const recaptchaRef = useRef();
  const scrollRef = useRef();
  const tryProductRef=useRef(null);
  const scrollCompaniesRef=useRef(null);

  const selectTestimonial = (id) =>
    setTestimonial(testimonials.filter((t) => t.id === id)[0]);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setValid(mailFormat.test(e.target.value));
  };


  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector(`.${styles.blogItem}`).offsetWidth + 20; // Include margin/padding

    if (direction === 'left') {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const QuestionSection = ({keyIndex, que, ans}) => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={`${styles.questionModal} ${isOpen ? styles.openModal : ""}`} onClick={()=>setIsOpen(!isOpen)}>
          <p className={styles.questionIndex}>{String(keyIndex+1).padStart(2, '0')}</p>
          <div className={styles.question}>
              <p>{que}</p>
              <Image src={isOpen? '/img/shrink-icon.svg': '/img/expand-icon.svg'} alt="FAQ" width={36} height={36} objectFit='contain'/>
          </div>
          <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
              {ans.map((item, index)=><p key={index}>{item}</p>)}
          </div>
        </div>
    )
  }

  const handleRecaptchaChange = async (captcha) => {
    if (!captcha) return;

    setLoading(true);

    try {
      const response = await fetch('/api/request', {
        method: 'POST',
        body: JSON.stringify({ email, captcha }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      setError(error?.message || 'Something went wrong');
    } finally {
      recaptchaRef.current.reset();
      setEmail('');
      setValid(false);
      setLoading(false);
      setTimeout(() => {
        setError(false);
        setSuccess(false);
        setShowModal(false);
      }, 3000);
    }
  };

  const onClickGoToProduct = () => {
    if (tryProductRef.current) {
      tryProductRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 'smooth' for animated scroll
    }
  };

  const init = async () => {
    setTestimonial(testimonials[0]);
    const res = await fetch(`/api/posts`);
    const data = await res.json();
    setPosts(data.posts);
  };
console.log(productFeatures.length, openIndex,"heyy")
  useEffect(() => init(), []);

  return (
    <div className={styles.container}>
      <SEO
        title={language['seo title'][locale]}
        description={language['seo desc'][locale]}
        image='https://inspektlabs.com/img/car.png'
        url='https://inspektlabs.com/'
        keywords={language['seo keywords'][locale]}
        page=''
      />

      {/* Main Body */}
      <main className={styles.main}>
        {/* Featured Section */}
        <section className={styles.featured}>
          <video
            autoPlay
            muted
            loop
            preload='auto'
            playsInline
            className={styles.myVideo}
          >
            <source src='/img/Inspekltabs Video.webm' type='video/webm' />
            <source src='/img/Inspekltabs Video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h1 className={styles.featuredTitle}>
                <span className={styles.titleHighlights}>AI</span>-Powered Vehicle Damage Inspection Solutions
              </h1>
              <p className={styles.featuredText}>
                {language['featureText'][locale]}
              </p>
              <div className={styles.btnContainer}>
                <div
                  className={styles.mainBtn}
                  onClick={onClickGoToProduct}
                >
                  Try Our Product
                </div>
                <div
                  className={styles.mainBtn}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                  Request for a Demo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Companies section */}
        <section className={styles.companies}>
          <h2 className={styles.trustedBy}>Trusted By</h2>

          <div className={styles.companiesWrapper}>
          <div className={styles.companiesContainer} ref={scrollCompaniesRef}>
            {[...companies, ...companies].map((company, idx)=>(
              <div key={idx} className={styles.companyIcon}>
                <Image src={`/img/${company.img}`} width={company.width} height={company.height} alt={company.title} priority />
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Products Section */}
        <section className={styles.productsSection}>
            <div className={styles.products} ref={tryProductRef}>
              <h2 className={styles.productsTitle}>
                Transform Vehicle Inspections with AI Technology
              </h2>
              <p className={styles.productsText}>
                Inspektlabs delivers AI-powered vehicle inspection solutions that reduce inspection time from hours to seconds. Our technology detects damage across 163 vehicle parts with 95-99% accuracy.
              </p>
              <div className={styles.productsContainer}>
                <div className={styles.productFeatureList}>
                  {productFeatures.map((feature, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <>
                        <div key={index} className={`${styles.productFeature} ${isOpen? styles.activeDiv:""}`} onClick={()=>{if(openIndex===index){setOpenIndex(null);}else{setOpenIndex(index);setSelectedIndex(index);}}}>
                          <Image src={`/img/${feature.img}`} alt={feature.title} width={54} height={54} />
                          <div className={styles.productFeatureContent}>
                            <div className={styles.productFeatureTitleContainer}>
                              <h3 className={`${styles.productFeatureTitle} ${isOpen ? styles.activeTitle: ""}`}>{feature.title}</h3>
                              <Image src="/img/downArrorw.svg" alt="FAQ" width={24} height={24}  objectFit='contain'/>
                            </div>
                            <div className={styles.innerImg}>
                              {isOpen && <Image src={`/img/${productFeatures[index].mainImg}`} alt='Car Icon' width={575} height={700} />}
                            </div>
                            <div className={`${styles.productFeatureTextWrapper} ${isOpen ? styles.open : ''}`}>
                              {isOpen && <p className={styles.productFeatureText}>{feature.text}</p>}
                              {isOpen && (
                                  feature.link ? (
                                    <Link href={feature.link} target="_blank" rel="noreferrer">
                                      <a className={`${isOpen ? styles.activeTitle : ""}`}>
                                        Read More 
                                        <Image src="/img/arrow.svg" alt="arrow" width={50} height={10} />
                                      </a>
                                    </Link>
                                  ) : (
                                    <p className={styles.comingSoon}>Coming soon</p>
                                  )
                                )} 
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
                <div className={styles.imgSection}>
                  <Image src={`/img/${productFeatures[selectedIndex].mainImg}`}  alt='Car Icon' width={575} height={744} priority/>
                </div>
              </div>
            </div>
        </section>

        <section className={styles.targetAudienceSection}>
          <div className={styles.targetAudienceDiv}>
            <h2 className={styles.targetAudienceTitle}>AI-Powered Vehicle Inspection for Every Industry</h2>
            <p className={styles.targetAudienceText}>Whether you manage insurance claims, rental fleets, or vehicle remarketing, Inspektlabs adapts to your workflow. Simply capture photos or 360° videos - our AI handles the rest.</p>

            <div className={styles.targetAudienceContainer}>
            {usersCard.map((card) => (
              <div className={styles.cardItem}>
                <div className={styles.cardImg}>
                  <Image
                    src={`/img/${card.cardImg}`}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt={card.userType}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.userType}>{card.userType}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className={styles.testimonialSection}>
          <div className={styles.testimonialSubSection}>
            <div className={styles.testimonialsTitleContainer}>
              <h2 className={styles.testimonialsTitle}>Why Leading Brands Trust Inspektlabs</h2>
              <p className={styles.testimonialsSubtitle}>Hear directly from our partners</p>
            </div>
            <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialWrapper}>
                <div className={`${styles.testimonialRow} ${styles.row1}`}>
                  <div className={styles.scrollTrack}>
                    {[
                      ...testimonials.slice(0, 4),
                      ...testimonials.slice(0, 4),
                    ].map((t, i) => (
                      <div className={styles.testimonialCard} key={`row1-${i}`}>
                        <div className={styles.testimonialCardHeadingContainer}>
                          <div className={styles.testimonialImageWrapper}>
                            <Image className={`${styles.testimonialImg} ${t.flip=='true' ? styles.flipImg : ''}`} src={`/img/clients/${t.img}`} width={70} height={70} alt='Testimonual Image' />
                          </div>
                          <div className={styles.testimonialCardHeading}>
                            <p><strong>{t.name}</strong></p>
                            <p className={styles.testimonialTag}>{t.position}</p>
                          </div>
                        </div>
                        <p>“{t.text}”</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${styles.testimonialRow} ${styles.row2}`}>
                  <div className={styles.scrollTrackReverse}>
                    {[
                      ...testimonials.slice(4, 8),
                      ...testimonials.slice(4, 8),
                    ].map((t, i) => (
                      <div className={`${styles.testimonialCard} ${styles.cardRow2}`} key={`row2-${i}`}>
                       <div className={styles.testimonialCardHeadingContainer}>
                       <div className={styles.testimonialImageWrapper}>
                            <Image className={`${styles.testimonialImg} ${t.flip=='true' ? styles.flipImg : ''}`} src={`/img/clients/${t.img}`} width={60} height={60} alt='Testimonual Image' />
                          </div>
                          <div className={styles.testimonialCardHeading}>
                            <p><strong>{t.name}</strong></p>
                            <p>{t.position}</p>
                          </div>
                        </div>
                        <p className={styles.testimonialText}>“{t.text}”</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.testimonialMobileWrapper}>
                  <div className={styles.testimonialRow}>
                    {
                      [...testimonials, ...testimonials].map((t,i) =>(
                        <div className={styles.testimonialCard} key={i}>
                        <div className={styles.testimonialCardHeadingContainer}>
                        <div className={styles.testimonialImageWrapper}>
                            <Image className={`${styles.testimonialImg} ${t.flip=='true' ? styles.flipImg : ''}`} src={`/img/clients/${t.img}`} width={50} height={50} alt='Testimonual Image' />
                          </div>
                          <div className={styles.testimonialCardHeading}>
                            <p><strong>{t.name}</strong></p>
                            <p className={styles.testimonialTag}>{t.position}</p>
                          </div>
                        </div>
                        <p>“{t.text}”</p>
                      </div>
                      ))
                    }
                  </div>
              </div>
              {partners.map((category) => (
                <Fragment key={category.name[locale]}>
                  <div className={styles.categoryHeading}>
                    <p className={styles.partnerCategory}>{category.name[locale]}</p>
                    <Image src={'/img/star.svg'} alt='star' width={20} height={20} className={styles.starImg}/>
                  </div>
                  <div className={styles.partnerLogoContainer}>
                    {category.logo.map((t,i) => (
                      <div className={styles.partnerLogo} key={i}>
                        <Image
                          key={t.img}
                          src={`/img/${t.img}`}
                          alt={t.img}
                          width={t.width? t.width:150}
                          height={t.height? t.height:40}
                          objectFit='contain'
                          className={`${styles.partnerLogoImg} ${t.flip=='true' ? styles.flipImg : ''}`}
                        />
                      </div>
                    ))}
                  </div>
                </Fragment>
              ))}
              
            </div>
          </div>
        </section>

        {/* Achievement section */}
        <section className={styles.achievementSection}>
          <div className={styles.achievementSubSection}>
            <div className={styles.achievementHeadingContainer}>
              <h2 className={styles.achievementHeading}>Our achievements</h2>
              <p className={styles.achievementSubHeading}>Our success says everything about our digital vehicle inspection</p>
            </div>
            <div className={styles.statisticsContainer}>
              <div className={styles.statisticsContent}>
                <h3 className={styles.statisticsFigure}>10M+</h3>
                <p className={styles.statisticsText}>Inspections Conducted</p>
              </div>
              <div className={styles.statisticsContent}>
                <h3 className={styles.statisticsFigure}>30+</h3>
                <p className={styles.statisticsText}>Countries</p>
              </div>
              <div className={styles.statisticsContent}>
                <h3 className={styles.statisticsFigure}>$1B+</h3>
                <p className={styles.statisticsText}>saved in Inspection costs</p>
              </div>
            </div>
            <div>
              <p className={styles.statisticsDescription}>Any customer can capture a 360° video of a vehicle using our guidance system on a smartphone, and we will deliver a comprehensive inspection report including damage details, $ claim value etc. within seconds.</p>
            </div> 
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSectionContainer}>
          <div className={styles.faqSection}>
            <div className={styles.faqTitleContainer}>
              <h2 className={styles.testimonialsTitle}>Frequently Asked Questions About Our Vehicle Damage Inspection Solutions</h2>
            </div>
            <div className={styles.questionContainer}>
                    <div className={styles.faqGrid}>
                        {questions["General"][locale].map((item, index)=><QuestionSection keyIndex={index} que={item.Q} ans={item.A}/>)}
                    </div>
                </div>
            <div
              className={styles.viewMoreBtn}
              style={{width: "200px"}}
              onClick={() => (window.location.href = '/faq')}
            >
              View More
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className={styles.blogSection}>
          <div className={styles.blogTitleContainer}>
            <h2 className={styles.testimonialsTitle}>{language['Latest Blogs'][locale]}</h2>
            <p className={styles.blogSubtitle}>As we continue our journey to revolutionize vehicle inspections and claims automation, attending industry gatherings becomes essential to the story.</p>
          </div>
            <div className={styles.blogCaraouselContainer}>
                <div className={`${styles.nav} ${styles.navLeft}`}>
                  <Image src={'/img/nav-left-icon.svg'} width={50} height={50} alt="nav-left" onClick={() => scroll("left")}/>
                </div>
                <div className={styles.blogCaraouselContent} ref={scrollRef}>
                  {posts.map((post) => (
                  <div className={styles.blogItem} key={post.id}>
                    <div className={styles.blogImg}>
                      <Image
                        src={post.feature_image}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt={post.title}
                      />
                    </div>
                    <div className={styles.blogContent}>
                      {post.primary_tag && (
                        <a href={post.primary_tag.url} className={styles.blogTag}>
                          {post.primary_tag.name}
                        </a>
                      )}
                      <p className={styles.blogTitle}>{post.title}</p>
                      <p className={styles.blogText}>{post.excerpt}</p>
                      <a
                        href={post.url}
                        className={styles.blogAction}
                        title={post.title}
                      >
                        {language['Read More'][locale]}
                        <span className='sr-only'>about {post.title}</span>{' '}
                        <i className='fas fa-chevron-right'></i>
                      </a>
                    </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.nav} ${styles.navRight}`}>
                  <Image src={'/img/nav-right-icon.svg'} width={50} height={50} alt="nav-right" onClick={() => scroll("right")}/>
                </div>
            </div>
          
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <h2 className={styles.mapSectionHeading}>Our Presence</h2>
          <div className={styles.mapContainer}>
              <div className={styles.mapWrapper}>
                <Image
                  src='/img/presence-map.svg'
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                  alt='map'
                />
              </div>
          </div>
          <div className={styles.legendsContainer}>
            <div className={styles.legend}>
              <Image
                src='/img/Subsidiaries.svg'
                alt='Subsidiaries'
                width={20}
                height={24}
              />
              <p>{language['Subsidiaries'][locale]}</p>
            </div>
            <div className={styles.legend}>
              <Image
                src='/img/Partners.svg'
                alt='Partners'
                width={20}
                height={24}
              />
              <p>{language['Partners'][locale]}</p>
            </div>
            <div className={styles.legend}>
              <Image
                src='/img/Clients.svg'
                alt='Clients'
                width={20}
                height={24}
              />
              <p>{language['Clients'][locale]}</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
