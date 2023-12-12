import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import RightSide from '../components/shared/RightSide'
import ForumPost from '../components/common/ForumPost'

const ForumPostPage = () => {
    return (
        <div className='flex dark:bg-black bg-white overflow-auto w-screen'>
            <Sidebar />
            <ForumPost />
        </div>
    )
}

export default ForumPostPage