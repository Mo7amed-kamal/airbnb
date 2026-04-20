import { format } from "date-fns"
import { getSearchResult } from "../utils/api"
import InfoSearch from "../components/InfoSearch"

type Prop = {
  searchParams : Promise<{
  location:string
  startDate:string
  endDate:string
  numOfGustes:string
  }>
}

export default async function page({searchParams}:Prop) {

    const promise = await searchParams
    const location = promise.location
    // const startDate = promise.startDate
    // const endDate = promise.endDate
    // const numOfGustes = promise.numOfGustes

    const filters = ['Cancellation Flexibilty','Type of Place','Price','Rooms and Beds','More filters']


  
    

  return (
    <>
      <section className="container mx-auto  py-5">
      <h1 className=" text-2xl font-semibold ">Location: {location} </h1>

     <div className=" flex items-center space-x-2 my-5 ">
     {filters.map( (filter)=> <div >
          <button type="button" className="filter-btn "> {filter} </button>
        </div> )}
     </div>

      {/* Search Details */}
      <InfoSearch  />


        </section>


    </>
  )
}
