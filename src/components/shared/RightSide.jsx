import React, { useState } from 'react'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'

const RightSide = () => {
    const [showRightSide, setShowRightSide] = useState(false)

    const handleShowR = () => {
        setShowRightSide(!showRightSide)
    }
    return (
        <div className={` ${showRightSide ? 'w-[20px]' : ' w-[600px]'} hidden h-screen md:block font-primary `}>
            <button className='dark:text-white text-black hover:text-red-500 duration-100 absolute pb-5 right-2 top-2' onClick={handleShowR}>
                {showRightSide ? <PiEyeClosedBold size={30} /> : <PiEyeBold size={30} />}
            </button>
            <div className={`${showRightSide ? 'hidden' : 'flex flex-col'} items-center p-4 gap-5 border-l-2 dark:border-[#1e1e1e] h-screen pt-10`}>
                {/* Trends */}
                <div className='w-full bg-[#EEEEEE] dark:bg-[#272829] rounded-xl p-2  animate-fade-right duration-100 delay-0'>
                    <h1 className='text-2xl font-extrabold text-black dark:text-white'>Tendencias</h1>
                    <div className='flex flex-col text-black dark:text-white'>
                        <div>
                            <h2 className='text-sm font-semibold text-gray-500'>Comida rapida</h2>
                            <div className=''>
                                <h2 className='text-md'>Completo italiano 2.0</h2>
                            </div>
                        </div>
                        <div>
                            <h2>

                            </h2>
                        </div>
                    </div>
                </div>
                {/* Sugerencias */}
                <div className='w-full bg-[#EEEEEE] dark:bg-[#272829] rounded-xl p-2 animate-fade-right duration-100 delay-0'>
                    <h1 className='text-xl font-semibold text-black dark:text-white'>Sugerencias</h1>
                    <div className='flex flex-col text-black dark:text-white'>
                        <div>
                            <div className='flex items-center gap-2'>

                            </div>
                            <button>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide