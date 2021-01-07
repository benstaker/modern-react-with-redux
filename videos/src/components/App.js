import React from 'react';

import YouTubeAPI from '../apis/YouTube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
    state = {
        selectedVideo: null,
        term: 'buildings',
        videos: []
    };

    onVideoSelect = (video) => {
        console.log('selecting video: ', video);
        this.setState({ selectedVideo: video });
    };

    onTermChange = (term) => {
        this.setState({ term: term });
    };

    onTermSubmit = () => {
        this.setState({ selectedVideo: null });
        this.search(this.state.term);
    };

    search = async (term) => {
        const response = await YouTubeAPI.get('/search', {
            params: { q: this.state.term }
        });

        const videos = response.data.items.map((item) => {
            return {
                id: item.id.videoId,
                image: item.snippet.thumbnails.medium,
                title: item.snippet.title,
                description: item.snippet.description
            };
        });
        this.setState({ selectedVideo: videos.length ? videos[0] : null, videos });
    };

    componentDidMount() {
        this.search();
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onTermSubmit}
                    onTermChange={this.onTermChange}
                    term={this.state.term}
                />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
