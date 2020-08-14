import React from 'react';

//custom imports
import classes from './mediumCard.css';

const MediumCard = ({content, category}) => {
    let styleClass;
    let contentCategory;

    // filter if it a movie or not
    if(category === 'films'){
        contentCategory = content.title
    }else{
        contentCategory = content.name
    }


    return(
        <div className={classes.mediumCard} >
            <div className={classes.border} >
                <p className={classes.title}>{contentCategory}</p>
            </div>
        </div>
    )
};


export default MediumCard;