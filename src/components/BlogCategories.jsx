import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = ['Portugal', 'Internacional', 'Modalidades', 'Casino'];

function BlogCategories({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState('Internacional');
  const [showControls, setShowControls] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  useEffect(() => {
    const checkOverflow = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setShowControls(
          container.scrollWidth > container.clientWidth && window.innerWidth < 768
        );
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className=" px-6 py-4">
      <h2 className="text-2xl font-bold text-white mb-4">Notícias</h2>
      
      {/* Desktop View */}
      <div className="hidden md:flex bg-[#351FB4] w-4/12 rounded-full p-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-6 py-2 rounded-full  transition-colors text-sm font-medium ${
              activeCategory === category
                ? 'bg-yellow-400 text-black'
                : 'text-white hover:text-yellow-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="relative w-full md:hidden">
        {showControls && (
          <>
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 flex items-center justify-center bg-gray-900/50 text-white rounded-full transition-opacity ${
                scrollPosition <= 0 ? 'opacity-0' : 'opacity-100'
              }`}
              disabled={scrollPosition <= 0}
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 flex items-center justify-center bg-gray-900/50 text-white rounded-full"
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}

        <div 
          className="overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-3 py-2 min-w-max bg-[#1C1C4D] rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-2 rounded-full transition-colors text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCategories;