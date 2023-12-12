import React from 'react';
import { BiSolidHeart, BiX } from 'react-icons/bi';

const Notifications = ({ onClose }) => {

    return (
        <div className='w-[400px] h-screen bg-white font-primary border-r-2 border-l-2 z-[99] dark:border-[#1e1e1e] dark:bg-black dark:text-white  animate-fade-right animate-duration-100  delay-300 ease-in-out'>
            <div className='flex p-2 justify-between dark:border-[#1e1e1e]'>
                <h2 className='text-2xl font-extrabold animate-fade-right duration-75 ease-in-out'>Notificaciones</h2>
                <BiX size={30} className='hover:scale-125 hover:text-red-500 cursor-pointer' onClick={onClose} />
            </div>
        </div>


    );
};

export default Notifications;