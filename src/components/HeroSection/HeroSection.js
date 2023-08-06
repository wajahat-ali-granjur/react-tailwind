import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {

    const handleClick = (actionType) => {
        alert(actionType)
    }

    return (
        <div className=' text-white'>
            <div className=' max-w-[800px] mt-[-96px] w-full h-screen flex justify-center flex-col mx-auto text-center'>
                <p className='text-[#00df9a] md:4xl sm:text-2xl text-sm font-bold'>Growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3 sm:py-2 py-1'>Grow with data.</h1>
                <div className='flex justify-center text-2xl'>
                    <p>Fast, Flexible Financing for {"- "}</p>
                    <TypeAnimation
                        sequence={[
                            'BTC',
                            1000,
                            'DSS',
                            1000,
                            'SASS',
                            1000,
                        ]}
                        wrapper="span"
                        speed={0}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600 md:py-2 py-1 mb-2'>
                    Monitor your data analytics to increase revenue for BTC, DSS, & SASS platforms.
                </p>
                <button className='bg-[#00df9a] w-[200px] text-md mx-auto rounded-md py-3' onClick={() => handleClick("Get Started")}>Get Started</button>
            </div>
        </div>
    )
}

export default HeroSection