import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import BlogCategories from '../components/BlogCategories'
import BlogPosts from '../components/BlogPosts'
import BlogSlider from '../components/BlogSlider'
import PromoBanner from '../components/PromoBanner'
import Hero from '../components/Hero'
import BannerMoosh from '../components/BannerMoosh'


function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Portugal')

  return (
    <div className="container mx-auto pb-8  ">
      {/* Hero Section */}
      <Hero />

      {/* Blog Slider Section */}
        <section className="px-4" data-aos="fade-up"> 
      <BlogSlider />
      </section>

    
      {/* Promo Banner */}
      <section className="mb-16" data-aos="fade-up">
        <PromoBanner />
      </section>

      
      {/* Aposta que é na Moosh Section */}
      <section className="my-16 px-4" data-aos="fade-up">
       
        <BlogCategories onCategoryChange={setSelectedCategory} />
        <BlogPosts category={selectedCategory} />
      </section>

      {/* Banner Moosh */}  
      <section className="mb-16" data-aos="fade-up">
        <BannerMoosh />
      </section>

     
    </div>
  )
}

export default Home