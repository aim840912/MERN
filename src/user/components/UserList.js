import React from 'react'

import './UserList.css'

const UserList = props => {
    if (props.items.length === 0){
        return(
            <div className='center'>
                <h2>no users found.</h2>
            </div>
        )
    }

}

export default UserList