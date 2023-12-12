import React from 'react'
import Forums from '../components/common/Forums'
import Sidebar from '../components/shared/Sidebar'

const HomePage = () => {

    return (
        <div className='flex dark:bg-black bg-white w-screen '>
            <Sidebar />
            <Forums/>
        </div>
    )
}

export default HomePage