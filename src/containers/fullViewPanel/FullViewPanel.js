import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

//custom imports
import api from '../../api/api'
import classes from './FullViewPanel.css';
import BigCard from '../../components/bigCard/bigCard'

const FullViewPanel = (props) => {
    //setting up newValue for Redux
    const { fullView, newValue } = props;

    const [data, setData] = useState([]);
    const [items, setItems] = useState(null);
    
    //this getData matches the selected name and gets the content surrounding that name
    const getData = async (name) => {
        const content = await api.get(newValue);
        const results = content.data.results;
        results.forEach(element => {
            //if element macthes selected
            if(element.name === fullView){;
                console.log('element: ', element);
                //contentParser(element);
                let listItems = (<BigCard content={element} />) 
                    setItems(listItems);
            }
        });
    }

    useEffect(() => {
        if(fullView !== ''){
            getData(fullView);
        }
    }, [fullView])

  /*   const contentParser = (element) => {
        for (const key in content){
            let object = {};
            object.key = key;
            object.value = element[key];
            setData([...data, object]);
        }
    } */

    return(      
        <div className={classes.container}>
            {items}
        </div>
    )
};

    //transforms a section of the Store state into a usable prop
    const mapStateToProps = store => ({
        fullView: store.clickState.fullView,
        newValue: store.clickState.newValue
      });

      export default connect(mapStateToProps)(FullViewPanel);