import React, { useState } from 'react';

const Song = ({children, index, selectedSong}) => {

    const selectSong = () => {
        selectedSong(index);
    }

    return (
        <li>
            <h3>{children}</h3>
            <button onClick={selectSong}>More Details</button>
        </li>
    )
}

export default Song;