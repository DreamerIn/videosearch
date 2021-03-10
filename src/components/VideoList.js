import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video, index) => {
        return (
        <div className="ui relaxed divided list">
            <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
        </div>
        )
    })
    return(
        <div>
            {renderedList}
        </div>
    )
};

export default VideoList;