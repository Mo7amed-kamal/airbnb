import { Inter } from "next/font/google"
import { 
  GlobeAltIcon, 
  ChevronDownIcon, 
  ShieldCheckIcon,
} from '@heroicons/react/solid';


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})



// بيانات الروابط
const footerLinks = {
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Get help with a safety issue', href: '#' },
    { name: 'AirCover', href: '#' },
    { name: 'Travel insurance', href: '#' },
    { name: 'Anti-discrimination', href: '#' },
    { name: 'Disability support', href: '#' },
    { name: 'Cancellation options', href: '#' },
    { name: 'Report neighborhood concern', href: '#' },
  ],
  hosting: [
    { name: 'Airbnb your home', href: '#' },
    { name: 'Airbnb your experience', href: '#' },
    { name: 'Airbnb your service', href: '#' },
    { name: 'AirCover for Hosts', href: '#' },
    { name: 'Hosting resources', href: '#' },
    { name: 'Community forum', href: '#' },
    { name: 'Hosting responsibly', href: '#' },
    { name: 'Airbnb-friendly apartments', href: '#' },
    { name: 'Join a free hosting class', href: '#' },
    { name: 'Find a co-host', href: '#' },
    { name: 'Refer a host', href: '#' },
  ],
  airbnb: [
    { name: '2025 Summer Release', href: '#' },
    { name: 'Newsroom', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Investors', href: '#' },
    { name: 'Gift cards', href: '#' },
    { name: 'Airbnb.org emergency stays', href: '#' },
  ],
};

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* الأعمدة الثلاثة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* عمود Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 hover:underline text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3">
              {footerLinks.hosting.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 hover:underline text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود Airbnb */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3">
              {footerLinks.airbnb.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 hover:underline text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* الخط الفاصل السفلي */}
        <div className="border-t border-gray-200 pt-8 footer">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* الجزء الأيسر: الحقوق والروابط القانونية */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-600">
              <span className="text-gray-500 text-lg">© 2026 Airbnb,Made with <a className={`footer-name ${inter.className}`} target='_blank' href="https://www.linkedin.com/in/mohamed-kamal-frontend/">Mohamed Kamal</a></span>
              <span className="hidden md:inline text-gray-300">·</span>
              <a href="#" className="hover:underline hover:text-gray-900">Privacy</a>
              <span className="hidden md:inline text-gray-300">·</span>
              <a href="#" className="hover:underline hover:text-gray-900">Terms</a>
              <span className="hidden md:inline text-gray-300">·</span>
              <a href="#" className="hover:underline hover:text-gray-900 flex items-center gap-1">
                Your Privacy Choices 
                <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
              </a>
            </div>

            {/* الجزء الأيمن: اللغة والعملة والسوشيال ميديا */}
            <div className="flex items-center gap-6">
              
              {/* اللغة والعملة */}
              <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
                <button className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors">
                  <GlobeAltIcon className="w-4 h-4" />
                  English (US)
                  <ChevronDownIcon className="w-3 h-3" />
                </button>
                <span className="hidden sm:inline text-gray-300">|</span>
                <button className="hover:bg-gray-100 px-2 py-1 rounded-md transition-colors">
                  SAR
                </button>
              </div>

              {/* أيقونات التواصل الاجتماعي */}
              <div className="flex items-center gap-4 text-gray-600">
                <a href="#" className="hover:text-gray-900 hover:scale-110 transition-transform">
                  <FacebookIcon />
                </a>
                <a href="#" className="hover:text-gray-900 hover:scale-110 transition-transform">
                  <TwitterIcon />
                </a>
                <a href="#" className="hover:text-gray-900 hover:scale-110 transition-transform">
                  <InstagramIcon />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;