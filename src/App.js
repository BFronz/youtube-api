import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import  SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';


class App extends React.Component {

    render(){
    
        return(
            <Grid justify="center" containter spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>

                        <Grid item xs={12}>
                            <SearchBar />
                            <Grid item xs={8}>
                              <VideoDetail />
                            </Grid>

                            <Grid item xs={4}>
                                {/* video list */}
                            </Grid>

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


