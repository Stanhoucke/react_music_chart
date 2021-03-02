import React, { Fragment } from 'react';
import SongDetails from '../components/SongDetails';
import SongList from '../components/SongList';

const ChartBox = () => {
    return (
        <Fragment>
            <p>I am a ChartBox</p>
            <SongList/>
            <SongDetails/>
        </Fragment>
    )
}

export default ChartBox;