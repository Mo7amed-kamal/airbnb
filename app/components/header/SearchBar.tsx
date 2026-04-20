"use client";

import { useState } from 'react'
import { SearchIcon, UserIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import Link from 'next/link';


export default function SearchBar() {

    const [input,setInput] = useState("")
    const [numOfInput,setNumOfInput] = useState(1)
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())

    const selectionRange = {
      startDate,
      endDate,
      key: 'selection',
    }
    const handleSelect = (ranges:RangeKeyDict)=> {
      setStartDate( ranges.selection.startDate as Date )
      setEndDate( ranges.selection.endDate as Date )
    }

  return (
    <>
    
        <div className='container  flex items-center py-2 '>
          
        <div className="relative w-full">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Start your City"
    className="w-full px-4 pr-12 py-2 rounded-xl border border-gray-300 
    focus:outline-none focus:ring-2 focus:ring-blue-500 
    focus:border-transparent transition duration-200 
    placeholder-gray-400 text-gray-700 shadow-sm"
  />

<SearchIcon
  className="absolute right-2 top-1/2 -translate-y-1/2 
  bg-red-500 text-white rounded-full p-1 h-8 w-8"
/>
</div>


             {input && <div className='absolute top-full left-1/2 -translate-x-1/2 bg-white'>
              <DateRangePicker
              ranges={[selectionRange]}
                onChange={ handleSelect }
                minDate={new Date()}
                rangeColors={['#800020']}
                />
             
            
            <div className=' flex items-center  border-b bg-transparent'>
              <h2 className='flex-grow font-semibold text-2xl p-3 '>Number of Gustes</h2>
              <UsersIcon className='h-6'/>
              <input type="number" className='w-14 p-3 pl-3'
              min={1}
              value={numOfInput}
              onChange={ (e)=> setNumOfInput( Number( e.target.value ) )  }
              />
            </div>

                <div className=' flex gap-10 mx-auto items-center justify-center  p-3'>
                  <button onClick={()=> setInput("")} className='cursor-pointer  px-6 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition duration-200'>Cancel</button>
                  <Link className='  px-6 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-200 shadow-md'
                    href={
                    {pathname:'/search',
                    search:`?location=${input}&startDate${startDate.toISOString()}&endDate${endDate.toISOString()}&numOfGustes${numOfInput}`}
                  }
                  >Search</Link>
                </div>
                    
                  
             </div>}
             
             
    </div>
    </>
  )
}
