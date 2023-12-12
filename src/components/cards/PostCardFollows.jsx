import React from 'react';
import { BiBookmark, BiDotsHorizontalRounded, BiSend, BiChevronRight } from 'react-icons/bi';
import { GoHeart } from 'react-icons/go';
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdReport } from 'react-icons/md';
import { TbToolsKitchen2 } from 'react-icons/tb'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'


const PostCard = ({ post }) => {
    return (
        <div className='w-[450px] font-primary'>
            <div className='flex flex-col h-full'>
                {/* Imagen del post con su respectivo hover */}
                <div className='h-fit w-full group'>
                    <div className='relative overflow-hidden'>
                        <img src={post.image} className='w-[450px] h-[400px] object-cover rounded-t-xl' alt='Imagen de comida' />
                        <div className='absolute w-full h-full bg-black/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-75 animate-delay-0 rounded-t-xl delay-0'>
                            <div className='absolute left-2 top-0 p-2'>
                                <h1 className='text-white flex items-center gap-2'><TbToolsKitchen2 size={20} />Facil</h1>
                                <h1 className='text-white flex items-center gap-2'><AiOutlineClockCircle size={20} /> 25m</h1>
                            </div>
                            <button className='absolute bottom-5 right-5 bg-black/0 rounded-xl text-white hover:text-red-500'>
                                <MdReport size={30} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-white dark:bg-[#272829] rounded-b-xl p-1'>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex items-center gap-2 p-1'>
                            <img className='rounded-full w-[40px] h-[40px]' src='https://picsum.photos/200' alt='Avatar' />
                            <h3 className='text-md font-semibold dark:text-white'>{post.user}</h3>
                        </div>
                        <div className='items-center flex gap-4'>
                            <button className='gap-2 flex text-sm text-black dark:text-white'>
                                <GoHeart size={20} className='cursor-pointer hover:scale-105 text-black dark:text-white active:text-red-500' /> 10
                            </button>
                            <button className='gap-2 flex text-sm text-black dark:text-white'>
                                <HiOutlineChatBubbleOvalLeft size={20} className='cursor-pointer hover:scale-105 text-black dark:text-white' /> 8
                            </button>
                            <button className='gap-2 flex text-sm  text-black dark:text-white'>
                                <BsBookmark size={20} className='cursor-pointer hover:scale-105 text-black dark:text-white' />6
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
