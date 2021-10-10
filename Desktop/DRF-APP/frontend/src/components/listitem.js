import React from 'react'

const listitem = ({note}) => {
    return (
        <div>
            <h3>{note.body}</h3>
        </div>
    )
}

export default listitem
