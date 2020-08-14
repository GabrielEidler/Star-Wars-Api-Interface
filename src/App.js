import React from 'react';


//custom imports
import TopPanel from './containers/TopPanel/TopPanel'
import SlidePanel from './containers/SlidePanel/SlidePanel'
import classes from './App.css';

const App = () => {

    return(
        <div className={classes.App} >
            <h1 className={classes.mainTitle}>STAR WARS API INTERFACE </h1>
            <TopPanel />
            <SlidePanel />
        </div>
    )
};


export default App;