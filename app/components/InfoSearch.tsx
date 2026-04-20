import React from 'react'
import { getSearchResult } from '../utils/api';
import MapUI from './Mapbox';


export type ListingCard = {
  img:string
  location:string
  title:string
  description:string
  star:number
  price:string
  total:string
}

type ListingCardItem = ListingCard[]

export default async function InfoSearch() {
  
  const searchResultData :ListingCardItem = await getSearchResult()
      console.log("hamade he is data", searchResultData);


  return (
    <>

    <div className='flex '>

    <div>
    {searchResultData.map( (item)=> 
      
      <div className="  max-w-2xl px-2 m-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
      
      {/* Image */}
      <div className="relative">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-56 object-cover"
        />

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow text-sm font-semibold flex items-center gap-1">
          ⭐ {item.star}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Location */}
        <p className="text-gray-500 text-sm">{item.location}</p>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">
          {item.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {item.description}
        </p>

        {/* Divider */}
        <div className="border-t pt-3 flex justify-between items-center">
          
          {/* Price */}
          <div>
            <p className="text-sm text-gray-500">{item.price}</p>
            <p className="text-lg font-bold text-black">
              {item.price}
            </p>
          </div>

          {/* Button */}
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
            View
          </button>

        </div>
      </div>
    </div>
      
      )}

    </div>
      <MapUI/>




    </div>

    
    </>
  )
}
