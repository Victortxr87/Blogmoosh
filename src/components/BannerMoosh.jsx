import { Link } from 'react-router-dom';


function BannerMoosh({ image, link }) {
  return (
    <div className="container mx-auto px-6 mb-12 flex justify-center">
      <Link to={link}>
        <div className="relative  w-full  h-full rounded-lg overflow-hidden">
          <img
            src={'/bannermoosh.png'} 
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
    </div>
  );
}

export default BannerMoosh;

