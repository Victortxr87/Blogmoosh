import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRight } from 'react-icons/fa';

const SkeletonBlogPost = () => (
  <div className="bg-[#4E1EF1] h-[440px] animate-pulse">
    <div className="pt-6 px-3">
      <div className="w-full h-[220px] bg-[#3617B5]" />
    </div>
    <div className="p-4">
      <div className="h-6 bg-[#3617B5] rounded w-3/4 mb-4" />
      <div className="h-8 bg-[#3617B5] rounded-full w-24" />
    </div>
  </div>
);

function BlogSlider() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://organipixel.com/wp-json/wp/v2/posts?_embed&per_page=8');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="mb-16">
    
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: { 
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="blog-slider"
      >
        {loading ? (
          [...Array(8)].map((_, index) => (
            <SwiperSlide key={`skeleton-${index}`}>
              <SkeletonBlogPost />
            </SwiperSlide>
          ))
        ) : (
          posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link to={`/blog/${post.id}`}>
                <div className="bg-[#4E1EF1] h-[440px]">
                  <div className="pt-6 px-1">
                    <img
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/400x300'}
                      alt={post.title.rendered}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                  <div className="p-4 mt-3">
                    <h3 
                      className="text-lg font-medium text-white mb-4 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <button className="bg-[#F9FF00] text-black px-6 py-2 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors">
                      Ver mais
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}

export default BlogSlider;