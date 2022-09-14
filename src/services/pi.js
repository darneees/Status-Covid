import axios from 'axios';

// estado


const pi = axios.create({
    baseURL: "https://covid19-brazil-api.now.sh/api/report/v1"
});

export default pi;