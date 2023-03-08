import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Decinco Inc.</h1>

            <div className='footer__social'>
                <a href='https://www.facebook.com/' 
                className='footer__social-link' target='_blank'>
                    <i class='bx bxl-facebook'></i>
                </a>

                <a href='https://www.instagram.com/' 
                className='footer__social-link' target='_blank'>
                    <i class='bx bxl-instagram'></i>
                </a>

                <a href='https://www.twitter/' 
                className='footer__social-link' target='_blank'>
                    <i class='bx bxl-twitter'></i>
                </a>
            </div>

            <span className='footer__copy'>
                &#169; Kaito@coding. All right reserved
            </span>
        </div>

    </footer>
  )
}

export default Footer