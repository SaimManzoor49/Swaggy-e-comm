import React from 'react'

const COLORS = [
    { displayName: 'Red', name: 'red', hexCode: '#FF0000' },
    { displayName: 'Green', name: 'green', hexCode: '#00FF00' },
    { displayName: 'Blue', name: 'blue', hexCode: '#0000FF' },
    { displayName: 'Yellow', name: 'yellow', hexCode: '#FFFF00' },
    { displayName: 'Orange', name: 'orange', hexCode: '#FFA500' },
    { displayName: 'Purple', name: 'purple', hexCode: '#800080' },
    { displayName: 'Pink', name: 'pink', hexCode: '#FFC0CB' },
    { displayName: 'Cyan', name: 'cyan', hexCode: '#00FFFF' }
];



const ColorFilter = () => {
  return (
    <div className='flex gap-3 flex-wrap p-1'>
        {COLORS.map((color)=>(
            <div key={color.hexCode} className={`min-h-6 min-w-6 rounded-full hover:ring-2 ring-secondary ring-offset-1`} style={{backgroundColor:`${color.hexCode}`}}></div>
        ))}
    </div>
  )
}

export default ColorFilter