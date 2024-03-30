'use client'
import React from 'react'
import { Button } from './ui/button'

const CategoryFilter = () => {

    const categories = [
        {
            title:'furniture',
            noOfProducts:12
        },
        {
            title:'Clothes',
            noOfProducts:22
        },
        {
            title:'Toys',
            noOfProducts:122
        },
        {
            title:'Lights',
            noOfProducts:3
        },
        {
            title:'Foods',
            noOfProducts:9322
        },
        {
            title:'Electronics',
            noOfProducts:0
        },
    ]

  return (
    <div>
        {categories.map((cat,i)=>(
        <div className="flex items-center justify-between my-1" key={i}>
                <span className='hover:bg-transparent hover:underline hover:text-secondary p-0 m-0 cursor-pointer' onClick={()=>{console.log("Hello World")}}>{cat.title}</span>
                <p className='bg-muted p-0.5 text-xs font-medium px-1'>{cat.noOfProducts}</p>
            </div>
        ))}
    </div>
  )
}

export default CategoryFilter