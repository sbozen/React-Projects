import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",

    headers: { Authorization: "Client-ID 6RtExMETyKyDKOE-QDYP_5EXjfEcZwmIRgY8K5zReQA", },
});