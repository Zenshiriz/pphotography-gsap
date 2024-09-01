import React from 'react'
import portfolio1 from "../assets/portfolio1.png"
import portfolio2 from "../assets/portfolio2.png"
import portfolio3 from "../assets/portfolio3.png"
import portfolio4 from "../assets/portfolio4.png"
import portfolio5 from "../assets/portfolio5.png"


const Portfolio = () => {
    
    const portfolio = [ portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]
    return (
    <div className='pt-8 pb-12'>
      <h3 className=' font-bold uppercase text-center text-2xl text-white pb-8'>Portfolio</h3>
      <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
        {portfolio.map((image, index) => (
          <div key={index} className={`md:max-w-[90px] md:hover:max-w-[250px] md:hover:w-full cursor-pointer overflow-hidden h-96 transition-all ease-in-out duration-300`}>
            <img src={image} alt='Portfolio' className={`'w-full h-full object-cover object-center`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
