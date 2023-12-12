import React from 'react';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import { LuMessagesSquare } from 'react-icons/lu'
import { BiFoodMenu } from 'react-icons/bi'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <div className='flex flex-col w-full font-primary'>
            <div className='flex flex-col justify-center items-center'>
                {/* Banner */}
                <div className='flex items-center justify-center'>
                    {isAuthenticated && (<img className='w-[600px] h-[200px] object-cover rounded-xl' src='https://img.freepik.com/psd-gratis/plantilla-banner-web-delicioso-menu-hamburguesas-comida_120329-1756.jpg' alt='Banner' />)}
                </div>
                {/* Header */}
                <div className='p-6 justify-center items-center flex w-[600px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex justify-center items-center'>
                            <div className='w-[100px] h-[100px] relative rounded-full overflow-hidden'>
                                {isAuthenticated && (<img className='w-full h-full object-cover' src={user.picture} alt='Avatar' />)}
                                <div className='absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity flex items-center justify-center'>
                                    <button className='bg-gray-800 p-2 rounded-full hover:bg-gray-600'>
                                        <i className='fas fa-camera text-gray-200 hover:text-white'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col p-2'>
                                <div className='ml-4'>
                                    {isAuthenticated && (<h2 className='text-sm dark:text-white text-black'>@{user.nickname}</h2>)}
                                    {isAuthenticated && (<h1 className='dark:text-white text-black text-xl font-semibold'>{user.name}</h1>)}
                                </div>
                                <div className='flex gap-2 justify-center pl-4'>
                                    <button className='dark:text-gray-300 text-gray-800'>
                                        0 Seguidores
                                    </button>
                                    <button className='dark:text-gray-300 text-gray-800 '>
                                        0 Siguiendo
                                    </button>
                                    <button>
                                        0 Likes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-2 flex justify-center w-full'>
                <div className="flex gap-2 justify-center items-center">
                    <button className="p-2 bg-gray-200 dark:bg-[#272829] dark:text-white rounded-xl duration-300 ease-in-out flex items-center gap-2">
                        <BiFoodMenu scale={20} />Publicaciones
                    </button>
                    <button className="p-2 border-b-2 border-transparent hover:border-b-2 hover:border-gray-500 duration-300 ease-in-out flex items-center gap-2 dark:text-white dark:hover:border-white">
                        <LuMessagesSquare size={20} /> Temas
                    </button>
                    <button className="p-2 border-b-2 border-transparent hover:border-b-2 hover:border-gray-500 duration-300 ease-in-out flex items-center gap-2 dark:text-white dark:hover:border-white">
                        <BsBookmark size={20} />Guardados
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Profile;
