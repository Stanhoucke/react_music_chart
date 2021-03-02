import React, { Fragment, useEffect, useState } from 'react';
import SongDetails from '../components/SongDetails';
import SongList from '../components/SongList';

const ChartBox = () => {

    const [charts, setCharts] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getCharts();
    },[])

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
            <SongList charts={charts} loaded={loaded}/>
            <SongDetails/>
        </Fragment>
    )
}

export default ChartBox;