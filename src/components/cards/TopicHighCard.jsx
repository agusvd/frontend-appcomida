import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { BiMessageAltError } from 'react-icons/bi';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import { FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom';


const TopicHighCard = () => {
    return (
        <div className='flex bg-[#EEEEEE] dark:bg-[#272829] p-2 rounded-xl w-full m-10'>
            {/* post del usuario */}
            <div className='flex items-center justify-center'>
                <div className='flex gap-2 p-2'>
                    <div className='block'>
                        <Link to='/profile' className='flex rounded-full w-[60px] h-[60px] border-2'>
                            <img src='' className='w-full h-full object-cover rounded-full' />
                        </Link>
                    </div>
                    <div>
                        <div className='flex flex-col justify-end'>
                            <h2 className='dark:text-gray-400'>@Usuario</h2>
                            <h2 className='dark:text-white'>Agustin Villarroel</h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    hola
                </div>
            </div>
        </div>
    )
}

export default TopicHighCard