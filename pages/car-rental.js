import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/CarRental.module.css'
import { testimonials } from '../const/home'
import { 
    workflowIssues, 
    builtForList, 
    stats, 
    capabilities,
} from '../const/car-rental'
import { questions } from '../const/faq'
import language from '../languages/insurance.json'
import { useState,useRef,useEffect } from 'react'

export default function CarRental({locale}) {

  const [posts, setPosts] = useState([]);
  const [testimonial, setTestimonial] = useState({});

  const scrollRef = useRef();


  const init = async () => {
    setTestimonial(testimonials[0]);
    const res = await fetch(`/api/posts`);
    const data = await res.json();
    setPosts(data.posts);
  };

  useEffect(() => init(), []);
  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector(`.${styles.blogItem}`).offsetWidth + 20; // Include margin/padding

    if (direction === 'left') {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };
    const QuestionSection = ({ keyIndex, que, ans }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        return (
          <div
            className={`${styles.questionModal} ${isOpen ? styles.openModal : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className={styles.questionIndex}>
              {String(keyIndex + 1).padStart(2, "0")}
            </p>
            <div className={styles.question}>
              <p>{que}</p>
              <Image
                src={isOpen ? "/img/shrink-icon.svg" : "/img/expand-icon.svg"}
                alt="FAQ"
                width={36}
                height={36}
                objectFit="contain"
              />
            </div>
            <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
              {ans.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        );
      };

    return (
        <div className={styles.container}>

            <SEO
                title="Vehicle Inspection Solutions for Car Rental & Leasing | Inspektlabs"
                description="Streamline your car rental inspections with Inspektlabs’ AI-powered vehicle inspection solutions. Generate comprehensive vehicle condition reports in minutes with photo or video capture."
                image="https://inspektlabs.com/img/car.png"
                url="https://inspektlabs.com/car-rental"
                keywords={language["seo keywords"][locale]}
                page="car-rental"
            />

            <main className={styles.main}>

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Faster Turnaround. Zero Disputes. Smarter Inspections</h1>
                    <p className={styles.heroText}>
                    Automate vehicle inspections for car rental & leasing companies to help cut down on inspection time, improve accuracy, and protect vehicle value
                    </p>
                    <div
                        className={styles.heroBtn}
                        onClick={() => (window.location.href = '/contact-us')}
                    >
                        Request a Demo
                        <Image src='/img/arrow right white.png' alt="Arrow" width={20} height={20} />
                    </div>
                </div>
                <div className={styles.heroImageSection}>
                    <Image 
                        src='/img/Car Rental Main Img.png' 
                        alt='Car Rental Main Img' 
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition='center'
                        fetchpriority="high"
                    />
                </div>
            </section>

            {/* Why Manual Inspection Issues Section */}
            <section className={styles.workflowSection}>
                <div className={styles.workflowContent}>
                    <h2 className={styles.sectionHeading}>
                        Manual Inspection are costing you more than you think
                    </h2>
                    <div className={styles.workflowGrid}>
                        {workflowIssues.map((issue, idx) => (
                            <div className={styles.workflowCard} key={idx}>
                                <div className={styles.workflowIcon}>
                                    <Image 
                                        src={issue.icon} 
                                        alt={issue.title} 
                                        width={70} 
                                        height={65} 
                                    />
                                </div>
                                <h3 className={styles.workflowCardTitle}>{issue.title}</h3>
                                <hr className={styles.workflowCardLine} />
                            </div>
                        ))}
                    </div>
                    <p className={styles.automationText}>
                        These inefficiencies add up to significant costs and lost opportunities
                    </p>
                </div>
            </section>

            {/* Built For Section */}
            <section className={styles.builtForSection}>
                <div className={styles.builtForContent}>
                    <p className={styles.capabilitiesHeading}>CAPABILITIES</p>
                    <h2 className={styles.sectionHeading}>
                        Built for insurers and repair networks
                    </h2>
                    <div className={styles.builtForGrid}>
                        {builtForList.map((item, idx) => (
                            <div className={styles.builtForCard} key={idx}>
                                <div className={styles.builtForIcon}>
                                    <Image 
                                        src={item.icon} 
                                        alt={item.title} 
                                        width={159} 
                                        height={158} 
                                    />
                                </div>
                                <h3 className={styles.builtForCardTitle}>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.statsContainer}>
                    <h2 className={styles.statsTitle}>
                        How we improve your operational efficiency
                    </h2>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <h3 className={styles.statValue}>{stat.value}</h3>
                                <p className={styles.statLabel}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className={styles.capabilitiesSection}>
                <div className={styles.capabilitiesContent}>
                    <h2 className={styles.sectionHeading}>
                    Our Capabilities
                    </h2>
                    <p className={styles.capabilitiesSubtitle}>Discover how InspektLabs streamlines car rental inspection and management with cutting-edge solutions.</p>
                    <div className={styles.capabilitiesGrid}>
                        {capabilities.map((capability, idx) => (
                            <div className={styles.capabilityCard} key={idx}>
                                <div className={styles.capabilityIcon}>
                                    <Image 
                                        src={capability.icon} 
                                        alt={capability.title} 
                                        width={170} 
                                        height={120} 
                                    />
                                </div>
                                <div className={styles.capabilityContent}>
                                    <h3 className={styles.capabilityTitle}>{capability.title}</h3>
                                    <p className={styles.capabilityText}>{capability.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className={styles.blogSection}>
                <p className={styles.capabilitiesHeading}> INDUSTRY INSIGHTS</p>
                <div className={styles.blogContainer}>
                    <h2 className={styles.sectionHeading}>Industry-specific blogs
                    </h2>
                    <p className={styles.capabilitiesSubtitle}>Stay updated with the latest trends, best practices and insights from the automotive inspection industry.</p>
                    
                    <div className={styles.blogCaraouselContainer}>
                        <div className={`${styles.nav} ${styles.navLeft}`}>
                        <Image src={"/img/nav-left.svg"} width={50} height={50} alt="nav-left" onClick={() => scroll("left")}/>
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
                                Read More
                                <span className='sr-only'>about {post.title}</span>{' '}
                                <i className='fas fa-chevron-right'></i>
                            </a>
                            </div>
                            </div>
                        ))}
                        </div>
                        <div className={`${styles.nav} ${styles.navRight}`}>
                        <Image src={"/img/nav-right.svg"} width={50} height={50} alt="nav-right" onClick={() => scroll("right")}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSectionContainer}>
                <div className={styles.faqSection}>
                    <div className={styles.faqTitleContainer}>
                    <h2 className={styles.faqTitle}>Commonly asked questions</h2>
                    </div>
                    <div className={styles.questionContainer}>
                    <div className={styles.faqGrid}>
                        {questions["Car Rental"][locale].map((item, index) => (
                        <QuestionSection keyIndex={index} que={item.Q} ans={item.A} />
                        ))}
                    </div>
                    </div>
                    <div
                    className={styles.viewMoreBtn}
                    style={{ width: "200px" }}
                    onClick={() => (window.location.href = "/faq")}
                    >
                    View More
                    </div>
                </div>
                </section>

            </main>

        </div>
    )
}