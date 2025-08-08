import Image from 'next/image'
import SEO from '../components/SEO'
import styles from '../styles/faq.module.css'
import { useState } from 'react';
import language from '../languages/faq.json'
import { questions } from '../const/faq'

export default function faq({locale}) {

    const [currentSelection, setCurrentSelection] = useState("General")

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

    return (
        <div className={styles.container}>
            <SEO
                title={language['seo title'][locale]}
                description={language['seo desc'][locale]}
                image='https://inspektlabs.com/img/car.png'
                url='https://inspektlabs.com/faq/'
                keywords={language['seo keywords'][locale]}
                page='faq'
            />
            <main className={styles.main}>
                <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
                <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
                <div className={styles.questionContainer}>
                    <div className={styles.searchContainer}>
                        <input 
                            type='text'
                            placeholder='Search the question you have'
                            className={styles.search}
                        ></input>
                        <div className={styles.tabs}>
                            <button style={currentSelection === "General" ? {color: "white", backgroundColor: "#27272A"} : {color: "#27272A", backgroundColor: "white"}} onClick={()=>setCurrentSelection("General")}>{language["General"][locale]}</button>
                            <button style={currentSelection === "Damage Detection" ? {color: "white", backgroundColor: "#27272A"} : {color: "#27272A", backgroundColor: "white"}} onClick={()=>setCurrentSelection("Damage Detection")}>{language["Damage Detection"][locale]}</button>
                            <button style={currentSelection === "Workflow" ? {color: "white", backgroundColor: "#27272A"} : {color: "#27272A", backgroundColor: "white"}} onClick={()=>setCurrentSelection("Workflow")}>{language["Workflow"][locale]}</button>
                            <button style={currentSelection === "Our Core Technology" ? {color: "white", backgroundColor: "#27272A"} : {color: "#27272A", backgroundColor: "white"}} onClick={()=>setCurrentSelection("Our Core Technology")}>{language["Our Core Technology"][locale]}</button>
                            <button style={currentSelection === "Claim Assessment" ? {color: "white", backgroundColor: "#27272A"} : {color: "#27272A", backgroundColor: "white"}} onClick={()=>setCurrentSelection("Claim Assessment")}>{language["Claim Assessment"][locale]}</button>
                            <button style={currentSelection === "Photo and Video Capture" ? {color: "white", backgroundColor: "#27272A"} : {color: "#27272A", backgroundColor: "white"}} onClick={()=>setCurrentSelection("Photo and Video Capture")}>{language["Photo and Video Capture"][locale]}</button>
                            <button style={currentSelection === "Fraud Detection" ? {color: "white", backgroundColor: "#27272A"} : {color: "#27272A", backgroundColor: "white"}} onClick={()=>setCurrentSelection("Fraud Detection")}>{language["Fraud Detection"][locale]}</button>
                        </div>
                    </div>
                    <div className={styles.selectContainer}>
                        <select value={currentSelection} onChange={(e)=>setCurrentSelection(e.target.value)}>
                            <option value="General">{language["General"][locale]}</option>
                            <option value="Damage Detection">{language["Damage Detection"][locale]}</option>
                            <option value="Workflow">{language["Workflow"][locale]}</option>
                            <option value="Our Core Technology">{language["Our Core Technology"][locale]}</option>
                            <option value="Claim Assessment">{language["Claim Assessment"][locale]}</option>
                            <option value="Photo and Video Capture">{language["Photo and Video Capture"][locale]}</option>
                            <option value="Fraud Detection">{language["Fraud Detection"][locale]}</option>
                        </select>
                    </div>
                    <div className={styles.allQuestionContainer}>
                        {questions[currentSelection][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
                    </div>
                </div>
            </main>
        </div>
    );
}