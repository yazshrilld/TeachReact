import React from "react";

const TextInput = ({
  value,
  onChange,
  id,
  name,
  label,
  className,
  error,
  touched,
  type="text",
  disabled = false,
}) => {

    const NumberFormatChange = (e) => {

        let name = [e.target.name];
        let value = e.target.value
        console.log(name, value)
    }

  return (
    <>
      <div className="relative mx-4 mt-4">
        <input
          id={id}
          className={`block rounded-md py-3 px-2 text-sm text-gray-900 bg-transparent border-1 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:border-2 peer  ${
            className?.trim()?.length ? className : "w-full"
          }
              disabled:cursor-not-allowed disabled:opacity-40`}
          placeholder=" "
          value={value}
          onChange={NumberFormatChange}
          disabled={disabled}
          name={name}
          type={type}
        />
        <label 
          htmlFor={id} 
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-700 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
        >
          {label}
        </label>
        <p className="text-red-500 my-2 text-sm"></p>
      </div>
    </>
  );
};

export default TextInput;
