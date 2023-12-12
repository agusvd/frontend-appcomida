import React from 'react';
import { BiSearch, BiX } from 'react-icons/bi';

const Search = ({ onClose }) => {

    return (
        <div className='dark:bg-black bg-white dark:text-white text-black z-[99] font-primary w-[400px] h-screen dark:border-[#1e1e1e] border-l-2 border-r-2 animate-fade-right animate-duration-100  delay-300 ease-in-out'>
            <div className='flex justify-between p-4'>
                <h2 className='text-2xl font-extrabold animate-fade-right duration-75 ease-in-out'>Buscar</h2>
                <BiX size={30} className='hover:scale-125 hover:text-red-500 cursor-pointer dark:bg-black dark:text-white bg-white text-black' onClick={onClose} />
            </div>
            <div className='flex dark:bg-black p-4  dark:border-[#1e1e1e]'>
                <div className='flex bg-gray-200 dark:bg-[#272829] w-full p-2 rounded-xl gap-2 animate-fade-right duration-75 ease-in-out'>
                    <BiSearch size={30} />
                    <input placeholder='Buscar...' className='w-full bg-gray-200 dark:bg-[#272829] outline-none' />
                </div>
            </div>
            <div>
                <h3 className='text-md font-semibold p-4 animate-fade-right duration-75 ease-in-out'>Recientes</h3>
                {/* resultados de busqueda */}
            </div>
            <div className='flex justify-center items-center animate-fade-right duration-75 ease-in-out'>
                <h2 className='text-gray-400' >
                    No hay busquedas recientes
                </h2>
            </div>
        </div>
    );
};

export default Search;