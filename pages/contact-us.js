import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import SEO from '../components/SEO';
import styles from '../styles/ContactUs.module.css';
import { mailFormat } from '../const/shared';
import language from '../languages/contact-us.json'

export default function ContactUs({locale}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const recaptchaRef = useRef();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setValid(mailFormat.test(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const handleRecaptchaChange = async (captcha) => {
    if (!captcha) return;

    setLoading(true);

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({ email, name, message, captcha }),
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
      setName('');
      setMessage('');
      setValid(false);
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div className={styles.container}>
      <SEO
        title={language["seo title"][locale]}
        description={language["seo desc"][locale]}
        image='https://inspektlabs.com/img/car.png'
        url='https://inspektlabs.com/contact-us'
        keywords={language["seo keywords"][locale]}
        page="contact-us"
      />

      {/* Main Body */}
      <main className={styles.main}>
        {/* Featured Section */}
        <section className={styles.featured}>
          <h1>{language["Contact Us"][locale]}</h1>
          <p>
            {language["Get in touch"][locale]}
          </p>
        </section>

        <section className={styles.formContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>{language["Submit Your Query"][locale]}</h2>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={onEmailChange}
            />
            <input
              type='text'
              name='name'
              placeholder={language["Your Name"][locale]}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              name='message'
              rows='6'
              placeholder={language["Your Message"][locale]}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
            />
            {valid ? (
              loading ? (
                <button className={styles.submitBtn}>
                  <i className='fas fa-circle-notch fa-spin'></i>
                </button>
              ) : (
                <button type='submit' className={styles.submitBtn}>
                  {language["Send Message"][locale]}
                </button>
              )
            ) : (
              <div className={styles.submitDisabled}>{language["Send Message"][locale]}</div>
            )}
            {success && (
              <p className={styles.successMessage}>
                <i className='fas fa-check'></i> {language["Message Sent"][locale]}
              </p>
            )}
            {error && (
              <p className={styles.errorMessage}>
                <i className='fas fa-times'></i> {error}
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}
