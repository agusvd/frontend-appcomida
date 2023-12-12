import React, { useState } from 'react';
import { BiUpload, BiTrash } from 'react-icons/bi'
import { AiOutlinePlus } from "react-icons/ai";


const CreateRecipe = () => {
    const [imagen, setImagen] = useState(null);
    const [imagenPreview, setImagenPreview] = useState('');
    const [ingredientes, setIngredientes] = useState([{ nombre: '', cantidad: '' }]);
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const imageFile = e.dataTransfer.files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagen(imageFile);
                setImagenPreview(e.target.result);
            };
            reader.readAsDataURL(imageFile);
        }
    };

    const handleImagenChange = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagen(imageFile);
                setImagenPreview(e.target.result);
            };
            reader.readAsDataURL(imageFile);
        }
    };

    const handleIngredienteChange = (index, e) => {
        const { name, value } = e.target;
        const updatedIngredientes = [...ingredientes];
        updatedIngredientes[index][name] = value;
        setIngredientes(updatedIngredientes);
    };

    const addIngrediente = () => {
        setIngredientes([...ingredientes, { nombre: '', cantidad: '' }]);
    };

    const removeIngrediente = (index) => {
        const updatedIngredientes = [...ingredientes];
        updatedIngredientes.splice(index, 1);
        setIngredientes(updatedIngredientes);
    };

    return (
        <div className='overflow-x-hidden h-screen font-primary w-full'>
            {/* Contenedor principal */}
            <div className='h-full w-full overflow-auto'>
                {/* Formulario */}
                <form className='w-full h-full flex items-start'>
                    <div className='p-2 w-full gap-2'>
                        <div className='col-span-2'>
                            <label className='text-xl text-white font-semibold'>Titulo</label>
                            <input placeholder='Titulo...' className='rounded-md w-full bg-gray-200 text-black dark:text-white dark:bg-[#202020] p-2' />
                        </div>
                        <div className=''>
                            <label className='text-xl text-white font-semibold'>Tiempo</label>
                            <input placeholder='Tiempo...' className='rounded-md w-full bg-gray-200 text-black dark:text-white dark:bg-[#202020] p-2' />
                        </div>
                        <div className=''>
                            <label className='text-xl text-white font-semibold'>Dificultad</label>
                            <select className='rounded-md w-full bg-gray-200 text-black dark:text-white dark:bg-[#202020] p-2'>
                                <option>
                                    Facil
                                </option>
                                <option>
                                    Intermedio
                                </option>
                                <option>
                                    Dificil
                                </option>
                            </select>
                        </div>
                        <div className=''>
                            <label className='text-xl text-white font-semibold'>Ingredientes</label>
                            <div className='flex gap-2'>
                                <div className='flex justify-center items-center'>
                                    <button type='button' onClick={addIngrediente} className='duration-300 transition-all ease-in-out p-2 rounded-md flex items-center gap-2 dark:text-white text-black dark:bg-[#202020] bg-gray-200 mb-2'>
                                        <AiOutlinePlus size={30} className='dark:text-white text-black' />
                                    </button>
                                </div>
                                <div className='flex gap-2 max-h-[50vh] overflow-auto'>
                                    {ingredientes.map((ingrediente, index) => (
                                        <div key={index} className='flex'>
                                            <div className='flex bg-[#202020] p-2 rounded-md items-end'>
                                                <div className='gap-2 flex p-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className='text-xl text-white font-semibold'>
                                                            Ingrediente
                                                        </label>
                                                        <input
                                                            type='text'
                                                            name='nombre'
                                                            placeholder='Ingrediente'
                                                            value={ingrediente.nombre}
                                                            onChange={(e) => handleIngredienteChange(index, e)}
                                                            className='bg-gray-100 rounded-md p-1 hover:bg-gray-200 duration-300 transition-all ease-in-out' />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className='text-xl text-white font-semibold'>
                                                            Cantidad
                                                        </label>
                                                        <input
                                                            type='text'
                                                            name='cantidad'
                                                            placeholder='Cantidad/Porcion/Etc'
                                                            value={ingrediente.cantidad}
                                                            onChange={(e) => handleIngredienteChange(index, e)}
                                                            className='bg-gray-100 rounded-md p-1 hover:bg-gray-200 duration-300 transition-all ease-in-out' />
                                                    </div>

                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <button type='button' onClick={() => removeIngrediente(index)} className=''>
                                                        <BiTrash size={30} className='hover:text-red-500 duration-100 transition-all ease-in-out text-white' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                        <div>
                            {/* Subir foto o video */}
                            <div
                                onDrop={handleDrop}
                                onDragOver={(e) => e.preventDefault()}
                                onDragEnter={(e) => e.preventDefault()}
                                className='flex justify-center items-center border-2 dark:border-white p-4 rounded-t-xl border-b-0 w-[300px] object-cover h-fit'
                            >
                                {imagenPreview ? (
                                    <img src={imagenPreview} alt='Vista previa de la imagen' className='w-[300px] h-[300px]' />
                                ) : (
                                    <div className='w-[300px] h-[300px] flex flex-col gap-4 justify-center items-center'><BiUpload size={35} className='dark:text-white' />
                                        <p className='font-bold dark:text-white'>Arrastra y suelta la imagen aquí</p>
                                    </div>
                                )}
                            </div>
                            <div className='p-2 border-2 dark:border-white flex flex-col text-center w-[300px] rounded-b-xl'>
                                <label className='font-bold'>O sube tu foto aqui</label>
                                <input
                                    type='file'
                                    onChange={handleImagenChange}
                                    accept='image/*'
                                    className='bg-gray-100 dark:bg-gray-800'
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateRecipe;
