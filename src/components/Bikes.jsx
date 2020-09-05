import React, {useState} from 'react';
import products from "../products"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bike from './Bike';
const Carousel = require('react-responsive-carousel').Carousel;

function Bikes() {
    const [data, setData] = useState(products)
    return (
        <div className="carousel-section">
            <Carousel
                showArrows={true}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                stopOnHover={false}
                interval={5000}
                transitionTime={800}
                className="carousel"
            >
                {
                    data.slice(0, 9).map((product, i) =>
                        <Bike key={i} product={product} />
                    )
                }
            </Carousel>
        </div>
    )
}

export default Bikes
