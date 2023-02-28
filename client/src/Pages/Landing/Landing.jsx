import { borderRadius } from '@mui/system'
import React from 'react'
import LandingPic from '../../assets/doctorLanding.jpeg'
import Circles from '../../Components/Circles/Circles'

const Landing = () => {
  return (
    <>
    <section className="top-section">
        <div className="containerMain">
            <div className="right">
                <h2>The Complete Healthcare Solution</h2>
                <p className="landingMain">More than 100 trusted doctors are here for you</p>
                <button className="getStartedbutton">Get Started</button>
            </div>
            <div className="leftMain">
                <div className="doctorImg">
                    <img src={LandingPic} style={{
                        height: '250px',
                        borderRadius: '50px'
                    }}/>
                </div>
            </div>
        </div>
    </section>
    <section className="bottomSection">
        <div className="bottomSectionContainer">
            <Circles />
            {/* <div className="box">Cold, Cough or Fever</div>
            <div className="box">Stomachache</div>
            <div className="box">Breathing Issues</div>
            <div className="box">Blood Pressure</div>
            <div className="box">Insomnia</div>
            <div className="box">Sugar Levels</div> */}
        </div>
        <div className="bottomestSectionContainer">
            <div className="leftbottomest">
                <h2>Consult Top Doctors Online</h2>
            </div>
            <div className="rightbottomest">
                <p>Doctors across 35+ specialties</p>
                <p>Find Doctors according to your desired prefernces</p>
                <p>Start Consulting!</p>
            </div>
        </div>
        <div className="bottomestestSectionContainer">
            <div className="leftbottomest">
                <h2>Book Lab Test and Health Checks</h2>
            </div>
            <div className="rightbottomest">
                <p>NABL - accredited labs for accurate results  </p>
                <p>Online lab report results 4 hours</p>
                <p>Lab Reports done by experts</p>
            </div>
        </div>
        <div className="bottomestx4SectionContainer">
            <div className="leftbottomest">
                <h2>Online ChatBot</h2>
            </div>
            <div className="rightbottomest">
                <p>24/7 chatbot powered by ChatGPT API</p>
                <p>AI powered Medical Assistance</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Landing
