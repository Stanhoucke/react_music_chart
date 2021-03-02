import React, { Fragment } from 'react';

const SongDetails = ({details}) => {
    return (
        <Fragment>
            <h2>{details.title.label}</h2>
            <img src={details["im:image"][2].label}></img>
        </Fragment>
    )
}

export default SongDetails;