import React from 'react';
import { FcGoogle } from 'react-icons/fc'

const MainPage = () => {
    return (
        <div className="bg-white dark:bg-black overflow-x-auto flex flex-col items-center justify-center">
            <section className="h-screen w-screen flex justify-center">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-4xl font-bold text-red-700 mb-4">FoodParty</h1>
                    <p className="text-black text-xl mb-8 dark:text-white">¡Únete a la fiesta de sabores!</p>
                    <div className='flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-[#272829] dark:text-white text-black p-2 rounded-xl w-[400px]'>
                        {/* formulario */}
                        <form className='flex flex-col justify-center items-center w-full'>
                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex flex-col p-2'>
                                    <label className='text-sm'>
                                        Correo
                                    </label>
                                    <input type='email' placeholder='Correo' className='bg-transparent p-2 rounded-xl border-2 dark:border-white border-[#272829]' />
                                </div>
                                <div className='flex flex-col p-2'>
                                    <label className='text-sm'>
                                        Contraseña
                                    </label>
                                    <input type='password' placeholder='Contraseña' className='bg-transparent p-2 rounded-xl border-2 dark:border-white border-[#272829]' />
                                </div>
                            </div>
                            <div className='w-full p-2 items-center flex justify-center'>
                                <button className='text-center px-4 py-2 rounded-xl bg-red-500 w-full text-white hover:bg-green-500 duration-500 ease-in-out transition-all'>
                                    Iniciar sesion
                                </button>
                            </div>
                        </form>
                        <div className='w-full p-2 items-center flex flex-col gap-2 justify-center'>
                            <label>
                                O iniciar sesion con
                            </label>
                            <button className='rounded-2xl px-4 py-3 flex gap-2 justify-around items-center bg-white text-black hover:scale-105 duration-300 ease-in-out'>
                                <FcGoogle /> Continuar con google
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-screen w-screen'>
                miau
            </section>
        </div>
    );
};

export default MainPage;
