import React from 'react';
import { IconContext } from "react-icons";

//custom imports
import classes from './bigCard.css';

const BigCard = ({content, category}) => {


    return(
        <div className={classes.bigCard} >
            <div className={classes.border} >
                    <p className={classes.title}>Full View</p>
                    <div className={classes.content} >
                        <p>name: fake data 1</p>
                        <p>name: fake data 1</p>
                        <p>name: fake data 1</p>
                        <p>name: fake data 1</p>
                        <p>name: fake data 1</p>
                    </div>
            </div>
        </div>
    )
};


export default BigCard;