import React, { Fragment } from 'react';

const SongDetails = ({details, loaded}) => {

    if(!loaded) {
        return <p>Loading...</p>
    }
    return (
        <Fragment>
            <h2>{details.title.label}</h2>
            <img src={details["im:image"][2].label}></img>
            <audio controls>
                <source src={details.link[1].attributes.href} type={details.link[1].attributes.type}></source>
            </audio>
        </Fragment>
    )
}

export default SongDetails;