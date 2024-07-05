import React from 'react'
import Header from './components/header/Header'
import Statistics from './components/statistics/Statistics'
import { ICard } from './components/types'

import './landing.css'
import Card from './components/card/Card'
import Footer from './components/Footer/Footer'

const cardsData: ICard[] = [
    {
        name: "Lorenzo",
        username: "@lorenzoo",
        description: "Amazing Telegram bot! Provides real-time crypto prices and news",
        image: "lorenzo.png",
        id: 1
    },
    {
        name: "Adalina",
        username: "@ada",
        description: "Must-have bot for crypto traders. Accurate signals and analysis",
        image: "adalina.png",
        id: 2
    },
    {
        name: "Alexander",
        username: "@alex_x",
        description: "Superb cryptocurrency bot! Quick updates and reliable data",
        image: "alexander.png",
        id: 3
    },
    {
        name: "Rushana",
        username: "@Hana",
        description: "Efficient and user-friendly bot. Simplifies crypto trading tasks",
        image: "rushana.png",
        id: 4
    }
];

const LandingComponent = () => {
  return (
    <div className="main-container">
        <Header />
        <div className="body">
            <Statistics />
            <div className="cards-area">
                {cardsData.map((card) => (
                    <Card key={card.id} data={card} />
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default LandingComponent