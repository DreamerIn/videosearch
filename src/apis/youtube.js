import axios from 'axios';

const KEY = "AIzaSyDOjnGapTrdIVbvb7V1P4yMx9ziy1xcy-s";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});