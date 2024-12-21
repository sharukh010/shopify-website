import React from 'react'
import CategoryCard from '../components/CategoryCard'

const Categories = () => {
  const categoriesPoster = {
    "electronics":'https://images.unsplash.com/photo-1627562309156-3056abea4fe9?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "jewelery":'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "men's clothing":'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "women's clothing":'https://images.unsplash.com/photo-1733310925418-7566070e6d9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
  return (
    <div className='h-screen w-full  flex flex-wrap justify-between p-2 md:px-32'>
      {Object.keys(categoriesPoster).map((category, index) => (
        <CategoryCard key={index} category={category} poster={categoriesPoster[category]}/> ))}
    </div>
  )
}

export default Categories
