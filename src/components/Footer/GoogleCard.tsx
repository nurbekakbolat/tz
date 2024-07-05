import React from 'react'
import "./MobileCard.css"

const GoogleCard = () => {
  return (
    <div className="app-store-card">
      <img src="google_play.svg" alt="Google play" className="google-logo" />
      <div className="app-store-text-container">
        <p className="available-text">get it on</p>
        <p className="app-store-text">Google play</p>
      </div>
    </div>
  )
}

export default GoogleCard