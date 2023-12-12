import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { BiImageAdd, BiSend } from 'react-icons/bi'

const CardNewForum = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setImage(acceptedFiles[0]);
        }
    };

    const handleSubmit = () => {
        // Here, you can handle the submission, e.g., send data to a server

        // You have text, image, and link to work with in your submission logic
        console.log('Text:', text);
        console.log('Image:', image);
        console.log('Link:', link);
    };


    return (
        <div className="p-4 bg-[#EEEEEE] dark:bg-[#272829] w-[800px] rounded-md animate-fade-down animate-duration-100 flex">
            <form className='w-full'>
                <div className="flex gap-2">
                    <div className="">
                        <div className='rounded-full w-[60px] h-[60px]'>
                            <img src='https://picsum.photos/id/27/367/267' className='w-full h-full object-cover rounded-full' />
                        </div>
                    </div>
                    <textarea className="text-stat dark:text-white bg-[#EEEEEE] dark:bg-[#272829] focus:outline-none w-full" placeholder="De qué quieres hablar?" value={text} onChange={handleTextChange}>
                    </textarea>
                </div>
                <div className="">
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="Selected" className="w-[200px] h-[200px] object-cover rounded-xl" />
                    ) : (
                        <br></br>
                    )}
                </div>
                <div className='flex gap-2 justify-center items-center pt-2'>
                    {/* subir imagen */}
                    <div className='flex gap-2 justify-center items-center'>
                        <Dropzone onDrop={handleImageDrop} accept="image/*">
                            {({ getRootProps, getInputProps }) => (
                                <div
                                    {...getRootProps()}
                                    className="dark:text-white flex items-center justify-center cursor-pointer"
                                >
                                    <input {...getInputProps()} />
                                    <BiImageAdd size={30} className='dark:text-white hover:scale-110 duration-100 hover:text-red-500' />
                                </div>
                            )}
                        </Dropzone>
                        <button className="cursor-pointer hover:text-red-500 duration-100 hover:scale-110" onClick={handleSubmit}>
                            <BiSend size={30} className='dark:text-white' />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CardNewForum;
