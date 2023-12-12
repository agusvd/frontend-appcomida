import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import CreateRecipe from '../components/common/CreateRecipe'

const CreateRecipePage = () => {
    return (
        <div className='flex dark:bg-black bg-white w-full'>
            <Sidebar/>
            <CreateRecipe/>
        </div>
    )
}

export default CreateRecipePage