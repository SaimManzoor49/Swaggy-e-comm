'use client'
import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
    return (
        <div className='px-4'>
            <Slider range allowCross={false}/>
        </div>
    )
}

export default PriceFilter