import React from 'react'
import Container from './Container'


const Header = () => {
  return (
    <div className='bg-black text-white py-3 '>
    <Container> 
        <div className=' flex justify-between'>
          <div></div>
          <p className='text-sm space-x-2'>Summer Sale For All Swim Suits And Free Express
             Delivery - OFF 50%! <span className='border-b-2 pl-3  '>ShopNow</span> </p>
           
           <select name="" id="" className='bg-black text-white text-sm cursor-pointer'>
              <option value="">English</option>
              <option value="">Japanese</option>
             <option value="" >Portuguese</option>
             <option value="">Arabic</option>
             <option value="">Spanish</option>
             <option value="">French</option>
          </select>
           

        </div>
</Container>
      </div>
  )
}

export default Header
