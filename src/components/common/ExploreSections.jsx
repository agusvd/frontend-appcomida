import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import PostCardExplore from '../cards/PostCardExplore';
import { LuSettings2 } from 'react-icons/lu'
import { BsPlus } from 'react-icons/bs'
import { RiCloseFill } from 'react-icons/ri'
import CardNewRecipe from '../cards/CardNewRecipe';

const ExploreSections = () => {

    const [showFilter, setShowFilter] = useState(false);

    const handleFilterClick = () => {
        setShowFilter(!showFilter);
    };

    const fakePost = [
        {
            id: 1,
            title: "Ensalada de Quinua con Verduras Asadas",
            image: "https://fastly.picsum.photos/id/61/3264/2448.jpg?hmac=Xi3Kq99U5tueFi0aajgUP0yWAL4xwCHg5ZXGZRLTqyI",
            user: "Agustin"
        },
        {
            id: 2,
            title: "Pollo al Curry con Coco",
            image: "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
            user: "Claudio"
        },
        {
            id: 3,
            title: "Tacos de Pescado con Salsa de Mango",
            image: "https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8",
            user: "Sebastian"
        },
        {
            id: 4,
            title: "Lasaña Vegetariana de Berenjenas",
            image: "https://fastly.picsum.photos/id/85/1280/774.jpg?hmac=h_HHpvfhMmLP6uOSrHS7HSlXVRuMKfBbc8HFKd1Acv4",
            user: "Rodrigo"
        },
        {
            id: 5,
            title: "Sopa de Tomate y Albahaca",
            image: "https://picsum.photos/id/2/367/267",
            user: "Diego"
        },
        {
            id: 6,
            title: "Sopa de Tomate y Albahaca",
            image: "https://picsum.photos/200/300",
            user: "Diego"
        }
    ];

    return (
        <div className='overflow-x-hidden h-screen font-primary'>
            <div className='flex dark:bg-black p-3 gap-2 group'>
                <div className={`flex flex-col bg-gray-200 dark:bg-[#202020] w-full p-2 rounded-xl items-center 
                ${showFilter ? 'dark:bg-[#202020] animate-delay-1000 transition-all ease-in-out duration-1000' : 'duration-500'}`}>
                    {/* Search bar */}
                    <div className={`flex w-full items-center gap-2 p-2 
                    ${showFilter ? 'dark:bg-[#202020] bg-white rounded-t-md duration-1000' : 'rounded-md duration-500'}`}>
                        <input placeholder='Buscar...' className={`w-full bg-gray-200 dark:bg-[#202020] rounded-md outline-none p-2 text-lg
                        ${showFilter ? 'dark:bg-[#202020] bg-white animate-delay-1000 transition-all ease-in-out duration-1000' : 'duration-500'}`} />
                        <button className='active:scale-95 duration-300 transition-all ease-in-out'>
                            <BiSearch size={30} />
                        </button>
                        <button className={`p-2 items-center duration-75 delay-0 ${showFilter ? 'animate-delay-1000 transition-all ease-in-out duration-1000' : 'duration-500'}`}
                            onClick={handleFilterClick}>
                            {showFilter ? <RiCloseFill size={30} className='hover:text-red-500 active:scale-95 duration-300 ease-in-out transition-all' /> : <LuSettings2 size={30} className='hover:text-red-500 duration-300 ease-in-out' />}
                        </button>
                    </div>
                    {showFilter && (
                        <div className={`flex justify-around items-center w-full dark:bg-[#202020] transition-all duration-500 gap-1 bg-gray-200 pt-2 pb-2 text-lg
                        ${showFilter ? 'dark:bg-[#040D12] bg-white animate-fade  duration-1000 transition-all ease-in-out rounded-b-md ' : 'duration-500'}`}>
                            <select className='dark:bg-[#202020] bg-white p-2'>
                                <option value="">Dificultad</option>
                                <option value="facil">Fácil</option>
                                <option value="intermedio">Intermedio</option>
                                <option value="dificil">Difícil</option>
                            </select>
                            <select className='dark:bg-[#202020] bg-white p-2'>
                                <option value="">Tiempo</option>
                                <option value="10m">10 min</option>
                                <option value="15m">15 min</option>
                                <option value="20m">20 min</option>
                                <option value="25m">25 min</option>
                                <option value="30m">30 min</option>
                                <option value="35m+">35 min+</option>
                            </select>
                            <select className='dark:bg-[#202020] bg-white p-2'>
                                <option value="">Hora de</option>
                                <option value="desayuno">Desayuno</option>
                                <option value="almuerzo">Almuerzo</option>
                                <option value="once">Once</option>
                                <option value="cena">Cena</option>
                            </select>
                            <select className='dark:bg-[#202020] bg-white p-2'>
                                <option value="">Origen</option>
                                <option value="argentina">Argentina</option>
                                <option value="bolivia">Bolivia</option>
                                <option value="colombia">Colombia</option>
                                <option value="chile">Chile</option>
                                <option value="peru">Perú</option>
                            </select>
                            <button className='dark:bg-[#202020] bg-white p-2'>
                                Filtrar
                            </button>
                        </div>
                    )}
                </div>

            </div>

            {/* Etiquetas pero son para ayudar a las busquedas, para buscar especificamente */}
            <div className='w-full p-2 flex flex-col dark:border-[#1e1e1e]'>
                <div className='gap-2 flex dark:text-black text-white'>
                    <button className='bg-gray-200 hover:bg-gray-300 flex items-center rounded-full p-2'>
                        <h3 className='font-semibold'>Etiquetas</h3>
                        <BsPlus size={25} />
                    </button>
                    <button className='p-1 rounded-full bg-purple-200 flex items-center gap-2 hover:scale-105 duration-75 delay-0'>
                        <img className='rounded-full w-[40px] h-[40px]' src='https://cocinarconrobot.com/wp-content/uploads/comer-saludable-equilibrado-sin-dieta-768x523.jpg' alt='Avatar' />
                        <h3 className='text-md font-semibold px-1'>Saludable</h3>
                    </button>
                    <button className='p-2 rounded-full bg-green-200 flex items-center gap-2 hover:scale-105 duration-75 delay-0'>
                        <img className='rounded-full w-[40px] h-[40px]' src='https://cocinarconrobot.com/wp-content/uploads/comer-saludable-equilibrado-sin-dieta-768x523.jpg' alt='Avatar' />
                        <h3 className='text-md font-semibold px-1'>Carne</h3>
                    </button>
                    <button className='p-2 rounded-full bg-pink-200 flex items-center gap-2 hover:scale-105 duration-75 delay-0'>
                        <img className='rounded-full w-[40px] h-[40px]' src='https://cocinarconrobot.com/wp-content/uploads/comer-saludable-equilibrado-sin-dieta-768x523.jpg' alt='Avatar' />
                        <h3 className='text-md font-semibold px-1'>Pollo</h3>
                    </button>
                    <button className='p-2 rounded-full bg-cyan-200 flex items-center gap-2 hover:scale-105 duration-75 delay-0'>
                        <img className='rounded-full w-[40px] h-[40px]' src='https://cocinarconrobot.com/wp-content/uploads/comer-saludable-equilibrado-sin-dieta-768x523.jpg' alt='Avatar' />
                        <h3 className='text-md font-semibold px-1'>Huevo</h3>
                    </button>
                </div>
            </div>
            {/* Escoges para explorar random o lo que sigues */}
            <div className='flex justify-center items-center p-2 gap-4'>
                <button className='p-2 bg-gray-200 dark:bg-[#272829] dark:hover:bg-[#29292a] rounded-xl ease-in-out flex items-center hover:bg-gray-100 duration-100'>
                    Explorar
                </button>
                <button className='p-2 dark:hover:bg-[#272829] rounded-xl duration-100 transition-all ease-in-out'>
                    Siguiendo
                </button>
            </div>
            {/* Map de las cards de explorar */}
            <div className='w-full flex justify-center items-center'>
                <div className='p-2 gap-4 font-primary flex flex-wrap justify-center items-center'>
                    <CardNewRecipe />
                    {fakePost.map((post) => (
                        <PostCardExplore key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExploreSections