import React, {useState} from 'react'

function Contact() {
    const [openMap, setOpenMap] = useState(false)
    const toggleMap = ()=>{
        setOpenMap(!openMap)
    }
    return (
        <div id="contact-container" className="page-section">
            <h2>Contact</h2>
            <div className="contact-text">
            <p>Phone:0049 123456789</p>
            <p>Email: bikestore@gmail.com</p>
            <p>Adress: Whatever 23, 10179 Berlin</p>
            <button onClick={toggleMap}>{!openMap? "open google maps": "close google maps"}</button>
       
            {openMap? <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9717.962804224575!2d13.461009078969175!3d52.48835654145583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f18c6d75659%3A0xa399cdf1f5370acb!2sBerlin!5e0!3m2!1sen!2sde!4v1598980485460!5m2!1sen!2sde" 
            width="600" height="450" frameBorder="0" allowFullscreen="" 
            ariaHidden="false" tabIndex="0"></iframe> : null}
        </div>
        </div>
    )
}

export default Contact
