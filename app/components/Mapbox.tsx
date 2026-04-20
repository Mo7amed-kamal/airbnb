"use client";


export default function MapUI() {
  return (
    <div className="relative w-1/2 h-screen rounded-2xl overflow-hidden shadow-lg">
      
      {/* Background (Fake Map Style) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300">
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Roads simulation */}
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white opacity-60"></div>
        <div className="absolute top-2/3 left-0 w-full h-[2px] bg-white opacity-60"></div>
        <div className="absolute left-1/4 top-0 h-full w-[2px] bg-white opacity-60"></div>
        <div className="absolute left-2/4 top-0 h-full w-[2px] bg-white opacity-60"></div>
      </div>

      {/* Marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
        <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-bounce"></div>
      </div>

      {/* Top Search Bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%]">
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Search location..."
            className="flex-1 outline-none text-sm"
          />
          <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition">
            Search
          </button>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-2">
        <button className="bg-white w-10 h-10 rounded-lg shadow hover:bg-gray-100">+</button>
        <button className="bg-white w-10 h-10 rounded-lg shadow hover:bg-gray-100">-</button>
      </div>

      {/* Location Button */}
      <div className="absolute right-4 bottom-4">
        <button className="bg-white px-4 py-2 rounded-xl shadow hover:bg-gray-100 text-sm">
          My Location
        </button>
      </div>
    </div>
  );
}