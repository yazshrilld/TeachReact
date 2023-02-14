import React from 'react'
import { useState } from 'react'
import Select from 'react-select';

const Selected = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [input, setInput] = useState("");

    const handleInputChange = (query) => {
        setInput(query)
        // const fetch = () => {
        //     let bre
        // }
    };

//    const query = "dddd"

  return (
    <>
        Hello Yazid Selected
        <Select
            className='border-red-300 text-yellow-500 w-[30%] m-2 mx-auto'
            defaultValue={null}
            onInputChange={handleInputChange}
            options={options}
            menuIsOpen={input.length >= 4}
        />
        {
            console.log(input)
        }
    </>
  )
}

export default Selected

/*
const randomSelect = () => {
    const newList = {}
    for (let item of ballot) {
      console.log(item)
      const lent = item.items.length
      const ran = Math.floor(Math.random() * lent)
      // console.log(ran)
      const randomlySelected = item.items[ran]
      // console.log(randomlySelected)
      newList[item.id] = randomlySelected.title
    }
    console.log("newlist: ",newList)
    setCategoryList(newList) 
  }
*/