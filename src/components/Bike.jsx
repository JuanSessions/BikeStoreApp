import React from 'react'

function Bike(props) {
    const {name, img} = props.product
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt=""/>
        </div>
    )
}

export default Bike
