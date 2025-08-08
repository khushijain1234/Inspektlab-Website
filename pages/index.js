import { Fragment, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import styles from '../styles/Home.module.css';

import FeatureCard from '../components/home/FeatureCard';
import WhyCard from '../components/home/WhyCard';
import language from '../languages/index.json';

import { features, whyCards, testimonials } from '../const/home';
import { news } from '../const/media';
import { partners, awards, mailFormat } from '../const/shared';
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

  const recaptchaRef = useRef();

  const selectTestimonial = (id) =>
    setTestimonial(testimonials.filter((t) => t.id === id)[0]);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setValid(mailFormat.test(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

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

  const init = async () => {
    setTestimonial(testimonials[0]);
    const res = await fetch(`/api/posts`);
    const data = await res.json();
    setPosts(data.posts);
  };

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
            <source src='/img/home.webm' type='video/webm' />
            <source src='/img/home.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h1 className={styles.featuredTitle}>
                {language['Automate Inspections with AI'][locale] ??
                  'Automate Inspections with AI'}
              </h1>
              <p className={styles.featuredText}>
                {language['featureText'][locale]}
              </p>
              <div className={styles.btnContainer}>
                <div
                  className={styles.btnBlue}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                  {language['Request a demo'][locale]}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>
            {language['Features'][locale]}
          </h2>
          <div className={styles.featuresContainer}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.title[locale]}
                title={feature.title[locale]}
                text={feature.text[locale]}
                img={feature.img}
                path={feature.path}
                bgColor={feature.bgColor}
                action={feature.action}
                locale={locale}
              />
            ))}
          </div>
        </section>

        {/* Why Choose Us? */}
        <section className={styles.whySection}>
          <h2 className={styles.whyTitle}>
            {language['Why Choose Our AI Inspection Solution?'][locale]}
          </h2>
          <div className={styles.whyContainer}>
            {whyCards.map((wCard) => (
              <WhyCard
                key={wCard.title[locale]}
                title={wCard.title[locale]}
                text={wCard.text[locale]}
                img={wCard.img}
              />
            ))}
          </div>
          <Link href='/contact-us'>
            <a className={styles.btnBlue} style={{ color: '#fff' }}>
              {language['Request a Demo'][locale]}
            </a>
          </Link>
        </section>

        {/* Partners Section */}
        <section className={styles.partners}>
          <h2 className={styles.partnersTitle}>
            {language['Our Partners'][locale]}
          </h2>
          {partners.map((category) => (
            <Fragment key={category.name[locale]}>
              <h3 className={styles.partnerCategory}>
                {category.name[locale]}
              </h3>
              <div className={styles.partnerLogoContainer}>
                {category.logo.map((img) => (
                  <div className={styles.partnerLogo} key={img}>
                    <Image
                      key={img}
                      src={`/img/${img}`}
                      alt={img}
                      width={170}
                      height={55}
                      objectFit='contain'
                    />
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
          <Fragment>
            <h3 className={styles.partnerCategory}>
              {language['Awards'][locale]}
            </h3>
            <div className={styles.partnerLogoContainer}>
              {awards.map((award) => (
                <div className={styles.awardsContainer} key={award.name}>
                  <div className={styles.partnerLogo}>
                    <Image
                      src={`/img/news/${award.img}`}
                      alt={award.name}
                      width={200}
                      height={70}
                      objectFit='contain'
                    />
                  </div>
                  <a href={award.url} target='_blank' rel='noopener noreferrer'>
                    {award.name}
                  </a>
                </div>
              ))}
            </div>
          </Fragment>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialSection}>
          <div className={styles.testimonialsTitleContainer}>
            <h3 className={styles.testimonialsTitle}>
              {language['What our clients are saying'][locale]}
            </h3>
          </div>
          <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialItemsContainer}>
              <div className={styles.selectedTestimonial}>
                <p>“{testimonial.text}”</p>
                <h4>
                  {testimonial.name}, <span>{testimonial.position}</span>
                </h4>
              </div>
              <div className={styles.availableTestimonials}>
                {testimonials.map((t) =>
                  t.id === testimonial.id ? (
                    <Image
                      key={t.id}
                      className={styles.selectedTestimonialImg}
                      src={`/img/clients/${t.img}`}
                      height={76}
                      width={76}
                      objectFit='cover'
                      alt={t.name}
                    />
                  ) : (
                    <Image
                      key={t.id}
                      onClick={() => selectTestimonial(t.id)}
                      src={`/img/clients/${t.img}`}
                      height={76}
                      width={76}
                      objectFit='cover'
                      alt={t.name}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className={styles.newsSection}>
          <h2 className={styles.newsSectionTitle}>
            {
              language["Inspektlabs' vehicle inspection tools are in the News"][
                locale
              ]
            }
          </h2>
          <div className={styles.newsContainer}>
            {news.slice(0, 3).map((newsItem, index) => (
              <div className={styles.newsItem} key={index}>
                <div className={styles.newsLogo}>
                  <Image
                    src={`/img/news/${newsItem.logo}`}
                    layout='fill'
                    objectFit='initial'
                    alt={newsItem.name}
                  />
                </div>
                <p className={styles.newsTitle}>{newsItem.name}</p>
                <p className={styles.newsContent}>{newsItem.text}</p>
                <a
                  href={newsItem.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.newsAction}
                  title={newsItem.name}
                >
                  {language['Read More'][locale]}
                  <span className='sr-only'>about {newsItem.name}</span>{' '}
                  <i className='fas fa-chevron-right'></i>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className={styles.blogSection}>
          <h2 className={styles.blogSectionTitle}>
            {language['Latest Blogs'][locale]}
          </h2>
          <div className={styles.blogContainer}>
            {posts.slice(0, 3).map((post) => (
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
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className={styles.legendsContainer}>
            <div className={styles.legend}>
              <Image
                src='/img/map-pin-blue.svg'
                alt='Subsidiaries'
                width={24}
                height={28}
              />
              <p>{language['Subsidiaries'][locale]}</p>
            </div>
            <div className={styles.legend}>
              <Image
                src='/img/map-pin-orange.svg'
                alt='Partners'
                width={24}
                height={28}
              />
              <p>{language['Partners'][locale]}</p>
            </div>
            <div className={styles.legend}>
              <Image
                src='/img/map-pin-green.svg'
                alt='Clients'
                width={24}
                height={28}
              />
              <p>{language['Clients'][locale]}</p>
            </div>
          </div>
          <div className={styles.mapContainer} />
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <h2 className={styles.statsTitle}>
            {
              language[
                'Our success says everything about our digital vehicle inspections'
              ][locale]
            }
          </h2>
          <div className={styles.statsContainer}>
            <p>
              20+ <span>{language['Enterprise Customers'][locale]}</span>
            </p>
            <p>
              1M+ <span>{language['Inspections Passed'][locale]}</span>
            </p>
            <p>
              10+ <span>{language['Countries'][locale]}</span>
            </p>
          </div>
          <p className={styles.statsText}>
            “{language['Damage assessment text'][locale]}
            <br />
            <br />
            {language['360 damage text'][locale]}”
          </p>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
          <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
          <div className={styles.questionContainer}>
            <div className={styles.allQuestionContainer}>
                {questions["General"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
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

        {/* API Request Modal */}
        {showModal && (
          <div className={styles.modalContainer}>
            <div className={styles.modal}>
              <div
                className={styles.actionClose}
                onClick={() => setShowModal(false)}
              >
                <i className='fas fa-times fa-2x'></i>
              </div>
              <h3>{language['enter email text'][locale]}</h3>
              <p>**Note: {language['please use company id'][locale]}</p>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={onEmailChange}
                  autoFocus
                />
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size='invisible'
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
                {valid ? (
                  loading ? (
                    <button className={styles.btnBlue}>
                      <i className='fas fa-circle-notch fa-spin'></i>
                    </button>
                  ) : (
                    <button type='submit' className={styles.btnBlue}>
                      {language['Get API Key'][locale]}
                    </button>
                  )
                ) : (
                  <div
                    className={`${styles['btnBlue']} ${styles['btnDisabled']}`}
                  >
                    {language['Get API Key'][locale]}
                  </div>
                )}
                {success && (
                  <p className={styles.successMessage}>
                    <i className='fas fa-check'></i>{' '}
                    {language['Message Sent'][locale]}
                  </p>
                )}
                {error && (
                  <p className={styles.errorMessage}>
                    <i className='fas fa-times'></i> {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
