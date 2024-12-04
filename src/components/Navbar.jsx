import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#13105B] h-24 flex z-20 items-center text-white py-4 border-secondary rounded-bl-3xl rounded-br-3xl relative border-b b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mr-10">
          {/* Logo section */}
          <Link to="/" className="flex items-center ml-10">
            <img src="/logmarca.png" alt="Moosh" className="md:w-44 w-32"  />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/futebol" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
               <span>Futebol</span>
            </Link>
            <Link to="/casino" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
           <span>Casino</span>
            </Link>
            <Link to="/apostas" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
          <span>Apostas</span>
            </Link>
            <Link to="/modalidades" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
          <span>Modalidades</span>
            </Link>
            <Link to="/tutorial" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
           <span>Tutorial</span>
            </Link>
            <Link to="/destaque" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <span>Destaque</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute left-0 right-0 -mt-5 top-full bg-[#13105B] border-t border-gray-800 z-50`}>
          <div className="flex flex-col py-2">
            <Link 
              to="/futebol" 
              className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800"
              onClick={toggleMenu}
            >
           <span>Futebol</span>
            </Link>
            <Link 
              to="/casino" 
              className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800"
              onClick={toggleMenu}
            >
             <span>Casino</span>
            </Link>
            <Link 
              to="/apostas" 
              className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800"
              onClick={toggleMenu}
            >
              <span>Apostas</span>
            </Link>
            <Link 
              to="/modalidades" 
              className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800"
              onClick={toggleMenu}
            >
              <span>Modalidades</span>
            </Link>
            <Link 
              to="/tutorial" 
              className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800"
              onClick={toggleMenu}
            >
             <span>Tutorial</span>
            </Link>
            <Link 
              to="/destaque" 
              className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800"
              onClick={toggleMenu}
            >
              <span>Destaque</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;