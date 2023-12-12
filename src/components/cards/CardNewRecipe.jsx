import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const CardNewRecipe = () => {
    return (
        <Link to='/newRecipe' className='w-[280px] cursor-pointer font-primary rounded-md dark:bg-[#272829] bg-[#EEEEEE] active:scale-95 duration-300 transition-all ease-in-out'>
            <button className='flex flex-col h-[490px] justify-center items-center w-full'>
                <div>
                    <BiPlus size={50}/>
                </div>
            </button>
        </Link>
    )
}

export default CardNewRecipe