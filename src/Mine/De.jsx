import React, { useState } from 'react'

const De = () => {
    const images = [
        'https://images.unsplash.com/photo-1753153402701-99e514ea84bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1683009426952-13567b4fa28b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1752035682769-595f8358ac51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'
    ]
    const [current,setCurrent]=useState(0)
    const prevIndex = current === 0 ? images.length-1 : current-1;
    const nextIndex = current === images.length-1 ? 0 : current + 1;
    const next = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    const previous = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
  return (
    <>
    <div>
        <div className='flex justify-center items-center w-[100%] gap-4 mt-5'>
            <div className='bg-amber-900 rounded-2xl w-[300px] h-[300px]'>
                <img src={images[prevIndex]} alt="Previous" className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='bg-purple-900 rounded-2xl w-[300px] h-[350px]'>
            <img src={images[current]} alt="Previous" className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='bg-stone-900 rounded-2xl w-[300px] h-[300px]'>
            <img src={images[nextIndex]} alt="Previous" className='w-full h-full object-cover rounded-2xl
            '/>
            </div>
        </div>
    </div>
    <div className='flex justify-center items-center mt-5'>
        <button className='p-3 w-[90px] text-white bg-green-700 rounded m-2' onClick={previous}>Previous</button>
        <button className='p-3 w-[90px] text-white bg-green-700 rounded m-2' onClick={next}>Next</button>
    </div>
    </>
  )
}

export default De
