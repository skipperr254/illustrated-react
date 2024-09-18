import { useState } from "react"
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs"
import images from './data.js'
import './Carousel.css'

const Carousel = () => {
    const [active, setActive] = useState(0)

    const showPrev = () => {
        setActive(prevActive => {
            return prevActive <= 0 ? images.length - 1 : prevActive - 1
        })
    }

    const showNext = () => {
        setActive(prevActive => {
            return prevActive >= images.length - 1 ? 0 : prevActive + 1
        })
    }

    return (
        <div className="carousel">
            {
                images.map((_, index) => (
                    <img src={images[index].imageUrl} alt={images[index].alt} style={{ translate: `-${100 * active}%` }} />
                ))
            }
            <button className="arrow arrow-left" onClick={showPrev}>
                <BsArrowLeftCircleFill />
            </button>
            <button className="arrow arrow-right" onClick={showNext}>
                <BsArrowRightCircleFill />
            </button>
        </div>
    )
}

export default Carousel