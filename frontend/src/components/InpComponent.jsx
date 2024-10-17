import React from 'react'
import { useContext } from 'react';
import { StudentDataContext } from '../contexts/context';

function InpComponent(props) {

    const data = useContext(StudentDataContext)
    const obj = data.studData

    
    const handleInp = (e) => {
        if  (props.type === 'number') {
            obj[props.identifier] = Number(e.target.value)
        }
        else{
            obj[props.identifier] = e.target.value
        }
        
        data.setStudData(obj)
        // console.log(data.studData)
    }

    return (
        <div className="m-2 mx-1 h-[8vh] flex justify-center items-center mt-5">
            <div className="">
                <label htmlFor="input-label" className="block text-sm font-medium mb-2">{props.iplaceholder}</label>
                <input type={props.itype} id="input-label" className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none w-[20vw]" placeholder={props.iplaceholder} onChange={handleInp}/>
            </div>
        </div>
    )
}

export default InpComponent