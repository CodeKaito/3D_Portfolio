import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white-700 text-black'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#fffffff] py-7'>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>Kaito Inc.</h1>

            <span className='footer__copy'>
                &#169; 2023 | CodeKaito. All right reserved
            </span>
        </div>

    </footer>
  )
}

export default Footer