import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHome, BiHeart, BiSearch, BiUser, BiLogOut, BiLogIn, BiMenuAltLeft, BiMessageAltDetail } from 'react-icons/bi';
import Search from './Search';
import Notifications from './Notifications';

const Sidebar = () => {

    const location = useLocation()

    const [searchVisible, setSearchVisible] = useState(false)
    const [notificationsVisible, setNotificationsVisible] = useState(false)

    const handleToggleSection = (section) => {
        if (section === 'search') {
            setSearchVisible(!searchVisible);
            setNotificationsVisible(false);
        } else if (section === 'notifications') {
            setNotificationsVisible(!notificationsVisible);
            setSearchVisible(false);
        }
    };


    return (
        <div className='flex flex-col font-primary'>
            <div className='flex flex-col h-screen justify-center border-r-2 dark:border-[#1e1e1e] items-center'>
                <div className={`p-2 font-thirty dark:bg-black dark:text-white bg-white text-black flex justify-center items-center transition-all ease-in-out w-[90px] sm:w-[200px]
                ${searchVisible ? 'sm:w-[90px]' : 'w-[200px]'}
                ${notificationsVisible ? 'sm:w-[90px]' : 'w-[200px]'}`}>
                    <ul className='items-start justify-center flex flex-col text-lg gap-2'>
                        <li className='w-full'>
                            <Link to='/' className={`flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829] p-3 rounded-md duration-100 transition-all ease-in-out text-sm ${location.pathname === '/' ? 'bg-[#EEEEEE] font-bold dark:bg-[#272829]' : ''} ${searchVisible ? 'bg-white dark:bg-black' : ''} ${notificationsVisible ? 'bg-white dark:bg-black' : ''} `}>
                                <BiHome size={30} />
                                <p className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block`}>
                                    Inicio
                                </p>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link to='/forums' className={`flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829]  p-3 rounded-md duration-100 transition-all ease-in-out text-sm ${location.pathname === '/forums' ? 'bg-[#EEEEEE] font-bold dark:bg-[#272829]' : ''} ${searchVisible ? 'bg-white dark:bg-black' : ''} ${notificationsVisible ? 'bg-white dark:bg-black' : ''} `}>
                                <BiMessageAltDetail size={30} />
                                <p className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block `}>
                                    Forums
                                </p>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <div className={`flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829] p-3 rounded-lg duration-100 transition-all ease-in-out text-sm ${searchVisible ? 'bg-[#EEEEEE] font-bold dark:bg-[#272829]' : ''}`} onClick={() => handleToggleSection('search')} >
                                <BiSearch size={30} />
                                <p className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block`}>
                                    Buscar
                                </p>
                            </div>
                        </li>
                        <li className='w-full'>
                            <div className={`flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829] p-3 rounded-md duration-100 transition-all ease-in-out text-sm ${notificationsVisible ? 'bg-[#EEEEEE] font-bold dark:bg-[#272829]' : ''}`} onClick={() => handleToggleSection('notifications')}>
                                <BiHeart size={30} />
                                <p className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block`}>
                                    Notifications
                                </p>
                            </div>
                        </li>
                        <li className='w-full'>
                            <div className=" flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829] p-2 rounded-md duration-100 transition-all ease-in-out text-sm">
                                <BiMenuAltLeft size={30} />
                                <button className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block`}>
                                    Más
                                </button>
                            </div>
                        </li>
                        <li className='w-full'>
                            <Link to='/profile' className={`flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829] p-3 rounded-md duration-100 transition-all ease-in-out ${location.pathname === '/profile' ? 'bg-[#EEEEEE] font-bold dark:bg-[#272829]' : ''} ${searchVisible ? 'bg-white dark:bg-black' : ''} ${notificationsVisible ? 'bg-white dark:bg-black' : ''} `}>
                                <img className='rounded-full w-[30px] h-[30px]' src="https://picsum.photos/id/27/367/267" alt='Avatar' />
                                <div className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block`}>
                                    <h2 className='text-xs'>agustin</h2>
                                </div>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link to='/login' className="flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829] p-2 rounded-md duration-100 transition-all ease-in-out text-sm">
                                <BiLogIn size={30} />
                                <div className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block`}>
                                    Iniciar sesión
                                </div>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <div className="flex items-center gap-2 cursor-pointer hover:bg-[#EEEEEE] dark:hover:bg-[#272829] p-2 rounded-md duration-100 transition-all ease-in-out text-sm">
                                <BiLogOut size={30} />
                                <div className={`${searchVisible ? 'sm:hidden' : ''} ${notificationsVisible ? 'sm:hidden' : ''} hidden sm:block`}>
                                    Salir
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                {searchVisible && (
                    <div id='cerrar' className="animate-fade-right animate-duration-100 animate-delay-100 w-auto fixed left-20 z-[99]">
                        <Search onClose={() => handleToggleSection('search')} />
                    </div>
                )}
                {notificationsVisible && (
                    <div id='closeOut' className="animate-fade-right animate-duration-100 animate-delay-100 w-auto fixed left-20 z-[99]">
                        <Notifications onClose={() => handleToggleSection('notifications')} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
