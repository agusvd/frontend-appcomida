import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BiImageAdd } from 'react-icons/bi';

const CreatePost = () => {
    const [text, setText] = useState('');
    const [selectedColor, setSelectedColor] = useState(''); // Estado para almacenar el color seleccionado

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            ['image'],
            [{ color: [] }],
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline',
        'list', 'bullet',
        'link', 'image',
        'color',
    ];


    let quillRef;

    return (
        <div>
            <div className='P-2 justify-center items-center flex pt-10'>
                <div className='rounded-xl w-[600px] shadow-md'>
                    <div className='flex gap-2 p-1'>
                        <img className='rounded-full w-[40px] h-[40px]' src='https://picsum.photos/200' />
                        <input placeholder='¿Quieres publicar algo?' className='w-full' />
                    </div>
                    <div className='w-full h-full gap-2 p-2'>
                        <ReactQuill
                            ref={(el) => {
                                quillRef = el;
                            }}
                            value={text}
                            onChange={setText}
                            modules={modules}
                            formats={formats}
                            className=''
                        />
                    </div>
                    <div className='flex w-full items-center justify-center p-2 gap-5'>
                        <button className='hover:scale-105 hover:text-gray-500'>
                            <BiImageAdd size={30} />
                        </button>
                        <button className='hover:scale-105 hover:text-gray-500'>
                            <BiImageAdd size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {
            showModal && (
                <div className='fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center z-[99]'>
                    <div className="bg-white p-4 rounded-md gap-2 flex justify-center items-center">
                        <button className='p-3 rounded-full bg-gray-200 absolute top-5 right-5 focus:outline-none hover:scale-105 duration-75 delay-0 active:scale-110 active:bg-white' onClick={() => setShowModal(false)}>
                            <GrFormClose size={30} />
                        </button>
                        <form className='flex flex-col text-center gap-2'>
                            <div className='flex justify-start'>
                                <h2 className='text-xl text-start font-bold '>
                                    Filtros
                                </h2>
                            </div>
                            <div className='p-1 flex gap-2'>
                                <select className='flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-[#272829] p-2 rounded-xl duration-300 transition-all ease-in-out cursor-pointer'>
                                    <option value="">Dificultdad</option>
                                    <option value="">Facil</option>
                                    <option value="">Intermedio</option>
                                    <option value="">Dificil</option>
                                </select>
                                <select className='flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-[#272829] p-2 rounded-xl duration-300 transition-all ease-in-out cursor-pointer'>
                                    <option value="">Tiempo</option>
                                    <option value="">10m</option>
                                    <option value="">15m</option>
                                    <option value="">20m</option>
                                    <option value="">25m</option>
                                    <option value="">30m</option>
                                    <option value="">+35m</option>
                                </select>
                                <select className='flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-[#272829] p-2 rounded-xl duration-300 transition-all ease-in-out cursor-pointer'>
                                    <option value="">Hora de</option>
                                    <option value="">Desayuno</option>
                                    <option value="">Almuerzo</option>
                                    <option value="">Once</option>
                                    <option value="">Cena</option>
                                </select>
                                <select className='flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-[#272829] p-2 rounded-xl duration-300 transition-all ease-in-out cursor-pointer'>
                                    <option value="">Origen</option>
                                    <option value="">Argentina</option>
                                    <option value="">Bolivia</option>
                                    <option value="">Colombia</option>
                                    <option value="">Chile</option>
                                    <option value="">Peru</option>
                                </select>
                            </div>
                            <button className='flex font-bold justify-center bg-gray-200 dark:bg-black dark:hover:bg-[#272829] p-2 rounded-xl duration-300 transition-all ease-in-out hover:bg-gray-300'>
                                Filtrar
                            </button>
                        </form>
                    </div>
                </div>
                
            )
        }
    );
};

