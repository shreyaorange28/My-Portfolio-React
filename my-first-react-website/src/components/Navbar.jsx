import { Disclosure, DisclosureButton} from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
                

        <Disclosure as="nav" className="bg-teal-700 w-full py-5 px-[5%] flex justify-between items-center z-[100]">
            {/* title */}
            <a href="/" className="text-4xl font-bold text-[#3D8D7A] ml-20">Shreya Thothathri&apos;s Website</a>
            {/* right side of navbar */}
            <nav>
                <Link to="/" className="relative text-2xl font-medium ml-10">Home</Link>
                <Link to="/projects" className="relative text-2xl font-medium ml-10">Projects</Link>
                <Link to="/aboutme" className="relative text-2xl font-medium ml-10">About Me</Link>
                <Link to="/contact" className="relative text-2xl font-medium ml-10">Contact</Link>
            </nav>
        
            
        </Disclosure>



    );
}
