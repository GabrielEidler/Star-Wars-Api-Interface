import React from 'react';
import { IconContext } from "react-icons";

//custom imports
import classes from './bigCard.css';

const BigCard = ({content, category}) => {

    return(
        <div className={classes.bigCard} >
            <div className={classes.border} >
                    <p className={classes.title}>{content.name}</p>
                    <p className={classes.title}>(only working for people at the moment.)</p>
                    <div className={classes.content} >
                        <p>Year Of Birth: {content.birth_year}</p>
                        <p>Gender: {content.gender}</p>
                        <p>Hair Color: {content.hair_color}</p>
                        <p>height: {content.height}</p>
                        <a href='https://en.wikipedia.org/wiki/List_of_Star_Wars_characters' target="_blank">learn more -></a>
                    </div>
            </div>
        </div>
    )
};


export default BigCard;