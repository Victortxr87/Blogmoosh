import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SkeletonBlogPost = () => (
  <div className="container mx-auto px-4 py-8">
    <article className="bg-[#2a2a40] rounded-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-[400px] bg-gray-700" />
      
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto md:pl-0 pl-20 pr-6 py-8 md:py-12">
        {/* Title skeleton */}
        <div className="h-12 bg-gray-700 rounded w-3/4 mb-6" />
        
        {/* Content paragraphs skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-11/12" />
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-10/12" />
          
          <div className="pt-4" />
          
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-9/12" />
          
          <div className="pt-4" />
          
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-11/12" />
          <div className="h-4 bg-gray-700 rounded w-full" />
        </div>
      </div>
    </article>
  </div>
);

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://organipixel.com/wp-json/wp/v2/posts/${id}?_embed`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <SkeletonBlogPost />;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-[#2a2a40] text-white p-8 rounded-lg text-center">
          Post não encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="bg-[#2a2a40] rounded-lg overflow-hidden" data-aos="fade-up">
        <img
          src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/1200x600'}
          alt={post.title.rendered}
          className="w-full h-[400px] object-cover"
        />
        <div className="max-w-7xl mx-auto md:pl-0 pl-20 pr-6 py-8 md:py-12">
          <h1 
            className="text-4xl font-bold text-white mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div 
            className="prose prose-lg prose-invert"
            dangerouslySetInnerHTML={{
              __html: post.content.rendered.replace(/<br\s*\/?>/gi, ""),
            }}
          />
        </div>
      </article>
    </div>
  );
}

export default BlogPost;