import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

import './StarRating.css'

const StarRating = () => {
    const [hoverRating, setHoverRating] = useState(0)
    const [rating, setRating] = useState(0)

    return (
        <div className="container">
            <h1>Star Rating System</h1>
            <div className="stars">
                {
                    Array.from({ length: 5 }, (_, index) => (
                        <Star
                            key={index}
                            hoverRating={hoverRating}
                            setHoverRating={setHoverRating}
                            rating={rating}
                            setRating={setRating}
                            index={index}
                        />
                    ))
                }
            </div>
            <p>Your rating is {rating}</p>
        </div>
    )
}

const Star = ({ hoverRating, setHoverRating, rating, setRating, index }) => {
    const [active, setActive] = useState(false)

    const currentRating = index + 1
    return (
        <div className="star-cont">
            {active && <span className={`star-tooltip ${active ? "active" : "active"}`}>{currentRating}</span>}
            <FaStar
                className="star"
                onMouseEnter={() => { setHoverRating(currentRating); setActive(true) }}
                onMouseLeave={() => { setHoverRating(0); setActive(false) }}
                onClick={() => setRating(currentRating)}
                fill={currentRating <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"}
            />
        </div>
    )
}

export default StarRating