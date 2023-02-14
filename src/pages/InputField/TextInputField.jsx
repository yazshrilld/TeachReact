import React from 'react'
import TextInput from '../../components/TextInput/TextInput'

const TextInputField = () => {
  return (
    <>
      <TextInput 
         className="border w-[20rem]"
         name="depositAccountNumber"
         label="Account Number"
         id="depositAccountNumber"
         placeholder="Account Number"
      />

      <TextInput 
         className="border w-[20rem]"
         name="depositAccountBalance"
         label="Account Balance"
         id="depositAccountBalance"
         placeholder="Account Balance"
      />
    </>
  )
}

export default TextInputField