import React from 'react';

//custom imports
import classes from './smallCard.css';

const SmallCard = ({content, buttonHandler}) => {
    let styleClass;

    switch (content.key) {
        case 'starships':
            styleClass = classes.starships;
            break;
        case 'vehicles':
            styleClass = classes.vehicles;
            break;
        case 'species':
            styleClass = classes.species;
            break;
        case 'films':
            styleClass = classes.films;
            break;
        case 'planets':
            styleClass = classes.planets;
            break;
        case 'people':
            styleClass = classes.people;
            break;
        default:
            styleClass = '';
            break;
    }
   

    return(
        <div className={classes.smallCard} >
            <div className={classes.border} >
                <p className={classes.title}>{content.key}</p>
                <button className={styleClass} onClick={buttonHandler} />
            </div>
        </div>
    )
};


export default SmallCard;