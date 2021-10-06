import React, {useState, useEffect} from 'react'

const NotesListPage = () => {
    
    let [notes, setNotes] = useState([])

    useEffect(()=> {

    },[]
    )

    let getNotes = async ()=>{
        let response = await fetch('http://127.0.0.1:8000/notes/')
        let data = await response.json()
        console.log('DATA',data)
        setNotes(data)
    }

    return (
        <div>
            notes
        </div>
    )
}

export default NotesListPage
