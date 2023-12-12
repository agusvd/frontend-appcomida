import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import Explore from '../components/common/Explore'

const ExplorePage = () => {

    return (
        <div className='flex dark:bg-black bg-white'>
            <Sidebar />
            <Explore/>
        </div>
    )
}

export default ExplorePage