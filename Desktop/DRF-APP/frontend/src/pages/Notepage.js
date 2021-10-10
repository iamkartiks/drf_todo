import React, {useState, useEffect} from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.development'

const Notepage=({match})=>{

    let noteId = match.params.id
    let [note, setNote] = useState(null)

    useEffect(()=>{
        getNote()
    },[noteId])

    let getNote = async ()=> {
        let response = await fetch(`/note/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }
    return (
        <div>
            <h3>{note?.body}</h3>
        </div>
    ) 
}

export default Notepage
