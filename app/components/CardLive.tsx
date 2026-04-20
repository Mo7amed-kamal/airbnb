const liveData = [
  {
    title: "Outdoor Getaways",
    desc: "Enjoy nature and fresh air escapes",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Unique Stays",
    desc: "Stay in creative and unusual homes",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    title: "Entire Homes",
    desc: "Comfortable places all to yourself",
    img: "https://images.unsplash.com/photo-1502672023488-70e25813eb80"
  },
  {
    title: "Pet Friendly",
    desc: "Bring your furry friends along",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
  },
  {
    title: "City Escapes",
    desc: "Stay in the heart of top cities",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
  },
  {
    title: "Beachfront",
    desc: "Wake up to ocean views",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  }
];

export default function LiveAnywhere() {
  return (
    <section className="px-6 py-10">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2">
        Live Anywhere
      </h2>

      <p className="text-gray-500 mb-6">
        Explore flexible stays around the world
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {liveData.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
          >
            
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}