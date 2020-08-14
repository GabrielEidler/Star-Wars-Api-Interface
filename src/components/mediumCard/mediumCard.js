import React from 'react';
import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa';

//custom imports
import classes from './mediumCard.css';

const MediumCard = ({content, category, buttonHandler}) => {
    let styleClass;
    let contentCategory;

    // filter if it a movie or not
    if(category === 'films'){
        contentCategory = content.title
    }else{
        contentCategory = content.name
    }


    return(
        <div onClick={buttonHandler} className={classes.mediumCard} >
            <div className={classes.border} >
                    <p className={classes.title}>{contentCategory}</p>
                    <IconContext.Provider value={{ size: "100px"}}>
                        <FaPlus />
                    </IconContext.Provider>
            </div>
        </div>
    )
};


export default MediumCard;