import React from 'react'
import Container from './Container'
import SecHead from './SecHead.jsx'

import ps5Img from '../assets/Featurebox1.png'
import womenImg from '../assets/Featurebox2.png'
import speakersImg from '../assets/Featurebox3.png'
import perfumeImg from '../assets/Featurebox4.png'

const FeatureBox = () => {
  return (
    <section className='my-20'>
      <Container>
        <div className='mb-15'>
          <SecHead title='Featured' heading='New Arrival' />
        </div>

        <div className='grid gap-7.5 lg:grid-cols-2 mt-10'>
          <article className='relative flex items-end justify-center min-h-[500px] overflow-hidden rounded bg-black p-8 lg:min-h-[600px] group'>
            <img
              src={ps5Img}
              alt='PlayStation 5'
              className='absolute bottom-0 max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105'
            />
            <div className='relative z-10 mr-auto max-w-[242px] text-white'>
              <h3 className='mb-2 text-2xl font-semibold tracking-wide'>PlayStation 5</h3>
              <p className='mb-4 text-sm leading-5 text-gray-300'>
                The latest Black and White PS5 drops with special sale pricing.
              </p>
              <a
                href='#'
                className='inline-block font-medium underline underline-offset-4 transition-colors hover:text-gray-300 text-white'
              >
                Shop Now
              </a>
            </div>
          </article>

          <div className='flex flex-col gap-8'>
            <article className='relative flex h-[284px] items-end overflow-hidden rounded bg-[#0D0D0D] p-6 group'>
              <img
                src={womenImg}
                alt='Women’s collections'
                className='absolute bottom-0 right-0 h-full object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <div className='relative z-10 max-w-[255px] text-white'>
                <h3 className='mb-2 text-2xl font-semibold tracking-wide'>Women’s Collections</h3>
                <p className='mb-4 text-sm leading-5 text-gray-300'>
                  Discover the newest women’s styles made for everyday wear.
                </p>
                <a
                  href='#'
                  className='inline-block font-medium underline underline-offset-4 transition-colors hover:text-gray-300 text-white'
                >
                  Shop Now
                </a>
              </div>
            </article>

            <div className='grid gap-7.5 sm:grid-cols-2'>
              <article className='relative flex h-[284px] items-end overflow-hidden rounded bg-[#0D0D0D] p-6 group'>
                <img
                  src={speakersImg}
                  alt='Speakers'
                  className='absolute inset-0 m-auto max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-105'
                />
                <div className='relative z-10 text-white'>
                  <h3 className='mb-2 text-2xl font-semibold tracking-wide'>Speakers</h3>
                  <p className='mb-2 text-sm text-gray-300'>
                    High-quality wireless sound for your home or office.
                  </p>
                  <a
                    href='#'
                    className='inline-block font-medium underline underline-offset-4 transition-colors hover:text-gray-300 text-white'
                  >
                    Shop Now
                  </a>
                </div>
              </article>

              <article className='relative flex h-[284px] items-end overflow-hidden rounded bg-[#0D0D0D] p-6 group'>
                <img
                  src={perfumeImg}
                  alt='Perfume'
                  className='absolute inset-0 m-auto max-h-[75%] object-contain transition-transform duration-300 group-hover:scale-105'
                />
                <div className='relative z-10 text-white'>
                  <h3 className='mb-2 text-2xl font-semibold tracking-wide'>Perfume</h3>
                  <p className='mb-2 text-sm text-gray-300'>
                    GUCCI INTENSE OUD EDP for a bold, luxurious scent.
                  </p>
                  <a
                    href='#'
                    className='inline-block font-medium underline underline-offset-4 transition-colors hover:text-gray-300 text-white'
                  >
                    Shop Now
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeatureBox;
