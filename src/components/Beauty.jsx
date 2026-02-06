import Image from 'next/image'
import React from 'react'
import girl from '../../public/image/girl.png'

const Beauty = () => {
  return (
    <>
    <section className='bg-[#F2F5FF] pb-15'>
        <div className="container">
              <div className="flex gap-15.5">
                        <div className=" w-128.5 pt-73.75">
                             <h1 className='font-montserrat font-bold text-[32px] pb-5 text-[#333333] leading-9.75' >
                                  Beautify Your Space
                                </h1>
                                <p className='font-montserrat font-normal text-[20px] pb-7.5 text-[#666666] leading-9.75 pr-7'>
                                      Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                </p>
                                <button className='bg-[#054C73] px-14.25 py-6 rounded-[50px] font-montserrat font-bold text-[16px] text-[#FFFFFF] cursor-pointer tracking-[0px] '>
                                     LEARN MORE
                                </button>
                        </div>
                        <div className="b-right py-15">
                            <Image src={girl} alt=''/>

                        </div>
              </div>
        </div>
    </section>
    </>
  )
}

export default Beauty
