import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import Profile from '../components/common/Profile'

const ProfilePage = () => {
    return (
        <div className='flex dark:bg-black bg-white'>
            <Sidebar />
            <Profile />
        </div>
    )
}

export default ProfilePage