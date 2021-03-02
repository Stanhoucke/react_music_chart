import React, { Fragment, useEffect, useState } from 'react';
import SongDetails from '../components/SongDetails';
import SongList from '../components/SongList';

const ChartBox = () => {

    const [charts, setCharts] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [selectedSongIndex, setSelectedSongIndex] = useState(0);

    useEffect(() => {
        getCharts();
    },[])

    const changeSelectedSongIndex = (newSongIndex) => {
        setSelectedSongIndex(newSongIndex);
    }

    const getCharts = () => {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url)
        .then(response => response.json())
        .then(data => setCharts(data.feed.entry))
        .then(() => setLoaded(true))
    }

    return (
        <Fragment>
            <p>I am a ChartBox</p>
            <SongList charts={charts} loaded={loaded} selectedSong={changeSelectedSongIndex}/>
            <SongDetails/>
        </Fragment>
    )
}

export default ChartBox;