import React from 'react'

const CategorySec = ({ title, children }) => {
    return (
        <div className='categorySec w-42.5 h-36.25 p-6.25 border text-center mt-15 group transition-all duration-300 hover:bg-[#DB4444] hover:border-[#DB4444] cursor-pointer rounded [&_path]:hover:stroke-red [&_line]:hover:stroke-red'>
            <div className='icon transition-colors duration-300'>
                {children}
            </div>

            <h3 className='group-hover:text-white mt-4 font-medium transition-colors duration-300'>{title}</h3>
        </div>
    )
} 

export default CategorySec;