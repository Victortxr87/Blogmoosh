import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SkeletonPost = () => (
  <div className="animate-pulse h-[600px]">
    <div className="w-full h-[350px] bg-gray-700" />
    <div className="mt-4 space-y-4">
      <div className="h-8 bg-gray-700 rounded w-3/4" />
      <div className="h-32 bg-gray-700 rounded w-full" />
      <div className="h-10 bg-gray-700 rounded-full w-32" />
    </div>
  </div>
);

function BlogPosts({ category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://organipixel.com/wp-json/wp/v2/posts?_embed&per_page=8`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [category]);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          el: '.custom-pagination'
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="blog-slider"
      >
        {loading ? (
          [...Array(8)].map((_, index) => (
            <SwiperSlide key={`skeleton-${index}`}>
              <SkeletonPost />
            </SwiperSlide>
          ))
        ) : (
          posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="h-[600px] flex flex-col">
                <div className="flex-1">
                  <img
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/400x300'}
                    alt={post.title.rendered}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="pt-6 flex flex-col h-[250px] justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        {post.title.rendered}
                      </h3>
                      <div 
                        className="text-gray-300 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    </div>
                    <div className="mt-auto">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-[#F9FF00] text-sm font-medium hover:opacity-80 transition-opacity"
                      >
                        VER MAIS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="custom-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2" />
    </div>
  );
}

export default BlogPosts;