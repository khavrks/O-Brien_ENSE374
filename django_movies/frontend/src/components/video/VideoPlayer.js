import React from "react";
import ReactPlayer from 'react-player'

export const VideoPlayer = () => {

    return(
        <div>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                playing
                width='100%'
                height='100%'
            />
        </div>
    )
}