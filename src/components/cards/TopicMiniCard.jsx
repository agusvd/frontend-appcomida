import React, { useState } from 'react';
import { BiMessageAltError } from 'react-icons/bi';
import {HiOutlineHeart, HiHeart} from 'react-icons/hi'
import { FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const TopicMiniCard = ({ topic }) => {
    const [likes, setLikes] = useState(topic.likes || 0);

    const handleLike = () => {
        setLikes(likes + 1);
    };


    return (
        <div className='dark:bg-[#202020] rounded-md p-2 hover:mt-2 hover:mb-2 duration-300 ease-in-out transition-all hover:bg-[#EEEEEE] dark:hover:bg-[#272829] max-w-[800px]'>
            {/* primera caja para ordenar */}
            <Link to='/forum/topic/card' className='flex gap-2 p-2'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 justify-center'>
                            <Link to='/profile' className='text-sm dark:text-white'>@{topic.username}</Link>
                            <p className='text-sm dark:text-gray-300 text-gray-500'>Hace {topic.time}</p>
                        </div>
                        <button className='hover:text-red-500 duration-100 active:scale-95 dark:text-white'>
                            <BiMessageAltError size={30}/>
                        </button>
                    </div>
                    <div>
                        <p className='dark:text-white'>{topic.topicInfo}</p>
                    </div>
                    <div className='flex gap-2 pt-2'>
                        <div className='flex items-center text-sm gap-2 dark:text-white'>
                            <FiMessageSquare size={20} />
                            {topic.comments}
                        </div>
                        <div className='flex items-center text-sm gap-2 dark:text-white'>
                            <HiOutlineHeart size={20} onClick={handleLike} />
                            {likes}
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default TopicMiniCard;
