import { useState } from "react"
import './RandomColor.css'

const RandomColor = () => {
    const [hexColor, setHexColor] = useState("ffffff")
    const [rgbColor, setRgbColor] = useState("rgb(255, 255, 255)")
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)

    const generateColor = () => {
        const hexCol = Math.floor(Math.random() * 16777216).toString(16).padStart(6, "0")
        const rgbCol = hexToRgb(hexCol)
        setRgbColor(rgbCol)
        setHexColor(hexCol)
    }

    const hexToRgb = (hex) => {
        // const decimal = parseInt(hex.slice(1), 16)
        const decimal = parseInt(hex, 16)
        const r = (decimal >> 16) & 255
        const g = (decimal >> 8) & 255
        const b = decimal & 255
        return `rgb(${r}, ${g}, ${b})`
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setCopiedToClipboard(!copiedToClipboard)
        setTimeout(() => setCopiedToClipboard(false), 5000)
    }

    return (
        <div className="container" style={{ backgroundColor: `#${hexColor}` }}>
            <h1>Random Color Generator</h1>
            <button onClick={() => generateColor()}>Generate</button>
            <div>
                <div className="wrapper">
                    In HEX &nbsp;
                    <span onClick={() => copyToClipboard(`#${hexColor}`)} onMouseOver={() => setCopiedToClipboard(false)} className="color-container">
                        {`#${hexColor}`}
                    </span>
                    <span className="tooltip">{copiedToClipboard ? "Copied" : "Copy to clipboard"}</span>
                </div>
                <div className="wrapper">
                    In RGB &nbsp;
                    <span onClick={() => copyToClipboard(`${rgbColor}`)} onMouseOver={() => setCopiedToClipboard(false)} className="color-container">
                        {rgbColor}
                    </span>
                    <span className="tooltip">{copiedToClipboard ? "Copied" : "Copy to clipboard"}</span>
                </div>
            </div>
        </div>
    )
}

export default RandomColor