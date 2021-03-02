import React, { Fragment, useEffect, useState } from 'react';
import SongDetails from '../components/SongDetails';
import SongList from '../components/SongList';

const ChartBox = () => {

    const [charts, setCharts] = useState({});

    useEffect(() => {
        getCharts();
    },[])

    const getCharts = () => {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url)
        .then(response => response.json())
        .then(data => setCharts(data.feed.entry))
    }

    return (
        <Fragment>
            <p>I am a ChartBox</p>
            <SongList charts={charts}/>
            <SongDetails/>
        </Fragment>
    )
}

export default ChartBox;