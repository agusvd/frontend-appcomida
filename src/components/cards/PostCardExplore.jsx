import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdReport } from 'react-icons/md';
import { TbToolsKitchen2 } from 'react-icons/tb'


const PostCardExplore = ({ post }) => {
    return (
        <div className='w-[280px] font-primary'>
            <div className='flex flex-col h-full'>
                {/* Imagen del post con su respectivo hover */}
                <div className='h-fit w-full group'>
                    <div className='relative overflow-hidden'>
                        <img src={post.image} className='w-[280px] h-[490px] object-cover rounded-md' alt='Imagen de comida' />
                        <div className='absolute w-full h-full bg-black/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-75 rounded-md'>
                            <div className='absolute left-2 top-0 p-2'>
                                <h2 className='text-white flex items-center gap-2 text-md'>{post.title}</h2>
                                <h1 className='text-white flex items-center gap-2'><TbToolsKitchen2 size={20} />Facil</h1>
                                <h1 className='text-white flex items-center gap-2'><AiOutlineClockCircle size={20} /> 25m</h1>
                            </div>
                            <button className='absolute bottom-5 right-5 bg-black/0 rounded-xl text-white hover:text-red-500'>
                                <MdReport size={30} />
                            </button>
                            <div className='left-0 bottom-0 p-2 absolute'>
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-[40px] h-[40px]' src='https://picsum.photos/200' alt='Avatar' />
                                    <h3 className='text-md font-semibold text-white'>{post.user}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCardExplore;
