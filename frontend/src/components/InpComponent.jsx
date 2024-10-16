import React from 'react'

function InpComponent(props) {
    return (
        <div className="m-2 mx-1 h-[8vh] flex justify-center items-center mt-5">
            <div className="">
                <label htmlFor="input-label" className="block text-sm font-medium mb-2">{props.iplaceholder}</label>
                <input type={props.itype} id="input-label" className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none w-[20vw]" placeholder={props.iplaceholder}/>
            </div>
        </div>
    )
}

export default InpComponent