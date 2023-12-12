import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { BiMessageAltError } from 'react-icons/bi';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { FiMessageSquare } from 'react-icons/fi';

const ForumPost = () => {
    return (
        <div className='overflow-x-hidden dark:bg-black border-r-2 dark:border-[#1e1e1e]  w-[800px]'>
            <div className='flex flex-col'>
                {/* header */}
                <div className='flex justify-start items-center p-2'>
                    <Link to='/' className=' dark:text-white text-black hover:text-red-500 hover:scale-105 rounded-full'>
                        <BiArrowBack size={30} />
                    </Link>
                </div>
                {/* informacion del post del usuario */}
                <div className='flex p-2 gap-2 border-b-2 border-t-2 dark:border-[#1e1e1e]'>
                    <div className='block'>
                        <Link to='/profile' className='flex w-[70px] h-[70px] object-cover rounded-full'>
                            <img src='https://picsum.photos/200' className='w-full h-full object-cover rounded-full' />
                        </Link>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 justify-center'>
                                <Link to='/profile' className='text-sm dark:text-gray-300'>@Usuario</Link>
                                <p className='text-sm text-gray-400'>Hace 2w</p>
                                <p className='text-sm dark:text-gray-400'>100K visitas</p>
                            </div>
                            <button className='dark:text-white hover:text-red-500 duration-100 hover:scale-105'>
                                <BiMessageAltError size={30} />
                            </button>
                        </div>
                        <div>
                            <p className='dark:text-white'>La manzana, esa fruta de sabor dulce y refrescante, es mucho más que un simple bocado delicioso. Consumir manzanas regularmente aporta una serie de beneficios para la salud que la convierten en una elección inteligente en tu dieta diaria</p>
                        </div>
                        <div className='flex gap-2 pt-2'>
                            <div className='flex items-center text-md gap-2 dark:text-white'>
                                <FiMessageSquare size={25} />
                                0
                            </div>
                            <button className='flex items-center text-md gap-2 dark:text-white'>
                                <HiOutlineHeart size={25} />
                                0
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForumPost;
