import { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './Carousel.css'
import images from './data.js'

const Carousel = () => {
    const [active, setActive] = useState(0)

    return (
        <div className="carousel-container">
            <h1>
                Image Slider/Carousel
            </h1>
            <div className="carousel">
                <img src={images[0].imageUrl} alt="" />
            </div>
            <button>
                <FaArrowCircleLeft />
            </button>
            <button>
                <FaArrowCircleRight />
            </button>
        </div>
    )
}

export default Carousel