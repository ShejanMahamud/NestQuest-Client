import React from 'react'
import Advertisement from '../components/Advertisement'
import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import TrustedCompanies from '../components/TrustedCompanies'

const Home = () => {
  return (
    <>
    <Banner/>
    <TrustedCompanies/>
    <Advertisement/>
    <Reviews/>
    </>
  )
}

export default Home