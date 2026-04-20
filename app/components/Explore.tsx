import { it } from "node:test";
import { exploreData } from "../utils/api";
import SmallCard from "./SmallCard";

export type ExploreData = {
    img:string,
    location:string,
    distance:string
}
type exploreItem = ExploreData[];


export default async function Explore() {

   const getExploreData: exploreItem = await exploreData()
   console.log(getExploreData);
   
    
  return (

    <section >
        
        <div className="container mx-auto  pt-6 pb-5 ">
            <h2 className=" font-semibold text-3xl my-7">Explore Nearby</h2>
       <div className=" grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">

            
            <SmallCard    />
       
       </div>
            
        </div>
        
        
        
        </section>
  )
}
