import { ExploreData } from './Explore'

let uniqueData = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    location: "Dubai, UAE",
    title: "Luxury Beach House",
    description: "Amazing sea view villa",
    star: 4.8,
    price: "$250/night",
    total: "$1500 total"
  },
  {
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    location: "Paris, France",
    title: "City Apartment",
    description: "Near Eiffel Tower",
    star: 4.7,
    price: "$180/night",
    total: "$900 total"
  },
  {
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    location: "London, UK",
    title: "Modern Flat",
    description: "Central location",
    star: 4.6,
    price: "$200/night",
    total: "$1100 total"
  },
  {
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    location: "New York, USA",
    title: "Skyline Studio",
    description: "Heart of Manhattan",
    star: 4.9,
    price: "$300/night",
    total: "$1800 total"
  },
  {
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    location: "Cairo, Egypt",
    title: "Nile View Apartment",
    description: "View of the Nile",
    star: 4.5,
    price: "$120/night",
    total: "$700 total"
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    location: "Istanbul, Turkey",
    title: "Historic Flat",
    description: "Old city vibes",
    star: 4.6,
    price: "$160/night",
    total: "$950 total"
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    location: "Barcelona, Spain",
    title: "Cozy City Loft",
    description: "Vibrant city life",
    star: 4.7,
    price: "$190/night",
    total: "$1000 total"
  },
  {
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    location: "Rome, Italy",
    title: "Classic Apartment",
    description: "Historic center stay",
    star: 4.6,
    price: "$210/night",
    total: "$1150 total"
  },
  {
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    location: "Sydney, Australia",
    title: "Harbor View Home",
    description: "Near Opera House",
    star: 4.8,
    price: "$260/night",
    total: "$1400 total"
  },

  {
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80",
    location: "Cape Town, South Africa",
    title: "Mountain View Home",
    description: "Nature + ocean mix",
    star: 4.7,
    price: "$200/night",
    total: "$1200 total"
  },
  {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    location: "Bangkok, Thailand",
    title: "City Condo",
    description: "Modern skyline view",
    star: 4.5,
    price: "$140/night",
    total: "$800 total"
  },
  {
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
    location: "Moscow, Russia",
    title: "Luxury Apartment",
    description: "Central Moscow stay",
    star: 4.4,
    price: "$160/night",
    total: "$950 total"
  },
  {
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    location: "Amsterdam, Netherlands",
    title: "Canal House",
    description: "Beautiful canal view",
    star: 4.7,
    price: "$220/night",
    total: "$1300 total"
  },
  {
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    location: "Rio de Janeiro, Brazil",
    title: "Beach Apartment",
    description: "Copacabana vibes",
    star: 4.8,
    price: "$230/night",
    total: "$1350 total"
  },
  {
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    location: "Zurich, Switzerland",
    title: "Lake View Apartment",
    description: "Peaceful luxury stay",
    star: 4.9,
    price: "$350/night",
    total: "$2200 total"
  },
  {
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    location: "Singapore",
    title: "Modern City Stay",
    description: "Clean futuristic design",
    star: 4.8,
    price: "$280/night",
    total: "$1600 total"
  },

  {
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80",
    location: "Hanoi, Vietnam",
    title: "Old Quarter Stay",
    description: "Traditional street vibes",
    star: 4.5,
    price: "$110/night",
    total: "$600 total"
  }
];
export default function SmallCard() {


return (
  <>
    {uniqueData.map((item) => (
      <section
        key={item.location}
        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer"
      >
        {/* Image */}
        <div className="relative w-16 h-16 flex-shrink-0">
          <img
            src={item.img}
            alt={item.title}
            className="w-16 h-16 object-cover rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-800">
            {item.location}
          </h2>
          <p className="text-sm text-gray-500">
            {item.description}
          </p>

          <span className="text-xs text-gray-400 mt-1">
            ⭐ {item.star} • {item.price}
          </span>
        </div>
      </section>
    ))}
  </>
);
}
