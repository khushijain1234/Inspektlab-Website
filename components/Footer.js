import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/img/logo.svg'
import language from '../languages/Footer.json'


const Footer = ({locale}) => {
    return (
        <Fragment>
            <div className="footer">
                <div className="section section-40">
                    <div className="logo">
                        <Link locale={locale} href="/"><a><Image src={logo} alt="Inspektlabs" /></a></Link>
                    </div>

                    {/* <div className="social-container">
                        <a href="https://www.linkedin.com/company/inspektlabs" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin fa-2x" title="LinkedIn"></i></a>
                        <a href="https://angel.co/company/inspekt-labs" target="_blank" rel="noreferrer noopener"><i className="fab fa-angellist fa-2x" title="AngelList"></i></a>
                        <a href="https://www.crunchbase.com/organization/inspektlabs" target="_blank" rel="noreferrer noopener"><Image className="customIcon" src="/img/cb.svg" width={28} height={32} alt="Crunchbase" /></a>
                        <a href="https://twitter.com/InspektlabsAI" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter fa-2x" title="Twitter"></i></a>
                        <a href="https://www.instagram.com/inspektlabs" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram fa-2x" title="Instagram"></i></a>
                    </div> */}

                    <h1 className='footerSubHeading'>{language["Our products conduct damage"][locale]} </h1>
                    <div
                    className="getInTouchBtn"
                    onClick={() => (window.location.href = '/contact-us')}
                    >
                        Try Our Product
                    </div>
                </div>
                <div className="section contact-section">
                    <div>
                        <h3 className='location-heading'>Our Location</h3>
                        <ul className="footer-nav">
                            <li><p>HEAD OFFICE</p></li>
                            <li>
                                <p>651 N, Broad St, Suit 206, Middletown, New Castle, Delaware, USA, 19709</p>
                            </li>
                            <li>
                                <p>Bargelaan 200, 2333 CW Leiden, The Netherlands</p>
                            </li>
                            <li><p>Cvision.ai analytics pvt ltd</p></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='location-heading'>PHONE</h3>
                        <p>+1 302 613 1607</p>
                    </div>
                    <div>
                        <h3 className='location-heading'>EMAIL</h3>
                        <p>info@inspektlabs.com</p>
                    </div>
                </div>
                {/* <div className="section">
                    <h3>{language["Quick Links"][locale]}</h3>
                    <ul className="footer-nav">
                        <li>
                            <Link locale={locale} href="/">{language["Home"][locale]}</Link>
                        </li>
                        <li>
                            <Link locale={locale} href="/photo-video-capture">{language["How it works"][locale]}</Link>
                        </li>
                        <li>
                            <Link href="/whitepapers">Resources</Link>
                        </li>
                        <li>
                            <Link href="/security">Security</Link>
                        </li>                    
                    </ul>
                </div> */}
                <div className="section">
                    <div>
                        <h3 className='location-heading'>BUSINESS</h3>
                        <ul className="footer-nav">
                            <li className="footer-links">
                                <Link locale={locale} href="/">{language["Home"][locale]}</Link>
                            </li>
                            <li className="footer-links">
                                <Link locale={locale} href="/photo-video-capture">{language["How it works"][locale]}</Link>
                            </li>
                            <li className="footer-links">
                                <Link locale={locale} href="/privacy-policy">{language["Privacy Policy"][locale]}</Link>
                            </li>
                            <li className="footer-links">
                                <Link locale={locale} href="/terms-and-conditions">{language["Terms of Service"][locale]}</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='location-heading'>Visit us on</h3>
                        <div className="social-container">
                            <a href="https://www.linkedin.com/company/inspektlabs" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin fa-2x" title="LinkedIn"></i></a>
                            <a href="https://angel.co/company/inspekt-labs" target="_blank" rel="noreferrer noopener"><i className="fab fa-angellist fa-2x" title="AngelList"></i></a>
                            <a href="https://www.crunchbase.com/organization/inspektlabs" target="_blank" rel="noreferrer noopener"><Image className="customIcon" src="/img/cb.svg" width={28} height={32} alt="Crunchbase" /></a>
                            <a href="https://twitter.com/InspektlabsAI" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter fa-2x" title="Twitter"></i></a>
                            <a href="https://www.instagram.com/inspektlabs" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram fa-2x" title="Instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright { new Date().getFullYear() } {language["Inspektlabs Inc. All rights reserved"][locale]}</p>
            </div>
        </Fragment>
    )
}

export default Footer