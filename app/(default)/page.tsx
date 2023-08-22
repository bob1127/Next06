export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}
import Image from 'next/image'
import Img01 from '../../public/images/maven.jpg'
import Img02 from '../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../components/Application/ApplicateCard'
import CardHover from '../../components/CardHover'
import Cards from '../../components/Cards/Cards'
import { properties } from "../../constants/data";
export default function Home() {
  return (
    <>
      <div className="outWrap overflow-hidden ">

      
        <Hero />
        <section className=' px-5  md:px-15 lg:px-20'>
         
            <CardHover/>
        
        </section>

        

       
        <Features />

        <ApplicateCard />
        <div className="App">
          {/* Section header */}
          <div className="section-title flex flex-col w-full py-10 justify-center items-center">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-4xl dark:text-white text-center">我們的產品</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">多領域應用</p>

          </div>
          <div className="properties flex flex-wrap   justify-center items-center">
            {properties.map((item) => (
              <Cards data={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="relative flex justify-center mb-8 border" data-aos="zoom-y-out" data-aos-delay="450">
        <Image
          className='mt-7 md:mt-20'
          src={Img01}
          alt="Brand Banner - 01"
          priority

        />
        </div>
        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
        <Image
          className='mt-7 md:mt-20'
          src={Img02}
          alt="Brand Banner - 01"
          priority

        />
        </div>
      
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </div>
    </>
  )
}
