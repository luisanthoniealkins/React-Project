import React from 'react';
import './App.css';
import Header from './Component/Shared/Header/Header'

import aud from './Assets/backmusic.wav'

class App extends React.Component{

    render(){
        return(            
            <React.Fragment>
                <audio src={aud} autoPlay loop/>                            
                <Header/>                                     
            </React.Fragment>            
        )
    }
}

export default App


