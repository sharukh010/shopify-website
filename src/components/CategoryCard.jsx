import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCard = ({category,poster}) => {
  console.log(poster)
  return (
    <Link to={`/category/${category}`}>

    <div className={`h-[300px] relative cursor-pointer transition-transform w-[220px] rounded-lg shadow-xl bg-[url('${poster}')] bg-cover bg-center bg-no-repeat flex justify-center items-center`}>
      <h1 className='uppercase z-10 text-white font-bold text-3xl opacity-95 text-center '>{category}</h1>
      <div className='absolute hover:opacity-40 ease-in-out transition-opacity top-0 h-full w-full rounded-lg bg-black opacity-30'></div>
    </div>
    </Link>
  )
}

export default CategoryCard
