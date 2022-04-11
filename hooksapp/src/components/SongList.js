import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewSongForm from './NewSongForm'

const SongList = () => {
   
    const [songs, setSongs ] = useState([
        {title: "Beautiful Girls", id: 1},
        {title: "Tears on my guitar", id: 2},
        {title: "Welcome to Paradise", id: 3},
    ])
    const addSong = (title) => {
        setSongs([
            ...songs,
            {title, id: uuidv4() }
        ])
    }
    useEffect(() => {
        console.log('use effect ran', songs)
    }, [songs])
  return (
    <div className="song-list">
        <ul>
            { songs.map(song => {
                return (
                    <li key={song.id}>{song.title}</li>
                )
            }) }
        </ul>
        <NewSongForm addSong={addSong} />
    </div>
  )
}

export default SongList