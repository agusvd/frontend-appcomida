import React, { useState } from 'react'
import { BiSearch, BiMessageRoundedAdd } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri'
import TopicMiniCard from '../cards/TopicMiniCard';
import CardNewForum from '../cards/CardNewForum';
const Forums = () => {

    const fakeTopic = [
        {
            id: 1,
            name: "Lo importante de comer manzana",
            username: "Vane123",
            time: "1d",
            comments: 5,
            topicInfo: "La manzana, esa fruta de sabor dulce y refrescante, es mucho más que un simple bocado delicioso. Consumir manzanas regularmente aporta una serie de beneficios para la salud que la convierten en una elección inteligente en tu dieta diaria",
            image: "https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_1280.png",
            imageProfile: "https://img.freepik.com/foto-gratis/alegre-mujer-europea-bebe-cafe-taza-llevar-sostiene-telefono-inteligente-usa-conexion-gratuita-internet-descanso-sonrie-suavemente-usa-anteojos-elegante-blusa-aislada-sobre-pared-blanca_273609-53388.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 2,
            name: "Las hamburguesas son lo mejor",
            username: "pelusaPa",
            time: "2m",
            comments: 10,
            topicInfo: "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "https://images.aws.nestle.recipes/original/94908887838ee9a32701a95a3fd7a4ce_hamburguesa-rellena-de-queso-y-tocineta-recetas-nestle-venezuela-maggi_(1).jpg",
            imageProfile: "https://img.freepik.com/foto-gratis/aprovechar-ventajas-conexion-wi-fi-gratuita-apuesto-joven-trabajando-computadora-portatil-sonriendo-mientras-sentado-cafeteria-acera_231208-12091.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 3,
            name: "Beneficios de la actividad física",
            username: "fitGirl21",
            time: "3h",
            comments: 7,
            topicInfo: "health. Regular physical activity is essential for maintaining good health. It can help you stay fit, reduce the risk of chronic diseases, and improve your overall well-being.",
            image: "https://picsum.photos/id/626/367/267",
            imageProfile: "https://img.freepik.com/foto-gratis/grave-mujer-pelo-rizado-disgustada-usa-conexion-gratuita-internet-escuchar-musica-linea-usa-audifonos-inalambricos-orejas-vestidas-camiseta-negra-casual-tiene-poses-expresion-pensativa-interior_273609-49410.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 4,
            name: "Recetas de cocina saludable",
            username: "chefHealthy",
            time: "4h",
            comments: 15,
            topicInfo: "food. Explore a variety of delicious and nutritious recipes that will keep you on the path to a healthy lifestyle. Eating well doesn't have to be boring!",
            image: "https://picsum.photos/id/628/367/267",
            imageProfile: "https://img.freepik.com/foto-gratis/joven-enfocado-estudiando-casa-cursos-linea-o-informacion-gratuita-si-mismo_155003-43580.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 5,
            name: "Viajes aventureros al aire libre",
            username: "adventureSeeker",
            time: "1d",
            comments: 9,
            topicInfo: "travel. Embark on exciting outdoor adventures and explore the beauty of nature. From hiking to camping, there's a world of adventures waiting for you.",
            image: "https://picsum.photos/id/627/367/267",
            imageProfile: "https://img.freepik.com/foto-gratis/hermosa-elegante-mujer-joven-independiente-zapatillas-blancas-top-rojo-lunares-sentado-banco-manteniendo-piernas-cruzadas-sosteniendo-computadora-portatil-usando-wifi-gratuito-parque-ciudad-trabajos-remotos-distantes_343059-2905.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 6,
            name: "El arte de la fotografía",
            username: "photoEnthusiast",
            time: "2d",
            comments: 12,
            topicInfo: "arts. Dive into the world of photography and capture moments that tell unique stories. Discover tips, techniques, and creative inspiration.",
            image: "https://picsum.photos/id/633/367/267",
            imageProfile: "https://img.freepik.com/foto-gratis/concepto-personas-estilo-vida-tecnologia-comunicacion-blogger-masculino-joven-atractivo-barba-difusa-cabello-rizado-aspecto-pensativo-trabajando-panel-tactil-pc-casa-usando-wifi-gratuito_343059-1870.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 7,
            name: "Tecnología y gadgets innovadores",
            username: "techGeek",
            time: "5h",
            comments: 8,
            topicInfo: "technology. Stay up to date with the latest gadgets and tech trends. Explore reviews, recommendations, and tech discussions.",
            image: "https://picsum.photos/id/639/367/267",
            imageProfile: "https://img.freepik.com/fotos-premium/fondo-naturaleza-imagenes-fondo-pantalla-hd-banner-web-modelo-nina-modelo-hermoso-descarga-gratuita_88650-3017.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 8,
            name: "Cuidado de mascotas y consejos",
            username: "petLover",
            time: "1w",
            comments: 6,
            topicInfo: "pets. Learn how to care for your furry friends and provide them with the love and attention they deserve. Share your pet stories!",
            image: "https://picsum.photos/id/656/367/267",
            imageProfile: "https://img.freepik.com/foto-gratis/retrato-exitoso-joven-empresario-afeitar-elegante-chaqueta-formal-que-trabaja-forma-remota-computadora-portatil-utilizando-conexion-inalambrica-gratuita-internet-lujosa-suite-hotel-mientras-viaje-negocios_343059-1783.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 9,
            name: "La importancia de la educación",
            username: "eduAdvocate",
            time: "2w",
            comments: 11,
            topicInfo: "education. Education is the key to a brighter future. Discuss educational topics, share resources, and inspire lifelong learning.",
            image: "https://picsum.photos/id/659/367/267",
            imageProfile: "https://img.freepik.com/foto-gratis/mujer-joven-feliz-pelo-largo-suelto-sentada-frente-computadora-portatil-conexion-inalambrica-internet-gratuita-mirando-pantalla-sonrisa-alegre-leyendo-mensajes-sus-amigos-linea_273609-6714.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        },
        {
            id: 10,
            name: "Deportes y competencias emocionantes",
            username: "sportsFanatic",
            time: "4d",
            comments: 14,
            topicInfo: "sports. Stay updated on your favorite sports and teams. Join discussions, make predictions, and celebrate victories together.",
            image: "https://picsum.photos/id/661/367/267",
            imageProfile: "https://img.freepik.com/foto-gratis/joven-bloguera-llena-alegria-apariencia-atractiva-monitorea-sitio-web-personal-comparte-exito-amigo-traves-telefono-celular-jacta-que-tiene-muchos-seguidores-conectado-red-inalambrica-gratuita_273609-2750.jpg?size=626&ext=jpg&ga=GA1.1.1718411950.1697581152&semt=sph"
        }
    ]

    const [showNewTopic, setShowNewTopic] = useState(false)

    const handleNewTopicClick = () => {
        setShowNewTopic(!showNewTopic)
    }


    return (
        <div className='overflow-x-hidden h-screen dark:bg-black w-full flex flex-col m-2'>
            {/* Search y New topic */}
            <div className='flex flex-col justify-center items-center gap-2 w-full pt-2'>
                <div className='flex bg-[#EEEEEE] dark:bg-[#272829] w-[800px] p-2 rounded-md items-center gap-2'>
                    {/* Buscador */}
                    <BiSearch size={30} className='dark:text-white' />
                    <input placeholder='Buscar...' className='w-full text-xl dark:text-white bg-[#EEEEEE] dark:bg-[#272829] outline-none' />
                    {/* boton para crear un forum */}
                    <button className={`p-2 rounded-md flex items-center justify-center gap-2 
                    ${showNewTopic ? 'bg-red-500 ' : 'bg-gray-200 active:bg-green-500 duration-300 ease-in-out'} `}
                        onClick={handleNewTopicClick}>
                        {showNewTopic ?
                            <RiCloseFill size={25} className='text-white' />
                            :
                            <>
                                <span className='dark:text-white font-semibold'>Nuevo</span>
                            </>
                        }
                    </button>
                </div>
                <div className='p-2 font-primary flex flex-col justify-center items-center w-full'>
                    {showNewTopic && (
                        <CardNewForum />
                    )}
                </div>
            </div>
            {/* form topic */}

            {/* Topics */}
            <div className='p-2 gap-2 font-primary flex flex-col justify-center items-center w-full'>
                {fakeTopic.map((topic) => (
                    <TopicMiniCard key={topic.id} topic={topic} />
                ))}
            </div>
        </div>
    )
}

export default Forums