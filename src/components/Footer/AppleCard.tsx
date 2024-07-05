import React from 'react'
import "./MobileCard.css"

const AppleCard = () => {
  return (
    <div className="app-store-card">
      <img src="apple.svg" alt="Apple Logo" className="apple-logo" />
      <div className="app-store-text">
        <p className="available-text">Available on the</p>
        <p className="app-store-text">App Store</p>
      </div>
    </div>
  )
}

export default AppleCard