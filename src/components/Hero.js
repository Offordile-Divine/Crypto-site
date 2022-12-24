import React from 'react'
import './Hero.css'
import Crypto from '../assets/cryptop laptop 2.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        {/* {Left side} */}
        <div className='left'>
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest with Crptocurrency with your IRA</h1>
          <p>Buy, sell and store hundreds of cryptocurrencies</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn more</button>
          </div>
        </div>



        {/* {Right side} */}
        <div className='right'>
          <div className='img-container'>
            <img src={Crypto} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero