import React, {useState, useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fullViewSelect } from '../../actions/'

//custom imports
import api from '../../api/api'
import MediumCard from '../../components/mediumCard/mediumCard'
import classes from './SlidePanel.css';

const SlidePanel = (props) => {
    // getting newValue from REDUX store
    const {newValue, fullView, fullViewSelect} = props;
    const [items, setItems] = useState(null);

    // parses each content type
    const contentParser = (unparsedData, contentType) => {
        let results = unparsedData.results;
        //console.log(results);
        if(results){
            if(contentType === 'films'){
                const listItems = results.map(result =>
                    <MediumCard key={result.title} content={result} category={'films'}/>
                    );
                    setItems(listItems);
            }else{
                const listItems = results.map(result =>
                    <MediumCard 
                        key={result.name} 
                        content={result} 
                        category={'other'}
                        buttonHandler={()=>fullViewSelect(result.name)}
                    />
                    );
                    setItems(listItems);
            }
        }
    }
    
    // calls the api and retrieves data
    const getSelectedData = async (param = '') => {
        const content = await api.get(param);
        contentParser(content.data, newValue);
    }


    // called whenever button is clicked (newValue changes)
    useEffect(() => {
        getSelectedData(newValue);
    }, [newValue])

    
    return(      
        <div className={classes.container}>
         {items}
        </div>
    )
};

// makes newValue usable as a prop
const mapStateToProps = store => ({
    newValue: store.clickState.newValue,
    fullView: store.clickState.fullView
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fullViewSelect }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SlidePanel);
