import React from 'react';

import SearchBar from './components/SearchBar';
import Youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component{
     state = {videos: [], selectedVideo: null};

    onTermSubmit = async(term) => {
      const response =  await Youtube.get('/search', {
           params: {
               q: term
           }
       });
    
       this.setState({
           videos: response.data.items,
           selectedVideo: response.data.items[0]
       })
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({
            selectedVideo: video   
        });
    }

    componentDidMount(){
        this.onTermSubmit("Pataaki poriyo");
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default App;