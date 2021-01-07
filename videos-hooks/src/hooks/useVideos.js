import { useEffect, useState } from 'react';

import YouTubeAPI from '../apis/YouTube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    const search = async (term) => {
        const response = await YouTubeAPI.get('/search', {
            params: { q: term }
        });

        const videos = response.data.items.map((item) => {
            return {
                id: item.id.videoId,
                image: item.snippet.thumbnails.medium,
                title: item.snippet.title,
                description: item.snippet.description
            };
        });
        setVideos(videos);
    };

    useEffect(() => {
        console.log('searching...');
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    return [videos, search];
};

export default useVideos;
