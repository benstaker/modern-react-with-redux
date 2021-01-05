import React from 'react';

import YouTubeAPI from '../apis/YouTube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
    state = {
        videos: []
    };

    onTermSubmit = (term) => {
        console.log('term: ', term);

        YouTubeAPI.get('/search', {
            params: { q: term }
        }).then((response) => {
            console.log('response: ', response);
            this.setState({
                videos: response.data.items.map((item) => {
                    return {
                        id: item.id.videoId,
                        image: item.snippet.thumbnails.medium,
                        title: item.snippet.title,
                        description: item.snippet.description
                    };
                })
            });
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />

                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
