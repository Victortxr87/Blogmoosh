import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SkeletonHero = () => (
  <div className="relative w-full h-[600px] overflow-hidden bg-gray-100 animate-pulse">
    <div className="absolute inset-0 bg-gray-200" />
    
    <div className="relative h-full max-w-7xl mx-auto px-6">
      <div className="absolute bottom-20 max-w-xl w-full">
        <div className="h-8 bg-gray-300 rounded-md w-64 mb-4" />
        <div className="space-y-3 mb-6">
          <div className="h-4 bg-gray-300 rounded-md w-full" />
          <div className="h-4 bg-gray-300 rounded-md w-3/4" />
        </div>
        <div className="h-10 bg-gray-300 rounded-full w-32" />
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://organipixel.com/wp-json/wp/v2/posts?_embed&per_page=1');
        setFeaturedPost(response.data[0]);
      } catch (error) {
        console.error('Error fetching featured post:', error);
      }
      setLoading(false);
    };
    fetchLatestPost();
  }, []);

  if (loading || !featuredPost) {
    return <SkeletonHero />;
  }

  const imageUrl = featuredPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/1920/600';

  return (
    <div className="relative w-full h-[600px] -top-5 z-10 overflow-hidden">
      {/* Background Image with Updated Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover  bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {/* Updated gradient overlay to match reference */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(180deg, rgba(19,16,91,0) 0%, #13105B 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6">
        <div className="absolute bottom-20 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DESTAQUE PRINCIPAL
          </h1>
          
          <p className="text-lg text-white/90 mb-6 font-light leading-relaxed">
            No Mundo Do UFC, Cada Luta É Uma História De Determinação, Técnica E Pura Força De Vontade.
          </p>
          
          <Link 
            to={`/blog/${featuredPost.id}`}
            className="inline-flex items-center px-8 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium rounded-full transition-colors"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;