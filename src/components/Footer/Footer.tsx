import React from 'react'
import GoogleCard from './GoogleCard'
import AppleCard from './AppleCard'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="mobile-cards">
      <GoogleCard />
      <AppleCard />
      </div>
    </div>
  )
}

export default Footer