import React, { Fragment } from 'react';
import Song from './Song';

const SongList = ({charts, loaded, selectedSong}) => {

    if(!loaded) {
        return <p>Loading...</p>
    }
    return (
        <Fragment>
            <ol>
                {charts.map((song, index) => (
                    <Song key={song.id.attributes["im:id"]} index={index} selectedSong={selectedSong}>{song["im:name"].label}</Song>
                ))}
            </ol>
        </Fragment>
    )
}

export default SongList;