import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import InfoSection from '../components/InfoSection'
import {homeObjOne,homeObjThree,homeObjTwo} from '../components/InfoSection/Data'
import MainInfo from '../components/MainInfo'
import { homeObjFour } from '../components/MainInfo/Data'
import Footer from '../components/Footer'

function Home() {

    const [isOpen,setIsOpen]= useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Banner/>
            <MainInfo {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <MainInfo {...homeObjFour}/>
            <Footer/>
        </>
    )
}

export default Home
