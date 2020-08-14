import React from 'react';


//custom imports
import TopPanel from './containers/TopPanel/TopPanel'
import SlidePanel from './containers/SlidePanel/SlidePanel'
import FullViewPanel from './containers/fullViewPanel/FullViewPanel'
import classes from './App.css';

const App = () => {

    return(
        <div className={classes.App} >
            <h1 className={classes.mainTitle}>STAR WARS API INTERFACE </h1>
            <TopPanel />
            <div className={classes.bottomContent} >
                <div className={classes.leftPanel}>
                    <SlidePanel />
                </div>
                <div className={classes.rightPanel}>
                    <FullViewPanel />
                </div>
            </div>
            
        </div>
    )
};


export default App;