import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import  { SearchBar, VideoDetail, VideoList } from './components';



class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }


    handleSubmit = async (searchTerm) => {
      
        const response =  await youtube.get('search', {

            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q: searchTerm
            }

        })     
        // console.log(response.data.items); 
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render(){

        const { selectedVideo, videos } = this.state;
     
    
        return(
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
            
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>    

                        <Grid item xs={8}>
                              <VideoDetail video={selectedVideo}/>
                        </Grid>
            
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
        
                </Grid>    
            </Grid>
        </Grid>
        )

    }


}



// const App = () => {
//     return(<h1>YouTuebe Clone App</h1>)
// }


export default App;




