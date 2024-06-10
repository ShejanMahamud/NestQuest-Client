import React from 'react'
import Advertisement from '../components/Advertisement'
import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import TrustedCompanies from '../components/TrustedCompanies'

const Home = () => {
  return (
    <>
    <Banner/>
    <TrustedCompanies/>
    <Advertisement/>
    <Services/>
    <Reviews/>
    </>
  )
}

export default Home