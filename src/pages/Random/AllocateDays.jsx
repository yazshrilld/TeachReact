import React, { useState } from 'react'

const AllocateDays = () => {
    const staff = [
        'Yazid',
        'Uzor',
        'Chidi',
        'Deji',
        'Sulaimon',
        'Samuel',
        'Kenneth',
        'Nnana'
    ]
    const days = {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
    }
    const [pick, setPick] = useState("")

    const allocation = (n) => {
        const staffSelection = []
        const selection = {}
        for( let i = 0; i < n; i++ ) {
            let myStaff = staff[Math.floor(Math.random() * staff.length)]
            const day = days
            console.log(day.monday)
            for( let dayes of day ) {
                // console.log(dayes)
            }
        }
        return staffSelection
    }

  return (
    
    <>
        <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={() => allocation(1)}
            >
                show
            </button>
      
    </>
  )
}

export default AllocateDays

/*
    use for loop to loop through the array of staff,
    from the loop, get a random value from the array,
    check using an if statement for the days object keys for the least value(this is with using minimum value in an array or length of an array) and insert the random selected staff and remove duplucate values from a key of the days object,
    get minimum length                             
*/