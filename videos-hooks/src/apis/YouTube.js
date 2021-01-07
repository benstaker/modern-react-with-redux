import axios from 'axios';

const KEY = 'AIzaSyCIGHzjQYYjEyynqev61e615XXNtg2V80o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
