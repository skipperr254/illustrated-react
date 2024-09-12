import { FaRegStar, FaStar } from "react-icons/fa"
import "./StarRating.css"

const StarRating = () => {
    return (
        <div className="container">
            <h1>Star Rating System</h1>
            <div className="stars">
                <FaRegStar className="star hollow-star" />
                <FaStar className="star solid-star" />
            </div>
        </div>
    )
}

export default StarRating