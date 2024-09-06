import './Accordion.css';
import { useState } from 'react';

const Accordion = ({ items }) => {

    const [active, setActive] = useState(false);

    const handleAccordion = (e) => {
        e.target.classList.add('active')
    }

    return (
        <div className="accordion-container">
            <h1>Frequently Asked Questions</h1>
            {
                items.map(item => (
                    <div key={item.title} className="accordion" onClick={handleAccordion}>
                        <div className="accordion-header">
                            <p className="accordion-title">
                                {item.title}
                            </p>
                            <span className="accordion-button">+</span>
                        </div>
                        <p className="accordion-content">
                            {item.content}
                        </p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion;