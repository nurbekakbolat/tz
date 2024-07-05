import { ICard } from '../types'
import "./Card.css"

interface CardProps {
    data: ICard
}

const Card = ({data}: CardProps) => {
  return (
    <div className="card-wrapper">
            <div className="card">
        <div className="card-header">
            <img src={data.image} alt="profile" className="avatar" />
            <div className="user-info">
                <label className="name card-main-text">{data.name}</label>
                <label className="username">{data.username}</label>
            </div>
        </div>
        <p className='description card-main-text'>{data.description}</p>
    </div>
     </div>

  )
}

export default Card