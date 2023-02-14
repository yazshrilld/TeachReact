import React, { useState } from 'react'

const MultipleRandom = () => {
    const availableDays = ['monday','tuesday','wednesday','thursday','friday']

    const [pick, setPick] = useState([])

    const ranDays = (n) => {
        let days = [];
        for( let i = 0; i < n; i++ ) {
            let myEl = availableDays[Math.floor(Math.random() * availableDays.length)]
            while( days.includes(myEl) ) {
                myEl = availableDays[Math.floor(Math.random() * availableDays.length)]
            // console.log(myEl)
            }
            days.push(myEl)
        }
        setPick(days) 
        console.log("select: ", pick)
        console.log("I am clicked")
    } 

  return (
    <>
        <h1 className='text-center font-semibold uppercase mt-7 underline underline-offset-2'>Choose Random Working Days</h1>
        <div className='mt-2 mx-auto'>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Uzor
            </button>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Yazid
            </button>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Chidi
            </button>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Deji
            </button>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Samuel
            </button>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Nnana
            </button>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Sulaimon
            </button>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => ranDays(2)}
            >
                Kenneth
            </button>
        </div>
        <div className='mx-auto text-black bg-slate-200 px-5 py-7 w-[20%]'>
            {
                `${pick}`
            }
        </div>
    </>
  )
}

export default MultipleRandom

// allocate days by checking if the day in an array is empty, or if an object is empty, if the count is not allocated yet do not go to the next day to fill it up, until it is allocated.