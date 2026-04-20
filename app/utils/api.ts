
export const exploreData = async ()=> {
    try{
        const response = await fetch(` ${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G `)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.log(error);
    }
}



export const LiveData = async ()=> {
    try{
        const response = await fetch( `${process.env.NEXT_PUBLIC_BASE_URL}//b/VHHT` )
        const liveData = await response.json()
        return liveData
    }
    catch(error) {
        console.log(error);
        
    }

} 

export async function getSearchResult() {
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS` )
    const searchResultDate = await res.json()
    console.log(searchResultDate);
    
    return searchResultDate
    }
    catch (error) {
        console.log(error);
        
    }
}

