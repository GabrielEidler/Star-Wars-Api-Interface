import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../actions/'

//custom imports
import api from '../../api/api'
import classes from './FullViewPanel.css';
import BigCard from '../../components/bigCard/bigCard'

const FullViewPanel = (props) => {
    //setting up newValue for Redux
    const { newValue, clickButton } = props;

    const [data, setData] = useState({});
    const [glossary, setGlossary] = useState([]);

    
    const loadGlossary = () => {
        if(data){
            for (const key in data){
                if(!glossary.find(element => element.key === key && element.value === data[key])){
                    let object = {};
                    // here I extracted the key and the value
                    // and added to a state of array of objects
                    object.key = key;
                    object.value = data[key];
                    setGlossary([...glossary, object]);
                }
            }
        }
    }
    
    const getData = async () => {
        const content = await api.get('');
        setData(content.data);
        //console.log('data: ',content.data)
    }

    useEffect(() => {
        getData();
    }, [])

    loadGlossary();

    return(      
        <div className={classes.container}>
            <BigCard />
        </div>
    )
};

    //transforms a section of the Store state into a usable prop
    const mapStateToProps = store => ({
        newValue: store.clickState.newValue
      });

    const mapDispatchToProps = dispatch =>
      bindActionCreators({ clickButton }, dispatch);


      export default connect(mapStateToProps, mapDispatchToProps)(FullViewPanel);