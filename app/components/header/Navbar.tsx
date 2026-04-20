import { GlobeAltIcon, GlobeIcon, MenuIcon, MinusIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
<>

   {/* Right - Menu */}
   <div className="space-x-2 text-gray-500 flex items-center justify-end">

<p className="hidden md:block text-sm font-medium cursor-pointer">
  Become a host
</p>

<GlobeIcon className="w-5 h-5 cursor-pointer" />

<div className="flex items-center space-x-2 border rounded-full px-3 py-2 hover:shadow-md cursor-pointer">

  <MenuIcon className="w-5 h-5" />
  <UserIcon className="w-5 h-5 text-gray-600" />

</div>

</div>




</>

  )
}
