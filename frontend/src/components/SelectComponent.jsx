import React, { useContext } from 'react'
import { StudentDataContext } from '../contexts/context';


function SelectComponent(props) {

    const data = useContext(StudentDataContext)
    const obj = data.studData

    const options = props.options;
    
    const handleChange = (e) => {
        obj[props.identifier] = Number(e.target.value)
        data.setStudData(obj)
        // console.log(data.studData)
    }
    return (
        <div className="m-2 mx-1 h-[8vh] flex justify-center items-center mt-5">

            <form className="max-w-sm mx-auto">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.ilabel}</label>
                <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20vw]" onChange={handleChange}>
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