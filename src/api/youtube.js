import axios from 'axios';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: ['AIzaSyCX7Zb5D4vKM09LJMv-LDwr4q0sfxHvDrs']
    }


});