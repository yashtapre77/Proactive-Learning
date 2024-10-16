import React from 'react'

function SelectComponent(props) {

    const options = props.options;
    console.log(options)
    return (
        <div className="m-2 mx-1 h-[8vh] flex justify-center items-center mt-5">

            <form className="max-w-sm mx-auto">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.ilabel}</label>
                <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20vw]">
                    {Object.entries(options).map((val, index) => {
                        return (
                        <option className="text-gray-300" key={index} value={val[0]}>{val[1]}</option>
                        // console.log(val) 
                    )})}
                </select>
            </form>


            

        </div>
    )
}

export default SelectComponent