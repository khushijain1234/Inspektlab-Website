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

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
  ssr: false,
});

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

  const testimonialsData = [
    {
      name: 'Michel Houthoff',
      id: 'HolidayCars.com COO/CTO',
      img: 't0.jpeg',
      text: "By leveraging Inspektlabs' technology, HolidayCars.com can deliver detailed inspection reports, allowing customers to use this information as a reference and enjoy a hassle-free rental experience",
    },
    {
      name: 'Joris van Poppel',
      id: 'Chief Product Officer of Fixico',
      img: 't1.png',
      text: "In the past two years, our collaboration with Inspektlabs helped us to further optimize the quality of our digital damage assessment enabling our repairers to provide top quality repairs for our customers"
    },
    {
      name: 'Mika Hasegawa',
      id: 'NTT Data',
      img: 't2.jpg',
      text: "We believe that the greatest strength of their technology is the AI accuracy with a large dataset of over several million images. In fact, the technical evaluation confirmed that their AI accuracy was very high and practical enough"
    },
    {
      name: 'Marco Moreno',
      id: 'CEO and Chairman of AGE',
      img: 't3.png',
      text: "Inspektlabs software offers + 95% accuracy, and we hope this will also advance our sustainability commitment, Repair before Replace."
    },
    {
      name: 'Joris Van Poppel',
      id: 'Sompo',
      img: 't3.png',
      text: "Inspektlabs has assisted us in enhancing our inspection process at Universal Sompo General Insurance. Their automated inspection solution provides comprehensive coverage for both cars and motorbikes. With custom workflows designed to handle inspections from any source – be it customer self-inspections, vendor checks, or OEM reviews – their platform has streamlined our process, allowing us to manage inspections more efficiently."
    },
    {
      name: 'Jonathan Simcoe',
      id: 'VMG',
      img: 't3.png',
      text: "Working with Inspeklabs has made a real difference for vMobility, allowing us to deliver an optimised and streamlined repair process. The team at Inspeklabs have been responsive and supportive throughout our integration journey and this approach has been key to the success of the partnership so far. We are excited to keep building on the partnership as we continue to innovate and improve our solutions for the benefit of our clients and their customers."
    },
    {
      name: 'Jonathan Simcoe',
      id: 'DEKRA',
      img: 't3.png',
      text: "As a leading damage assessment company in Europe, DEKRA is continuously looking for ways to enhance its services. By integrating Inspektlabs’ digital inspection solution, we’ve significantly streamlined our processes for insurers. The automated visual inspections have greatly reduced claim processing times without compromising quality or accuracy. Inspektlabs is a valuable partner for us in the digital transformation of damage assessment workflows. DEKRA Automotive from the Netherlands"
    },
    {
      name: 'Jonathan Simcoe',
      id: 'Autoparts Australia',
      img: 't3.png',
      text: "Inspektlabs has been a game changer for APG. Their platform has streamlined our recycled parts product line, allowing us to assess quality with consistency, speed, and confidence. The automation and accuracy it provides has significantly improved how we manage inventory and meet customer expectations. Inspektlabs has helped us lift the standard of recycled parts in the market, and we’re proud to be working with a partner that shares our commitment to innovation and quality."
    }
  ]

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
          <div className={styles.featuredVideo}>
          <video
            autoPlay
            muted
            loop
            preload='auto'
            playsInline
            className={styles.myVideo}
          >
            <source src='/img/home.webm' type='video/webm' />
            <source src='/img/home.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h1 className={styles.featuredTitle}>
                  Automate Inspections with-<span className={styles.titleHighlights}>AI</span>
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
          <div className={styles.companiesContainer}>
            {companies.map((company)=>(
              <div className={styles.companyIcon}>
                <Image src={`/img/${company.img}`} width={company.width} height={company.height} alt={company.title} />
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className={styles.productsSection}>
            <div className={styles.products} ref={tryProductRef}>
              <h2 className={styles.productsTitle}>
                Our Products
              </h2>
              <p className={styles.productsText}>
                Eliminate the need for physical inspections with Inspektlabs' "AI-powered" Vehicle Damage Inspection solutions. Get a detailed inspection report within a few minutes
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
            <h3 className={styles.targetAudienceTitle}>Who should use Inspektlabs</h3>
            <p className={styles.targetAudienceText}>{language['featureText'][locale]}</p>

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
              <h3 className={styles.testimonialsTitle}>What our clients say</h3>
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
                          <div>
                            <Image className={`${styles.testimonialImg} ${t.flip=='true' ? styles.flipImg : ''}`} src={`/img/clients/${t.img}`} width={50} height={50} alt='Testimonual Image' />
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
                       <div>
                            <Image className={`${styles.testimonialImg} ${t.flip=='true' ? styles.flipImg : ''}`} src={`/img/clients/${t.img}`} width={50} height={50} alt='Testimonual Image' />
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
                      testimonials.map((t,i) =>(
                        <div className={styles.testimonialCard} key={i}>
                        <div className={styles.testimonialCardHeadingContainer}>
                        <div>
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
                          width={150}
                          height={40}
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
              <h3 className={styles.achievementHeading}>Our achievements</h3>
              <p className={styles.achievementSubHeading}>Our success says everything about our digital vehicle inspection</p>
            </div>
            <div className={styles.statisticsContainer}>
              <div className={styles.statisticsContent}>
                <h1 className={styles.statisticsFigure}>10M+</h1>
                <p className={styles.statisticsText}>Inspections Conducted</p>
              </div>
              <div className={styles.statisticsContent}>
                <h1 className={styles.statisticsFigure}>30+</h1>
                <p className={styles.statisticsText}>Trusted in countries</p>
              </div>
              <div className={styles.statisticsContent}>
                <h1 className={styles.statisticsFigure}>$1B+</h1>
                <p className={styles.statisticsText}>saved in Inspection costs</p>
              </div>
            </div>
            <div>
              <p className={styles.statisticsDescription}>"Damage assessment car valuation, claim value estimate, odometer-VIN reading etc.</p>
              <br/>
              <p className={styles.statisticsDescription}>Any customer can capture 360 video of a car using our guidance system on a smartphone, and within a few second, we respond back with an inspection report e.g. dent on front door, $claim value etc.</p>
            </div> 
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSectionContainer}>
          <div className={styles.faqSection}>
            <div className={styles.faqTitleContainer}>
              <h1 className={styles.testimonialsTitle}>Commonly asked questions</h1>
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
          <h1 className={styles.mapSectionHeading}>Our Presence</h1>
          <div className={styles.mapContainer}>
              <div className={styles.mapWrapper}>
                <Image
                  src='/img/map.svg'
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
