import React, {useState} from 'react'
import styles from '../styles/VehicleDamageScanners.module.css';
import Image from 'next/image';
import { questions } from '../const/faq';



const FixedCamera = ({ locale }) => {

    const vehicleScannersFeatures=[
        {
            id: '1',
            title: 'Inspekt Box360',
            text: 'Drive-through box scanner for accurate 360 inspections in controlled lighting',
            img: 'InspektBox - 1.jpg'
        },
        {
            id: '2',
            title: 'Inspekt Pillars',
            text: 'Plug and play 4-pillar system for vehicle inspections with high resolution imaging',
            img: 'InspektPillars.jpg'
        },
        {
            id: '3',
            title: 'Inspekt WallScan',
            text: 'Wall mounted setup for facilities with existing inspection area',
            img: 'InspektWallScan.jpeg'
        }
    ]

    const keyBenefits = [
        {
            id: '1',
            title: 'No human efforts required-no manual steps required',
            img: 'benefits1.svg',
            width: 125,
            height: 125
        },
        {
            id: '2',
            title: 'No stop needed - vehicles drive through at recommmended speeds',
            img: 'benefits2.svg',
            width: 170,
            height: 124
        },
        {
            id: '3',
            title: 'High Throughput - scan up to 120 vehicles per hour',
            img: 'benefits6.svg',
            width: 124,
            height: 124
        },
        {
            id: '4',
            title: 'Number plate recognition - ANPR links scans to the right vehicle automatically',
            img: 'benefits3.svg',
            width: 167,
            height: 119
        },
        {
            id: '5',
            title: 'Dispute resolution - time stamped scans help prevent and resolve disputes',
            img: 'benefits4.svg',
            width: 114,
            height: 114
        },
 
        {
            id: '6',
            title: 'Works with all vehicles - Cars, SUVs, Vans, and Trucks',
            img: 'benefits5.svg',
            width: 130,
            height: 110
        }
    ]

    const features = [
        {
            id: '1',
            title: 'Fleet Management',
            text: "Daily vehicle condition reports",
            img: 'Fleet Management.svg'
        },
        {
            id: '2',
            title: 'Car rental companies',
            text: "Record vehicle condition before and after rentals to avoid disputes and spot damages",
            img: 'Car rental companies.svg'
        },
        {
            id: '3',
            title: 'Logistics Pre-Delivery Inspections',
            text: 'Verify vehicle condition before delivery with quickm automated checks',
            img: 'Logistics pre-Delivery Inspections.svg'
        },
        {
            id: '4',
            title: 'Auto re-marketing/ Auction solutions',
            text: 'Create reliable inspection reports to boost buyer trust and speed up sales',
            img: 'Auction solutions.svg'
        },
        {
            id: '5',
            title: 'Automotive Repair Networks',
            text: 'Daily vehicle condition reports',
            img: 'Automotive Repair Network.svg'
        }
    ]

    const additionalSectionData = [
        {
            id: '1',
            title: 'Zebra Lights',
            text: 'Reveal hidden dents and scratches with our zebra lights strips',
            img: 'Zebra Lighting.png'
        },
        {
            id: '2',
            title: 'Underbody Scanner',
            text: 'Expose any undercarriage damage instantly',
            img: 'Underbody scanner.png'
        },
        {
            id: '3',
            title: 'Tire Tread Scanner',
            text: 'Read tread depth rapidly for safer miles ahead',
            img: 'Tyre tread Scanner.png'
        }
    ]


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
                  {ans.map((item, index)=>{
                    if(item.includes(':')){
                        const parts = item.split(':');
                        return(
                            <p key={index}><strong>{parts[0]}:</strong>{' '}{parts.slice(1).join(':')}</p>
                        );
                    }else{
                        return <p key={index}>{item}</p>
                    }
                  })}
              </div>
            </div>
        )
      }
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <section className={styles.featured}>
                <Image
                    src="/img/fixed-camera-featured-photo.svg"
                    alt="AI-powered vehicle scanner"
                    layout='fill'
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className={styles.mainImg}
                />
                <div className={styles.grid}>
                    <h1 className={styles.featuredTitle}>AI-Powered Vehicle Damage Scanners</h1>
                    <p className={styles.featuredText}>Inspektlabs vehicle scanners capture high-resolution image and video of cars to automatically detect Damages, enabling fast, accurate and cost effective inspections.</p>
                    <div className={styles.requestDemoBtn} onClick={() => (window.location.href = '/contact-us')}>Request a Demo</div>
                </div>
            </section>
            <section className={styles.vehicleScannerSection}>
                <div className={styles.vehicleScannerFeaturesContainer}>
                    <h2>Variants of Inspektlabs Vehicle Scanners</h2>
                    <div className={styles.vehicleScannerFeaturesContent}>
                        {vehicleScannersFeatures.map((data)=>{
                            return(
                                <div className={styles.vehicleScannerFeature}>
                                    <div className={styles.scannerImg}>
                                    <Image src={`/img/${data.img}`} layout='fill' objectFit='cover' objectPosition='center' alt={data.title}/>
                                    </div>
                                    <div className={styles.scannerContent}>
                                        <h3>{data.title}</h3>
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>
                    <h2>Key benefits</h2>
                    <div className={styles.benefitGrid}>
                        {
                            keyBenefits.map((benefit) =>{
                                return(
                                    <div className={styles.benefitItem}>
                                        <Image src={`/img/${benefit.img}`} className={styles.benefitItemImg} width={140} height={140} alt={benefit.title}/>
                                        <p>{benefit.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className={styles.servedFeaturesSection}>
                <div className={styles.servedFeaturesContainer}>
                    <p className={styles.servedFeatureHeading}>Industries served</p>
                    <p className={styles.servedFeatureText}>From automotive repair networks and car rental companies to logistics hubs and vehicle auction centre, our fixed-camera scanners deliver rapid, pinpoint-accurate damage.</p>
                    <div className={styles.servedFeaturesContent}>
                        
                        <div className={styles.servedFeature}>
                            <Image src='/img/Fleet Management.svg' width={250} height={200} alt='Fleet Management'/>
                            <p className={styles.servedFeatureTitle}>Fleet Management</p>
                            <p className={styles.servedFeatureSubTitle}>Daily vehicle condition reports</p>
                        </div>
                        
                        <div className={styles.servedFeature}>
                            <Image src='/img/Car rental companies.svg' width={250} height={200} alt='Car rental companies' />
                            <p className={styles.servedFeatureTitle}>Car rental companies</p>
                            <p className={styles.servedFeatureSubTitle}>Record vehicle condition before and after rentals to avoid disputes and spot damages</p>
                        </div>
                        
                        <div className={styles.servedFeature}>
                            <Image src='/img/Logistics pre-Delivery Inspections.svg' width={250} height={200} alt='Logistics pre-delivery' />
                            <p className={styles.servedFeatureTitle}>Logistics Pre-Delivery Inspections</p>
                            <p className={styles.servedFeatureSubTitle}>Verify vehicle condition before delivery with quick, automated checks</p>
                        </div>
                        
                        <div className={styles.servedFeature}>
                            <Image src='/img/Auction solutions.svg' width={250} height={200} alt='Auction solutions' />
                            <p className={styles.servedFeatureTitle}>Auto re-marketing/ Auction solutions</p>
                            <p className={styles.servedFeatureSubTitle}>Create reliable inspection reports to boost buyer trust and speed up sales</p>
                        </div>
                        
                        <div className={styles.servedFeature}>
                            <Image src='/img/Automotive Repair Network.svg' width={250} height={200} alt='Automotive Repair Network' />
                            <p className={styles.servedFeatureTitle}>Automotive Repair Networks</p>
                            <p className={styles.servedFeatureSubTitle}>Daily vehicle condition reports</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.additionalSection}>
                <div className={styles.additionalSectionContainer}>
                    <p className={styles.additionalSectionHeading}>Additional Modules for higher accuracy and full coverage</p>
                    <p className={styles.additionalSectionSubHeading}>Upgrade and setup with optional Zebra-strip lighting, under-body imaging, and tire-tread analytics-bolton modules that ensure total 360 insight.</p>
                    <div className={styles.additionalSectionContent}>
                        {additionalSectionData.map((data)=>{
                            return(
                                <div className={styles.additionalSectionBox}>
                                    <div className={styles.additionalSectionImg}>
                                    <Image src={`/img/${data.img}`} layout='fill' objectFit='cover' objectPosition='center' alt={data.title} />
                                    </div>
                                    <div className={styles.additionalSectionInnerBox}>
                                        <p className={styles.additionalSectionTitle}>{data.title}</p>
                                        <p className={styles.additionalSectionText}>{data.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>

            <section className={styles.faqSectionContainer}>
            <div className={styles.faqSection}>
                <div className={styles.faqTitleContainer}>
                <h1 className={styles.faqTitle}>Commonly asked questions</h1>
                <p className={styles.faqSubTitle}>The purpose of a FAQ is generally to provide information on frequent questions or concerns. However, the format is a useful means of organizing information, and text</p>
                </div>
                <div className={styles.questionContainer}>
                    <div className={styles.faqGrid}>
                        {questions["Fixed Camera"][locale].map((item, index)=><QuestionSection keyIndex={index} que={item.Q} ans={item.A}/>)}
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
        </main>
    </div>
  )
}

export default FixedCamera