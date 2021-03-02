import React, { Fragment, useEffect, useRef, useState } from 'react';

const SongDetails = ({details, loaded}) => {

    const audioRef = useRef();
    const [source, setSource] = useState("");

    useEffect(() => {
        updateSong();
    }, [details])

    const updateSong = () => {
        if(loaded) {
            setSource(details.link[1].attributes.href);
            if(audioRef.current){
                audioRef.current.pause();
                audioRef.current.load();
            }
        }
    }

    if(!loaded) {
        return <p>Loading...</p>
    }
    return (
        <Fragment>
            <h2>{details["im:name"].label}</h2>
            <h3>Artist: {details["im:artist"].label}</h3>
            <img src={details["im:image"][2].label}></img>
            <audio controls ref={audioRef}>
                <source src={details.link[1].attributes.href} type={details.link[1].attributes.type}></source>
            </audio>
        </Fragment>
    )
}

export default SongDetails;