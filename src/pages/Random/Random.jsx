import React, { useState } from 'react'

const Random = () => {
    const cities = [
        {
            nameCity: "italy"
        },
        {
            nameCity: "Kielce"
        },
        {
            nameCity: "england"
        }
        ,
        {
            nameCity: "austra"
        }
        ,
        {
            nameCity: "france"
        }
        ,
        {
            nameCity: "spain"
        }
        ,
        {
            nameCity: "nigeria"
        }
    ]
    const [pick, setPick] = useState(0)

    const randomSelect = (e) => {
        const len = cities.length
        console.log(len)
        setPick(Math.floor(Math.random() * len))
    }

  return ( 
    <>
        <h1 className=''>Hello Random Yazid</h1>
        <div className='mt-2 mx-auto'>
            <button 
                className='text-black border-cyan-500 w-[20%]  p-2 bg-green-600 m-8 px-6'
                onClick={randomSelect}
            >
                change
            </button>
        </div>
        <div className='mx-auto text-black bg-slate-200 px-5 py-7 w-[20%]'>
            {cities[pick].nameCity}
            {
                console.log(pick)
            }
        </div>
    </>
  )
}

export default Random

    // const newList = {}
    // for (let item of ballot) {
    //   console.log(item)
    //   const lent = item.items.length
    //   const ran = Math.floor(Math.random() * lent)
    //   // console.log(ran)
    //   const randomlySelected = item.items[ran]
    //   // console.log(randomlySelected)
    //   newList[item.id]=randomlySelected.title
    // }
    // console.log("newlist: ",newList)
    // setCategoryList(newList)