import React, {useState, useEffect} from 'react';
import api from '../api/api'


const MainMenu = () => {
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
        console.log('data: ',content.data)
    }

    useEffect(() => {
        getData();
    }, [])

    loadGlossary();
    
    

    return(
        <>
            <h1>Hello World 2</h1>
            {glossary.map(item => 
            <p key={item.key} >{item.key}: {item.value}</p>
            )}
        </>
    )
};


export default MainMenu;