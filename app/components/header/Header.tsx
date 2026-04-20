import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className=' sticky top-0 z-50 bg-white shadow-2xl p-3'>

    <div className='container mx-auto grid grid-cols-3 relative'>
    <Link href={'/'}>
     {/* Left - Logo */}
     <div className="flex items-center">
        <h1 className="text-red-500 font-bold text-2xl">
            airbnb
          </h1>
        </div>

    </Link>
    
    <SearchBar />
    <Navbar/>
    </div>


    </header>
  )
}
