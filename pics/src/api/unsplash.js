import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID P87PgBI_kuuWx9834nE37FU6RRc5OBLmFbH94a7Aod0'
    }
});
