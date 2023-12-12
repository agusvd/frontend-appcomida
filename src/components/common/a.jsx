<form className='flex flex-col sm:flex sm:flex-row'>
                    <div className='grid grid-cols-2 w-full'>
                        <div className='border-2 flex col-span-2'>
                            <input type='text' placeholder='Añade un título' className='text-xl border-none outline-none font-bold dark:bg-black dark:text-white underline underline-offset-[5px] w-full p-2' />
                        </div>
                    </div>
                    {/* Titulo de la receta */}

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
                    <div className='p-2 border-2 dark:border-white border-dashed flex flex-col text-center w-[300px] rounded-b-xl'>
                        <label className='font-bold'>O sube tu foto aqui</label>
                        <input
                            type='file'
                            onChange={handleImagenChange}
                            accept='image/*'
                            className='bg-gray-100 dark:bg-gray-800'
                        />
                    </div>
                    <div>
                        <div className='flex gap-10 items-center'>
                            <label className='text-2xl font-semibold'>Ingredientes</label>
                            <button type='button' onClick={addIngrediente} className='duration-300 transition-all ease-in-out p-2 rounded-xl flex items-center gap-2 dark:text-white text-black dark:bg-[#202020] bg-gray-200'>
                                <MdOutlinePlaylistAdd size={30} className='dark:text-white text-black' />Agregar
                            </button>
                        </div>
                        {ingredientes.map((ingrediente, index) => (
                            <div key={index} className='flex gap-10'>
                                <div className='space-y-2'>
                                    <div className='gap-2 flex flex-col border-2 border-red-500'>
                                        <input
                                            type='text'
                                            name='nombre'
                                            placeholder='Ingrediente'
                                            value={ingrediente.nombre}
                                            onChange={(e) => handleIngredienteChange(index, e)}
                                            className='bg-gray-100 rounded-md p-1 hover:bg-gray-200 duration-300 transition-all ease-in-out' />
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
                                    <button type='button' onClick={() => removeIngrediente(index)} className='hover:text-red-500 duration-100 transition-all ease-in-out'>
                                        <BiTrash size={30} className='dark:text-white text-black' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </form>