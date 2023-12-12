import React from 'react'
import PostCardFollows from '../cards/PostCardFollows'


const Posts = () => {

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
    ];

    return (
        <div className='overflow-x-hidden h-screen'>
            <div className='p-2 gap-10 font-primary grid grid-cols-1 items-center justify-center'>
                {fakePost.map((post) => (
                    <PostCardFollows key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Posts