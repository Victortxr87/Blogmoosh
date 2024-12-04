import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowRight } from 'react-icons/fa'

function Featured() {
  const [mainPost, setMainPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://organipixel.com/wp-json/wp/v2/posts?_embed&per_page=4')
        if (response.data.length > 0) {
          setMainPost(response.data[0])
          setRelatedPosts(response.data.slice(1))
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {mainPost && (
        <section className="mb-16" data-aos="fade-up">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img 
              src={mainPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/1200x600'} 
              alt={mainPost.title.rendered}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <h1 className="text-4xl font-bold text-white mb-4" 
                  dangerouslySetInnerHTML={{ __html: mainPost.title.rendered }} />
              <div className="text-gray-200 mb-4" 
                   dangerouslySetInnerHTML={{ __html: mainPost.excerpt.rendered }} />
              <button className="bg-secondary text-black px-6 py-2 rounded-full flex items-center space-x-2">
                <span>Ler mais</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {relatedPosts.map((post) => (
          <div key={post.id} className="bg-[#2a2a40] rounded-lg overflow-hidden" data-aos="fade-up">
            <img 
              src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/400x300'}
              alt={post.title.rendered}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div className="text-gray-300 mb-4"
                   dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </div>
          </div>
        ))}
      </section>

      <section className="mb-16" data-aos="fade-up">
        <div className="bg-[#2a2a40] rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Boas Vindas</h2>
          <p className="text-xl text-secondary mb-4">25 FREE SPINS</p>
          <p className="text-white mb-6">No Primeiro Depósito</p>
          <button className="bg-secondary text-black px-8 py-3 rounded-full font-bold">
            COMEÇAR
          </button>
        </div>
      </section>
    </div>
  )
}

export default Featured