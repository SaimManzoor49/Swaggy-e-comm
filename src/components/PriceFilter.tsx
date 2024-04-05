import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
    return (
        <div>
            <Slider range allowCross={false}/>
        </div>
    )
}

export default PriceFilter