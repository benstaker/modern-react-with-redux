import { useEffect, useState } from 'react';

import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [term, setTerm] = useState('buildings');

    const [videos, search] = useVideos(term);

    useEffect(() => {
        setSelectedVideo(videos.length ? videos[0] : null);
    }, [setSelectedVideo, videos]);

    return (
        <div className="ui container">
            <SearchBar
                onFormSubmit={() => search(term)}
                onTermChange={(term) => setTerm(term)}
                term={term}
            />

            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={(video) => setSelectedVideo(video)}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
