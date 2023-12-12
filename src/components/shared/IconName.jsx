import React, { useState } from 'react';
import { BiHome, BiHeart, BiSearch, BiUser, BiLogOut, BiCategoryAlt } from 'react-icons/bi';
import Search from './Search';
import Notifications from './Notifications';
import Category from './Category';

const IconName = ({ iconName }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [searchVisible, setSearchVisible] = useState(false)

    const handleOpenSearchClick = () => {
        setSearchVisible(true)
    }
    const handleCloseSearchClick = () => {
        setSearchVisible(false)
    }


    

    const [categoryVisible, setCategoryVisible] = useState(false)

    const handleOpenCategoryClick = () => {
        setCategoryVisible(true)
    }
    const handleCloseCategoryClick = () => {
        setCategoryVisible(false)
    }


    const handleClose = (e) => {
        if (e.target.id === 'closeOut') {
            handleCloseNotificationsClick();
            handleCloseSearchClick();
            console.log("click")
        }
    };

    return (
        <div>
            <div className="relative block z-[99]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {isHovered && (
                    <div className="absolute top-0 left-12 w-[auto] h-full dark:bg-[#fff] text-[#112D4E] block justify-center items-center font-primary text-xl rounded-md  tex-start p-3 py-2 shadow-xl z-[99]">
                        {iconName}
                    </div>
                )}
                {iconName === 'Inicio' && <BiHome size={30} className='hover:scale-125 ease-in-out transition-all duration-300' />}
                {iconName === 'Explorar' && <BiCategoryAlt size={30} className='hover:scale-125 ease-in-out transition-all duration-300' onClick={handleOpenCategoryClick} />}
                {iconName === 'Buscar' && <BiSearch size={30} className='hover:scale-125 ease-in-out transition-all duration-300' onClick={handleOpenSearchClick} />}
                {iconName === 'Notificaciones' && <BiHeart size={30} className='hover:scale-125 ease-in-out transition-all duration-300' onClick={handleOpenNotificationsClick} />}
                {iconName === 'Perfil' && <BiUser size={30} className='hover:scale-125 ease-in-out transition-all duration-300' />}
            </div>
            <div className='absolute'>
                {categoryVisible && (
                    <div id='closeOut' className="fixed  flex justify-center items-center z-50" onClick={handleClose}>
                        <Category onClose={handleCloseCategoryClick} />
                    </div>
                )}
                {searchVisible && (
                    <div id='closeOut' className="fixed top-0 right-0 flex w-full justify-center items-center z-50" onClick={handleClose}>
                        <Search onClose={handleCloseSearchClick} />
                    </div>
                )}
                {notificationsVisible && (
                    <div id='closeOut' className="fixed top-0 right-0 flex justify-center items-center z-50" onClick={handleClose}>
                        <Notifications onClose={handleCloseNotificationsClick} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default IconName;
